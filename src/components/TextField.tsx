import { useState } from "react";
import {
  FieldErrors,
  FieldPath,
  FieldValues,
  UseFormRegister,
} from "react-hook-form";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

type TFormInputProps<T extends FieldValues> = {
  registerInput: UseFormRegister<T>;
  errors?: FieldErrors<T>;
  field: FieldPath<T>;
  customDecoration?: string;
  placeholder?: string;
  type?: "text" | "password";
};

const TextField = <T extends FieldValues>({
  registerInput,
  errors,
  field,
  customDecoration,
  placeholder,
  type = "text",
}: TFormInputProps<T>) => {
  const [isVisible, setVisible] = useState(true);
  return (
    <>
      <div
        className={
          customDecoration ??
          "rounded-2xl w-full px-3 py-2 mt-2 border border-cusblack flex flex-row items-center"
        }
      >
        <input
          className="bg-cuswhite border-none focus:border-none focus:outline-none "
          type={type === "password" && isVisible ? "password" : "text"}
          placeholder={placeholder}
          {...registerInput(field)}
        />
        {type === "password" &&
          (isVisible ? (
            <AiOutlineEyeInvisible
              className="ms-auto"
              onClick={() => setVisible(false)}
            />
          ) : (
            <AiOutlineEye
              className="ms-auto"
              onClick={() => setVisible(true)}
            />
          ))}
      </div>
      {errors && errors[`${field}`] ? (
        <span className="text-cusred text-[10px] ms-0">{`${
          errors[`${field}`]?.message
        }`}</span>
      ) : (
        <div className="h-[15px]" />
      )}
    </>
  );
};

export default TextField;
