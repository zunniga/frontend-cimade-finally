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
  }, [resErrors?.message,form.email, form.password]);

  return (
    <section
      className="flex justify-center items-center h-screen bg-primaryceleste"
      style={{ backgroundImage: "url('image/login.jpg')" }}
    >
      <div className="container p-4 lg:p-10">
        <div className="">
          <form className="form-login  rounded-lg shadow-lg p-8 max-w-sm mx-auto ">

            <div className="text-center mb-4 ">
              <Image
                className="mx-auto w-24 lg:w-40"
                src="/certificate/logo_blanco.png"
                alt="logo"
                width={120}
                height={120}
              />
            </div>
          
            {resErrors?.message && (
              <span className="text-gray-100 bg-red-600/50 w-full p-2 rounded-xl font-semibold text-sm">
                {resErrors.message}
              </span>
            )}


            <div className="relative ">
              <div className="absolute top-1 left-1 bg-[#FFFFFF40] rounded-full p-2 flex items-center justify-center text-primaryceleste">
                <MdOutlineMailLock />
              </div>
              <input
                type="email"
                placeholder="Email"
                className="w-72 bg-[#FFFFFF40] py-2 px-12 text-white rounded-full focus:bg-[#00000050] focus:outline-none focus:ring-1 focus:ring-primaryceleste focus:drop-shadow-lg"
                onChange={(event) => handleFormData(event, "email")}
                onKeyDown={handleKeyDown}
              />
            </div>

            <div className="relative">
              <div className="absolute top-1 left-1 bg-[#FFFFFF40] rounded-full p-2 flex items-center justify-center text-primaryceleste">
                <RiLockPasswordLine />
              </div>
              <PasswordInput
                name="password"
                register={register}
                placeholder="Password"
                onChange={(event) => handleFormData(event, "password")}
                onKeyDown={(event) => handleKeyDown(event)}
                
              />
            </div>

            <button
              type="button"
              value="login"
              className="bg-gradient-to-r from-primaryceleste to-primarygreen text- w-72 font-semibold rounded-full py-2 mb-4"
              onClick={() => onSubmit()}
            >
              Iniciar sesión
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
