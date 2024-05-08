//mport { useGoogleLogin } from "@react-oauth/google";
import React, {useState} from "react";
import { FcGoogle} from "react-icons/fc";
// import {Toaster, toast} from "sonner";
// import {Link} from "react-router-dom"
import { Button, Divider, Inputbox, Logo } from "../components";



const LoginPage = () => {

  const user = {};

  const [data, setData] = useState({
    email: "",
    password: ""
  })

  const handleChange = (e) =>{
    const [name, value] = e.target;

    setData({
      ...data,
      [name]:value
    })
  }



  if(user.token) window.location.replace("/")
  return (<div className="w-full h-[100vh]">
      <div className="hidden md:flex flex-col gap-y-4 w-1/4 min-h-screen bg-black items-center justify-between">
        <Logo type='login' />
        <span className="text-xl font-semibold text-white">Olá, novamente</span>
      </div>
      
      <div className="flex w-full md:w-2/3 h-full bg-white dark:bg-gradient-to-b md:dark:bg-gradient-to-r from-black via-[#071b3e] to-black items-center px-10 md:px-20
      lg:px-40">
        <div className="w-full flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        
          <div className=" block mb-10 md:hidden">
            <Logo />
          </div>
          <div className="max-w-md w-full space-y-8">
            <div className="">
              <h2 className="mt-6 text-center text-2xl md:text-3x1 font-semibold text-gray-900 dark:text-white"> Entre na sua conta</h2>
            </div>
            <Button 
              label="Entrar com o Google"
              icon={<FcGoogle className="" />}
              styles='
                w-full flex flex-row-reverse gap-4 bg-white dark:bg-transparent text-black dark:text-white px-5 py-2.5 rounded-full border border-gray-300
              '
              onclick={() => {}}
            />

            <Divider 
              label='Ou entre com o seu e-mail'
            />

            <form className="mt-8 spcae-y-6">
                <div className="flex flex-col rounded-md shadow-sm -space-y-px gap-5">
                  <Inputbox 
                    type="email" 
                    label="Seu endereço de e-mail"
                    name="e-mail"
                    placeholder="seu@email.com"
                    isRequired={true}
                    value={data?.email}
                    onChange={handleChange}
                    />  
                  
                   <Inputbox 
                    type="password" 
                    label="Digite sua senha"
                    placeholder="*************"
                    name="password"
                    isRequired={true}
                    value={data?.password}
                    onChange={handleChange}
                    />  
                </div>

                <Button 
                  label="Entrar"
                  type="submit"
                  styles='
                    group
                    relative 
                    w-full
                    flex
                    justify-center
                    py-2.5
                    2xl:py-3
                    px-4 
                    border 
                    border-transparent
                    text-sm
                    font-medium
                    rounded-full
                    text-white
                    bg-black
                    dark:bg-rose-800 
                    hover:bg-rose-700
                    focus:outline-none
                    focus:ring-2
                    focus:ring-offset-2
                    focus:ring-rose-500 
                    mt-8
                  '
                />

            </form>
          </div>
        </div>

      </div>
    </div>
  );
};

export default LoginPage;
