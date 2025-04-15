import { Input } from "@material-tailwind/react";
import { Title } from "react-head";

const Login = () => {
    return <>
        <Title>Login Admin - Rolif India</Title>
        <main className="w-full h-screen flex justify-center items-center">
            <div className="w-[30%] p-2 flex flex-col justify-center items-center bg-white rounded-md shadow-md border border-solid border-gray-300">
                <h2 className="font-semibold text-[28px]">Admin Login</h2>
                <Input
                    label="Email"
                    color="black"
                />
            </div>
        </main>
    </>
}

export default Login;