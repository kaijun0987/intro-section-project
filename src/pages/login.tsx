import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import Button from "../components/Button";
import TextField from "../components/TextField";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import useUser from "../states/user-state";
import { useGet, usePost } from "../hooks/useAxios";
import Refresh from "../components/Refresh";
import { FaArrowLeft } from "react-icons/fa";

const formSchema = yup.object().shape({
  username: yup
    .string()
    .required("Username is required")
    .min(4, "Username length should be at least 4"),
  password: yup
    .string()
    .required("Password is required")
    .min(4, "Password length should be at least 4 characters")
    .max(12, "Password cannot exceed more than 12 characters"),
});

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: { username: "", password: "" },
    resolver: yupResolver(formSchema),
  });
  const { updateUsername } = useUser();

  const navigator = useNavigate();
  const { mutate, isPending } = usePost();
  const { data, isSuccess } = useGet(
    "/auth/me",
    localStorage.getItem("token") || "",
    "getme"
  );

  const OnSubmit: SubmitHandler<FieldValues> = (value) => {
    mutate(
      {
        url: "/auth/login",
        param: {
          username: value.username,
          password: value["password"],
          expiresInMins: 1,
        },
      },
      {
        onSuccess(response) {
          localStorage.setItem("token", response.data.token);
        },
      }
    );
  };

  useEffect(() => {
    if (!isSuccess) return;
    updateUsername(data?.data.username);
    navigator("/");
  }, [isSuccess, navigator, updateUsername, data]);

  return (
    <div className="flex h-screen min-w-full justify-center items-center px-3">
      <div className="bg-cuswhite flex px-4 py-6 flex-col rounded-lg h-auto min-w-80 max-w-80">
        <h1 className="font-bold flex flex-row text-5xl mb-9 items-center gap-x-5">
          <FaArrowLeft size={30} onClick={() => navigator("/")} /> Login
        </h1>
        <form className="flex flex-col" onSubmit={handleSubmit(OnSubmit)}>
          <TextField
            registerInput={register}
            field="username"
            errors={errors}
            placeholder="username"
          />
          <TextField
            registerInput={register}
            field="password"
            errors={errors}
            placeholder="password"
            type="password"
          />
          <Button isBorder marginInline="mt-8">
            {isPending ? (
              <div className="flex flex-1 justify-center">
                <Refresh />
              </div>
            ) : (
              "Login"
            )}
          </Button>
        </form>
        <Button
          children="Register"
          isBorder
          marginInline="mt-2"
          onClick={() => navigator("/register")}
        />
      </div>
    </div>
  );
};

export default LoginPage;
