import { Title } from "react-head";
import { useForm } from "react-hook-form";
import EmailField from "./EmailField";
import PasswordField from "./PasswordField";
import MyButton from "../../components/buttons/MyButton";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "../../configs/validations";

const Login = () => {
    const {
        control,
        formState: {
            errors,
        },
        handleSubmit
    } = useForm({
        resolver: yupResolver(loginSchema),
        defaultValues: {
            email: '',
            password: '',
        }
    });

    const onSubmit = (data) => {
        console.log(data);
    }

    return <>
        <Title>Login Admin - Rolif India</Title>
        <main className="w-full h-screen flex justify-center items-center">
            <form onSubmit={handleSubmit(onSubmit)} className="w-[90%] sm:w-1/2 lg:w-[30%] p-2 flex flex-col justify-center items-center bg-white rounded-md shadow-md border border-solid border-gray-300 gap-y-4 py-4">
                <h2 className="font-semibold text-[28px]">Admin Login</h2>
                <div className="grid grid-cols-1 gap-y-4 w-[95%]">
                    <EmailField
                        name={"email"}
                        errors={errors}
                        control={control}
                        label={"Email"}
                    />
                    <PasswordField
                        name={"password"}
                        errors={errors}
                        control={control}
                        label={"Password"}
                    />
                    <MyButton type="submit" className="bg-blue-800 !text-[16px]">Submit</MyButton>
                </div>
            </form>
        </main>
    </>
}

export default Login;