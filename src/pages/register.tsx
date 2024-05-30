import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import Button from "../components/Button";
import TextField from "../components/TextField";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import useUser from "../states/user-state";
import { useNavigate } from "react-router-dom";

const formSchema = z
  .object({
    username: z.string().min(1, { message: "Username is required" }),
    password: z
      .string({ required_error: "Password is required" })
      .min(4, { message: "Password at least 4" })
      .max(8, { message: "Password not more that 8" }),
    conpassword: z
      .string({ required_error: "Password is required" })
      .min(4, { message: "Password at least 4" })
      .max(8, { message: "Password not more that 8" }),
  })
  .refine((data) => data.password === data.conpassword, {
    message: "Password don't match",
    path: ["conpassword"],
  });

const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    // watch,
    formState: { errors },
  } = useForm({ resolver: zodResolver(formSchema) });

  const { updateUsername } = useUser();
  const navigate = useNavigate();
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    updateUsername(data["username"]);
    localStorage.setItem("username", data["username"]);
    navigate("/");
  };

  return (
    <div className="flex h-screen min-w-full justify-center items-center px-3">
      <div className="bg-cuswhite flex px-4 py-6 flex-col rounded-lg">
        <h1 className="font-bold text-5xl mb-9">Register</h1>

        <form
          className="flex flex-col gap-y-2"
          onSubmit={handleSubmit(onSubmit)}
        >
          <TextField
            registerInput={register}
            errors={errors}
            placeholder="username"
            field="username"
            type="text"
          />
          <TextField
            registerInput={register}
            errors={errors}
            placeholder="password"
            type="password"
            field="password"
          />
          <TextField
            registerInput={register}
            errors={errors}
            placeholder="confirm password"
            type="password"
            field="conpassword"
          />
          <Button children="Register" isBorder marginInline="mt-8" />
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
