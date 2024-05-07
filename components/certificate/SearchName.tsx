import React, { useState, FormEvent } from "react";
import { URL } from "@/components/utils/format/tokenConfig";
import axios from "axios";
import { SearchNameProps, Student } from "@/interface/interface";
import Modal from "../share/Modal";
import Image from "next/image";

interface StudentCode extends Student {
  hour: string;
  institute: string;
}

const SearchName: React.FC<SearchNameProps> = ({ onSearchName }) => {
  const [isActive, setIsActive] = useState(false);
  const [queryValue, setQueryValue] = useState<string>("");
  const [searchType, setSearchType] = useState<string>();
  const [loading, setLoading] = useState(false);
  const [studentData, setStudentData] = useState<Student[]>();
  const [closeTable, setCloseTable] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [isNameIncomplete, setIsNameIncomplete] = useState(false);
  const [selectedStudentData, setSelectedStudentData] =
    useState<StudentCode | null>(null);
  const [openModals, setOpenModals] = useState<boolean[]>(
    Array(selectedStudentData ? 1 : 0).fill(false)
  );

  const openStudentModal = (selectedStudent: StudentCode, index: number) => {
    setSelectedStudentData(selectedStudent);
    const updatedOpenModals = [...openModals];
    updatedOpenModals[index] = true;
    setOpenModals(updatedOpenModals);
  };
  const closeStudentModal = (index: number) => {
    const updatedOpenModals = [...openModals];
    updatedOpenModals[index] = false;
    setOpenModals(updatedOpenModals);
  };

  const toggleIsActive = () => {
    setIsActive(!isActive);
  };

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQueryValue(event.target.value);
    setCloseTable(false);
    setSearchType(queryValue);
  };

  const openErrorModal = () => {
    setModalOpen(true);
  };
  const closeErrorModal = () => {
    setModalOpen(false);
  };

  const searchName = async (event: FormEvent) => {
    event.preventDefault();

    if (queryValue.trim()) {
      setLoading(true);
    }
    try {
      const value = queryValue.trim();
      if (value.split(" ").length <= 2) {
        setIsNameIncomplete(true);
        setLoading(false);
        return;
      }
      const res = await axios.get(
        `${URL()}/student/name/${value.trim()}/type/${searchType}`
      );
      if (res.data.length > 0) {
      } else {
        setIsNameIncomplete(true);
        setLoading(false);
        return;
      }
      const filteredData = res.data.filter((student: Student) => {
        const normalizedInput = value.trim().toLowerCase();
        const normalizedName = student.name.trim().toLowerCase();
        const isMatch = normalizedName === normalizedInput;
        return isMatch;
      });
      console.log(filteredData);
      console.log(res.data);
      setStudentData(filteredData);
      onSearchName(filteredData);
      setCloseTable(true);
    } catch (error) {
      console.error("Error: Nombre invalido", error);
      openErrorModal();
    } finally {
      setLoading(false);
    }
  };
  const tableRows = [
    {
      imgSrc: "/icons/organizadopor.svg",
      label: "Organizado por:",
      value: selectedStudentData?.institute,
    },
    {
      imgSrc: "/icons/otorgado.svg",
      label: "Otorgado a:",
      value: selectedStudentData?.name,
    },
    {
      imgSrc: "/icons/nom_evento.svg",
      label: "Nombre del evento:",
      value: selectedStudentData?.activityAcademy,
    },
    {
      imgSrc: "/icons/creditos_horas.svg",
      label: "Creditos/Horas:",
      value: selectedStudentData?.hour,
    },
    {
      imgSrc: "/icons/fecha_emision.svg",
      label: "Fecha de emisión:",
      value: selectedStudentData?.date,
    },
  ];

  return (
    <div className="max-w-screen-xl mx-auto mb-8 text-center lg:mb-12">
      <form
        onSubmit={searchName}
        className="w-full md:w-2/3 lg:w-full xl:w-2/3 mx-auto"
      >
        <label
          htmlFor="default-search"
          className="mb-2 text-sm font-medium "
        ></label>
        <div className="relative lg:mx-auto mr-4 ml-4">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            className="block w-full font-semibold p-4 ps-10 text-sm text-gray-900 border-2 border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:placeholder-gray-400 dark:text-black"
            placeholder={`Buscar por nombre ${
              searchType === "name" ? "nombre" : ""
            }`}
            required
            onClick={toggleIsActive}
            onChange={onChange}
            value={queryValue}
          />
          <button
            type="submit"
            className=" bg-secondaryCian/80 absolute end-1.5 bottom-3 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-4 py-1.5"
          >
            Buscar
          </button>
        </div>
      </form>
      {loading && <p>Cargando...</p>}
      {isNameIncomplete && (
        <Modal
          open={isNameIncomplete}
          onClose={() => setIsNameIncomplete(false)}
        >
          <div className="border-2 p-2 rounded-lg">
            <h2 className="text-md font-bold text-red-600 mb-4">
              Nombre incompleto
            </h2>
            <h3 className="text-sm font-semibold text-gray-600">
              Por favor, ingrese un nombre completo.
            </h3>
          </div>
        </Modal>
      )}
      {closeTable && studentData && (
        <div className="relative overflow-x-auto shadow-xl sm:rounded-xl mt-8">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 font-semibold">
            <thead className="text-xm text-center text-gray-600 uppercase bg-gray-300">
              <tr>
                <th scope="col" className="px-6 py-3">
                  #
                </th>
                <th scope="col" className="px-6 py-3">
                  Nombre
                </th>
                <th scope="col" className="px-6 py-3">
                  Actividad academica
                </th>
                <th scope="col" className="px-6 py-3">
                  Fecha
                </th>
                <th scope="col" className="px-6 py-3">
                  Accción
                </th>
              </tr>
            </thead>
            <tbody>
              {studentData?.map((student, index) => (
                <tr
                  key={index}
                  className="bg-white border-b text-center hover:bg-gray-100"
                >
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium whitespace-nowrap w-12"
                  >
                    <span style={{ whiteSpace: "nowrap", display: "block" }}>
                      {index + 1}
                    </span>
                  </th>
                  <td className="px-6 py-4">
                    <span style={{ whiteSpace: "nowrap", display: "block" }}>
                      {student.name}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span style={{ whiteSpace: "nowrap", display: "block" }}>
                      {student.activityAcademy}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span style={{ whiteSpace: "nowrap", display: "block" }}>
                      {student.date}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <button
                      type="button"
                      onClick={() =>
                        openStudentModal(student as StudentCode, index)
                      }
                      className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      Ver
                    </button>
                  </td>
                  {selectedStudentData && (
                    <Modal
                      open={openModals[index]}
                      onClose={() => closeStudentModal(index)}
                    >
                      <div className="flex justify-center mb-4">
                        <Image
                          src={"/img/logo/logo_certificate.png"}
                          alt="binex"
                          className="lg:w-44 lg:h-36 w-44 h-32 mt-[25px] object-contain"
                          width={800}
                          height={800}
                          priority={true}
                        />
                        <Image
                          src={"/img/certificate/unp.png"}
                          alt="binex"
                          className="lg:w-40 lg:h-40 w-36 h-36 mt-[18px] object-contain"
                          width={800}
                          height={800}
                          priority={true}
                        />
                      </div>
                      <div className="max-w-md text-center bg-white rounded-md mx-auto">
                        {tableRows.map((row, index) => (
                          <div key={index} className="mb-4">
                            <div className="inline-flex items-center text-gray-100 text-sm p-1 md:w-80 w-72 rounded-lg bg-slate-600 font-semibold">
                              {row.imgSrc && (
                                <Image
                                  src={row.imgSrc}
                                  alt={row.label}
                                  className="flex lg:w-5 lg:h-5 w-5 h-5 object-contain ml-1"
                                  width={800}
                                  height={800}
                                />
                              )}
                              <div className="flex-1 text-center">
                                {row.label}
                              </div>
                            </div>

                            <div className="flex justify-center text-gray-600 mt-3 mb-5 md:text-sm text-xs md:w-[410px] px-[2px] font-semibold">
                              {row.label === "Organizado por:" ? (
                                <span>
                                  {row.value && (
                                    <span>
                                      {row.value
                                        .split(" ")
                                        .map((word, i, arr) => (
                                          <React.Fragment key={i}>
                                            {i !== arr.length - 2
                                              ? word + " "
                                              : word + " "}
                                            {i === arr.length - 5 && <br />}
                                          </React.Fragment>
                                        ))}
                                    </span>
                                  )}
                                </span>
                              ) : (
                                <span>{row.value}</span>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    </Modal>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      <Modal open={modalOpen} onClose={closeErrorModal}>
        <div className="border-2 p-2 rounded-lg">
          <h2 className="text-md font-bold text-red-600 mb-4">
            Nombre incorrecto
          </h2>
          <h3 className="text-sm font-semibold text-gray-600">
            El nombre que ingresaste no se encuentra en nuestra base de datos.
          </h3>
        </div>
      </Modal>
    </div>
  );
};

export default SearchName;
