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
    <section className="flex justify-center items-center h-screen ">
      <div className="absolute inset-0 bg-no-repeat bg-center  ">
        <video className=" w-full h-full object-cover md:mt-2 " autoPlay loop muted>
          <source src="/img/video/test_login.webm" type="video/mp4" />
          Tu navegador no soporta la etiqueta de video.
        </video>
      </div>
      <form className="relative form-login max-w-sm mx-auto bg-gradient-to-b from-testCian/45 via-testBlue/80 to-testBlue/20 rounded-xl p-8  mt-28 mb-6">
        <div className="relative text-center mb-4 ">
          <Image
            className="mx-auto w-24 lg:w-40"
            src="/img/logo/logo_login.png"
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

        <div className="relative mb-5">
          <div className="relative block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Correo electrónico
          </div>
          <input
            type="email"
            placeholder="Email"
            className="w-72 bg-slate-200 py-2 px-12 text-slate-900 rounded-full focus:bg-white focus:outline-none focus:ring-1 focus:ring-primaryceleste focus:drop-shadow-lg"
            onChange={(event) => handleFormData(event, "email")}
            onKeyDown={handleKeyDown}
          />
        </div>

        <div className="relative mb-5">
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium  text-gray-900 dark:text-white"
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
            className=" text-white bg-testBlue/70 hover:bg-testBlue/30  focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center "
          >
            Iniciar Sesión
          </button>
        </div>
      </form>
    </section>
  );
};

export default Login;
