"use client";
import React, { useEffect, useMemo, useState } from "react";
import axios from "axios";
import * as XLSX from 'xlsx';
import { useRouteData } from "@/hooks/hooks";
import tokenConfig, { URL } from "@/components/utils/format/tokenConfig";
import { FaRegEdit } from "react-icons/fa";
import { StudentData } from "@/interface/interface";
import { CustomLogout, CustomRegister } from "@/components/share/button";
import Modal from "@/components/share/Modal";
import StudentForm from "@/components/student/StudentForm";
import { RiFileExcel2Line } from "react-icons/ri";
import { FaRegAddressBook } from "react-icons/fa6";
import { FiUserPlus } from "react-icons/fi";
import { FiLogOut } from "react-icons/fi";
import { GrDocumentVerified } from "react-icons/gr";
import StudentDelete from "@/components/student/StudentDelete";
import CreateStudentForm from "@/components/student/StudentAdd";
import CreateStudentExcel from "@/components/student/StudentsAll";
import SearchStudent from "@/components/student/SearchStudent";
import { logout } from "@/components/utils/auth.server";
import DuplicatedCode from "@/components/student/VerifyCode";
import Link from "next/link";
import { BsFiletypeXls } from "react-icons/bs";


const Student = () => {
  const [isActive, setIsActive] = useState(false);
  const [loading, setLoading] = useState(false);
  const [queryValue, setQueryValue] = useState<string>("");
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [studentData, setStudentData] = useState<StudentData[]>();
  const [dataLoading, setDataLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isCreateFormOpen, setIsCreateFormOpen] = useState(false);
  const [createStudentExcel, setCreateStudentExcel] = useState(false);
  const [errorModalOpen, setErrorModalOpen] = useState(false);
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [isDuplicatedCodesModalOpen, setIsDuplicatedCodesModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [limit, setLimit] = useState(20);
  const [offset, setOffset] = useState(0);

  const toggleIsActive = () => {
    setIsActive(!isActive);
  };
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQueryValue(event.target.value);
  };
  const token = useRouteData("parameter");
  const validToken = typeof token === "string" ? token : "";

  const onSubmit = async () => {
    try {
      const url = `${URL()}/students?limit=${limit}&offset=${offset}`;
      const response = await axios.get(url, tokenConfig(validToken));
      console.log(response);
      setStudentData(response.data);
      setDataLoading(true);
    } catch (error: any) {
      if (error && typeof error === "object" && "response" in error) {
        console.log(error.response.data);
      } else if (error instanceof Error) {
        console.log("Error desconocido", error.message);
      } else {
        console.log("Error:");
      }
    }
  };
 /*  useEffect(() => {
    onSubmit();
  }, [token]);
 */
  //CreateStudents
  const handleCreateSuccess = async (createStudentId: number) => {
    try {
      const url = `${URL()}/students`;
      const response = await axios.get(url, tokenConfig(validToken));
      setStudentData(response.data);
      setDataLoading(true);
    } catch (error) {
      console.error(
        "Error al obtener la lista de usuarios después de crear uno nuevo:",
        error
      );
    }
  };
  const handleOpenCreateForm = () => {
    setIsCreateFormOpen(true);
  };
  const handleCloseCreateForm = () => {
    setIsCreateFormOpen(false);
  };

  //ImportExcel
  const handleCreateStudentExcel = async () => {
    try {
      setCreateStudentExcel(true);
    } catch (error) {
      console.log(
        "Después de setCreateStudentExcel(true):",
        createStudentExcel
      );
    }
  };
  const handleCloseCreateExcel = () => {
    setCreateStudentExcel(false);
  };
  const handleCreateExcelSuccess = async () => {
    try {
      const response = await axios.get(
        `${URL()}/students`,
        tokenConfig(validToken)
      );
      setStudentData(response.data);
      setDataLoading(true);
    } catch (error) {
      console.error(
        "Error al obtener la lista de estudiantes después de la inserción de Excel:",
        error
      );
    }
  };
  useEffect(() => {
    if (createStudentExcel) {
      handleCreateExcelSuccess();
    }
  }, [createStudentExcel]);

  //UpdateStudent
  const handleUpdateOpenModal = (id: number) => {
    setSelectedId(id);
    setIsModalOpen(true);
  };
  const handleUpdateCloseModal = () => {
    setSelectedId(null);
    setIsModalOpen(false);
  };
  const handleUpdateSuccess = async (updateUserId: number) => {
    try {
      const url = `${URL()}/students`;
      const response = await axios.get(url, tokenConfig(validToken));
      setStudentData(response.data);
      setDataLoading(true);
    } catch (error) {
      console.error(
        "Error al obtener la lista de usuarios después de actualizar uno existente:",
        error
      );
    }
  };

  //DeleteStudent
  const handleDeleteSuccess = () => {
    onSubmit();
  };

  //SearchStudents
  const handleSearchStudent = async (query: string, queryValue: string) => {
    try {
      console.log("Valor de query:", query);
      setQueryValue(queryValue);
      if (queryValue === "documentNumber") {
        const url = `${URL()}/student/dni/${queryValue}/type/${query}`; // Reemplaza 'someType' con el tipo adecuado
        console.log("Hola url: ", url);
        const response = await axios.get(url);
        setStudentData(response.data);
        setIsSearchActive(true);
      } else {
        setIsSearchActive(false);
        console.error("Error al realizar la búsqueda");
      }
    } catch (error) {
      console.error("Error al realizar la búsqueda por DNI", error);
      openErrorModal();
    } finally {
      setLoading(false);
    }
  };
  const openErrorModal = () => {
    // Agregado
    setErrorModalOpen(true);
  };

  //DuplicatedCode
  const handleOpenDuplicatedCode = () => {
    setIsDuplicatedCodesModalOpen(true);
  };
  const handleCloseDuplicatedCode = () => {
    setIsDuplicatedCodesModalOpen(false);
  };

 //exportarEnExcel
 const handleExportToExcel = async () => {
  try {
    if (!memoryData) {
      console.error('No hay datos disponibles para exportar.');
      return;
    }
    const dataWithoutId = memoryData.map(student => {
      const { id, ...rest } = student;
      return rest;
    });
    

    const wb = XLSX.utils.book_new();
    const ws = XLSX.utils.json_to_sheet(dataWithoutId);
    XLSX.utils.book_append_sheet(wb, ws, 'participantesBinex');
    XLSX.writeFile(wb, 'participantesBinex.xlsx');
    console.log('Datos exportados exitosamente a Excel.');
  } catch (error) {
    console.error('Error al exportar datos a Excel:', error);
  }
};




  //Logout
  const handleLogout = async () => {
    await logout();
  };

  useEffect(() => {
    onSubmit();
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `${URL()}/students`,
          tokenConfig(validToken)
        );
        setStudentData(response.data);
        setDataLoading(true);
      } catch (error) {
        console.error("Error al obtener la lista de estudiantes:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [currentPage, limit, offset]);

  const memoryData = useMemo(() => studentData, [studentData]);
  //Pagination
  const itemsPerPage = 20;
  const handlePageChange = (newPage: number) => {
    setLimit(20);
    setOffset(10);
    setOffset((newPage - 1) * itemsPerPage);
    setCurrentPage(newPage);
  };
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const visibleData = useMemo(
    () => (memoryData ? memoryData.slice(startIndex, endIndex) : []),
    [memoryData, startIndex, endIndex]
  );
  //const pageCount = Math.ceil((memoryData?.length || 0) / itemsPerPage) || 1;

  const pageCount = Math.ceil((memoryData?.length || 0) / 5) || 1;

  const renderPageButtons = () => {
    const maxBotones = 5;

    // Calcular el rango de botones de paginación
    const inicio = Math.max(1, currentPage - Math.floor(maxBotones / 2));
    const fin = Math.min(pageCount, inicio + maxBotones - 1);

    // Generar botones de paginación
    const botonesPagina = Array.from(
      { length: fin - inicio + 1 },
      (_, index) => index + inicio
    );

    return (
      <>
        <li>
          <button
            className={`block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:hover:bg-neutral-700 dark:hover:text-white`}
            onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
          >
            {"<"}
          </button>
        </li>
        {botonesPagina.map((index) => (
          <li key={index}>
            <button
              className={`block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:hover:bg-neutral-700 dark:hover:text-white ${
                currentPage === index ? "font-semibold" : ""
              }`}
              onClick={() => handlePageChange(index)}
            >
              {index}
            </button>
          </li>
        ))}
        <li>
          <button
            className={`block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:hover:bg-neutral-700 dark:hover:text-white`}
            onClick={() =>
              handlePageChange(Math.min(pageCount, currentPage + 1))
            }
          >
            {">"}
          </button>
        </li>
      </>
    );
  };

  return (
    <section className="p-2 mb-24 bg-black">
      {/* <div className="text-center text-gray-500 lg:p-6 text-2xl font-semibold mb-10 mt-8"> */}

      <div className="text-center text-white lg:p-6 p-0 mt-32 mb-10 text-2xl font-semibold ">
        <a className="border border-testCian shadow-2xl p-4 rounded-xl">
          ADMINISTRAR ESTUDIANTES
        </a>
      </div>
      <div className="flex flex-col sm:flex-row border-2 mt-6 mb-6 shadow-xl rounded-xl lg:ml-10 lg:mr-10 justify-between p-2 bg-white">
        <div className="flex flex-col items-center md:flex-row justify-center">
          <div className="flex-grow mb-2 md:mb-0 md:mr-2">
            <SearchStudent
              onSearchDNI={(query: string, queryValue: string) =>
                handleSearchStudent(query, queryValue)
              }
            />
          </div>
          <button
            type="button"
            className="text-[#006eb0] uppercase hover:text-white border-2 border-[#006eb0] hover:bg-[#006eb0] focus:ring-4 focus:outline-none font-semibold rounded-lg text-xs px-3 py-3 text-center md:w-auto dark:hover:text-white dark:focus:ring-[#BFE9FB] inline-flex items-center"
            onClick={handleOpenDuplicatedCode}
          >
            <GrDocumentVerified className="mr-1 text-lg" />
            Verificar
          </button>
          {studentData !== undefined && (
            <DuplicatedCode
              studentData={studentData}
              isOpen={isDuplicatedCodesModalOpen}
              onClose={handleCloseDuplicatedCode}
            />
          )}

<button
            type="button"
            className="text-green-600 uppercase hover:text-white border-2 border-green-600 hover:bg-green-600 focus:ring-4 focus:outline-none font-semibold rounded-lg text-xs px-3 py-3 text-center md:w-auto dark:hover:text-white dark:focus:ring-[#BFE9FB] inline-flex items-center hover:scale-110 duration-300"
            onClick={handleExportToExcel}>
            <BsFiletypeXls className="mr-1 text-lg" />
            Descargar
          </button>
        </div>

        <div className="flex justify-center mt-2 lg:mt-2 mb-1">
          <button
            type="button"
            className="text-[#006eb0] uppercase hover:text-white border-2 border-[#006eb0] hover:bg-[#006eb0] focus:ring-4 focus:outline-none font-semibold rounded-lg text-xs px-3 py-2 text-center me-2 mb-1 dark:hover:text-white dark:focus:ring-[#BFE9FB] inline-flex items-center"
            onClick={handleOpenCreateForm}
          >
            <FaRegAddressBook className="mr-1 text-lg" />
            Agregar
          </button>
          {isCreateFormOpen && (
            <CreateStudentForm
              onCreateSuccess={handleCreateSuccess}
              onCloseModal={handleCloseCreateForm}
            />
          )}

          <button
            type="button"
            className="text-green-600 uppercase hover:text-white border-2 border-green-600 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-green-300 font-semibold rounded-lg text-xs px-3 py-2 text-center me-2 mb-1  dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-200 inline-flex items-center"
            onClick={handleCreateStudentExcel}
          >
            <RiFileExcel2Line className="mr-1 text-lg" />
            Importar
          </button>
          {createStudentExcel && (
            <CreateStudentExcel
              onCreateSuccess={handleCreateExcelSuccess}
              onCloseModal={handleCloseCreateExcel}
            />
          )}
          {/* <ProtectedRoute path='/user' allowedRoles={['ADMIN']} element={<User/>} /> */}
          <Link
            href="/user"
            className="text-yellow-500 hover:text-white border-2 border-yellow-400 hover:bg-yellow-400 focus:ring-4 focus:outline-none focus:ring-yellow-300 rounded-lg text-xs px-2 py-2 text-center me-2 mb-1 dark:hover:text-white dark:focus:ring-yellow-200"
          >
            <FiUserPlus className="text-lg" />
          </Link>

          <button
            type="button"
            onClick={handleLogout}
            className="text-red-500 hover:text-white border-2 border-red-500 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-300 rounded-lg text-xs px-2 py-2 text-center mb-1 dark:hover:text-white dark:focus:ring-red-200"
          >
            <FiLogOut className="text-lg" />
          </button>
        </div>
      </div>
      {loading && (
        <a href="https://tenor.com/es/view/bar-penguin-waiting-loading-pudgy-gif-7185161825979534095">
          Cargando...
        </a>
      )}
      {dataLoading && memoryData && (
        <div className="overflow-x-auto bg-white p-2 mt-4">
          <table className="min-w-full text-sm whitespace-nowrap shadow-2xl">
            <thead className="uppercase text-center tracking-wider bg-neutral-300">
              <tr className="text-gray-700 ">
                <th scope="col" className="px-6 py-4">
                  #
                </th>
                <th scope="col" className="px-6 py-4">
                  DNI
                </th>
                <th scope="col" className="px-6 py-4">
                  Nombre
                </th>
                <th scope="col" className="px-6 py-4">
                  Código
                </th>
                <th scope="col" className="px-6 py-4">
                  Actividad academica
                </th>
                <th scope="col" className="px-6 py-4">
                  Participación
                </th>
                <th scope="col" className="px-6 py-4">
                  Instituto
                </th>
                <th scope="col" className="px-6 py-4">
                  Horas - créditos
                </th>
                <th scope="col" className="px-6 py-4">
                  Fecha
                </th>
                <th scope="col" className="px-6 py-4">
                  Certificado
                </th>
                <th scope="col" className="px-6 py-4">
                  Acción
                </th>
              </tr>
            </thead>
            <tbody>
              {visibleData.map((student, index) => (
                <tr
                  key={index}
                  className="text-center text-gray-500 border-b font-semibold hover:bg-gray-100"
                >
                  <th scope="row" className="px-6 py-4">
                    <span style={{ whiteSpace: "nowrap", display: "block" }}>
                      {memoryData.length - (startIndex + index)}
                    </span>
                  </th>
                  <td className="px-6 py-4">
                    <span style={{ whiteSpace: "nowrap", display: "block" }}>
                      {student.documentNumber}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span style={{ whiteSpace: "nowrap", display: "block" }}>
                      {student.name}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span style={{ whiteSpace: "nowrap", display: "block" }}>
                      {student.code}
                    </span>
                  </td>
                  <td className="px- py-">
                    <span
                      style={{
                        whiteSpace: "normal",
                        display: "block",
                        maxWidth: "1200px",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                      }}
                    >
                      {student.activityAcademy}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span style={{ whiteSpace: "nowrap", display: "block" }}>
                      {student.participation}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span style={{ whiteSpace: "nowrap", display: "block" }}>
                      {student.institute}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span style={{ whiteSpace: "nowrap", display: "block" }}>
                      {student.hour}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span style={{ whiteSpace: "nowrap", display: "block" }}>
                      {student.date}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <a
                      href="#"
                      className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      Ver
                      <span style={{ whiteSpace: "nowrap", display: "block" }}>
                        {student.certificate}
                      </span>
                    </a>
                  </td>
                  <td className="flex justify-center px-6 py-3 ">
                    <div className="flex items-center gap-6">
                      <div>
                        <button
                          onClick={() => handleUpdateOpenModal(student.id)}
                          className="border-2 border-green-500 p-0.5 rounded-md text-green-500 transition ease-in-out delay-300 hover:scale-125"
                        >
                          <div className="text-xl text-default-400 cursor-pointer active:opacity-50">
                            <FaRegEdit />
                          </div>
                        </button>
                        {isModalOpen && (
                          <StudentForm
                            id={selectedId}
                            onUpdateSuccess={() =>
                              handleUpdateSuccess(student.id)
                            }
                            onCloseModal={handleUpdateCloseModal}
                          />
                        )}
                      </div>
                      <StudentDelete
                        id={student.id}
                        onDeleteSuccess={handleDeleteSuccess}
                      />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <nav
            className="mt-5 flex items-center flex-col sm:flex-row justify-between text-sm"
            aria-label="Page navigation example"
          >
            <p>
              Página{" "}
              <strong>
                {startIndex + 1}-{endIndex}
              </strong>{" "}
              de <strong>{memoryData.length}</strong>
            </p>
            <ul className="list-style-none flex">
              <li>
                <button
                  className="block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:hover:bg-neutral-700 dark:hover:text-white"
                  onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
                >
                  Anterior
                </button>
              </li>
              {renderPageButtons()}
              <li>
                <button
                  className=" block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:hover:bg-neutral-700 dark:hover:text-white"
                  onClick={() =>
                    handlePageChange(Math.min(pageCount, currentPage + 1))
                  }
                >
                  Siguiente
                </button>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </section>
  );
};
export default Student;
