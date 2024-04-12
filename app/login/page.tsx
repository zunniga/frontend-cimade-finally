"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { MdOutlineMailLock } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { useForm } from "react-hook-form";
import PasswordInputs from "@/components/utils/format/passwordHash";

type ResErrors = {
  message: string;
  errorContent: string;
};

type Auth = {
  email: string;
  password: string;
  role: boolean;
  token: string;
};

const dataForm = {
  email: "",
  password: "",
  role: true,
  token: "",
};

const { PasswordInput } = PasswordInputs;
const Login: React.FC = () => {
  const { register } = useForm();
  const [resErrors, setResErrors] = useState<ResErrors | null>(null);
  const [form, setForm] = useState<Auth>(dataForm);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      onSubmit();
    }
  };

  const handleFormData = (
    { target }: React.ChangeEvent<HTMLInputElement>,
    textField: string
  ) => {
    const { value } = target;
    setForm({ ...form, [textField]: value });
  };

  const saveToken = (token: string) => {
    localStorage.setItem("token", token);
  };

  const onSubmit = async () => {
    try {
      const response = await axios.post(
        "https://backend.sayan.edu.pe/api/v1/user/login",
        form
      );
      if (response.data.token) {
        const token = response.data.token;
        saveToken(token);
        window.location.href = "student";
      }
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        const { data } = error.response;

        if (data.error === "invalid_password") {
          setResErrors({
            message: "Contraseña incorrecta",
            errorContent: data.errorContent,
          });
        } else if (data.error === "user_not_found") {
          setResErrors({
            message: "Email no encontrado",
            errorContent: data.errorContent,
          });
        } else {
          setResErrors({
            message: "La contraseña o gmail es incorrecta",
            errorContent: "",
          });
        }
      } else {
        setResErrors({ message: "Error en el servidor", errorContent: "" });
      }
    }
  };

  useEffect(() => {
    if (resErrors?.message === "La contraseña o gmail es incorrecta") {
      setResErrors(null);
    }
  }, [form.email, form.password]);

  return (
    <section
      className="flex justify-center items-center h-screen bg-gradient-to-r from-testCian via-testCian to-testCian"
      
    >
      <form className="form-login max-w-sm mx-auto bg-gradient-to-b from-testBlue/30 via-testCian to-testBlue/30 rounded-xl p-8">
        <div className="text-center mb-4 ">
          <Image
            className="mx-auto w-24 lg:w-40"
            src="/img/logo/logo_cert.png"
            alt="logo"
            width={120}
            height={120}
          />
          {resErrors?.message && (
              <span className="text-gray-100 bg-red-600/50 w-full mt-3 p-2 rounded-xl font-semibold text-sm">
                {resErrors.message}
              </span>
            )}

        </div>
        
        <div className=" mb-5">
          <div className="relative block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Correo electrónico
          </div>
          <input
            type="email"
            placeholder="Email"
            className="w-72 bg-[#FFFFFF40] py-2 px-12 text-white rounded-full focus:bg-[#00000050] focus:outline-none focus:ring-1 focus:ring-primaryceleste focus:drop-shadow-lg"
            onChange={(event) => handleFormData(event, "email")}
            onKeyDown={handleKeyDown}
          />
        </div>

        <div className="relative mb-5">
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Contraseña
          </label>
          <PasswordInput
            name="password"
            register={register}
            placeholder="Password"
            onChange={(event) => handleFormData(event, "password")}
            onKeyDown={(event) => handleKeyDown(event)}
          />
        </div>
       
        <div className="flex justify-center">
          <button
            type="button"
            value="login"
            onClick={() => onSubmit()}
            className=" text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Iniciar Sesión
          </button>
        </div>
      </form>
    </section>
  );
};

export default Login;