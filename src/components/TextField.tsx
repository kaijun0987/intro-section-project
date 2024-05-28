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
  isVisible?: boolean;
  setVisible?: () => void;
};

const TextField = <T extends FieldValues>({
  registerInput,
  errors,
  field,
  customDecoration,
  placeholder,
  isVisible,
  setVisible,
}: TFormInputProps<T>) => {
  return (
    <>
      <div
        className={`${
          customDecoration ??
          "rounded-2xl w-full px-3 py-2 mt-2 border border-cusblack flex flex-row items-center"
        }`}
      >
        <input
          className="bg-cuswhite border-none focus:border-none focus:outline-none "
          type={isVisible == null ? "text" : isVisible ? "text" : "password"}
          placeholder={placeholder}
          {...registerInput(field)}
        />
        {isVisible == null ? null : isVisible ? (
          <AiOutlineEye className="ms-auto" onClick={setVisible} />
        ) : (
          <AiOutlineEyeInvisible className="ms-auto" onClick={setVisible} />
        )}
      </div>
      {errors && errors[`${field}`] && (
        <span className="text-cusred">{`${errors[`${field}`]?.message}`}</span>
      )}
    </>
  );
};

export default TextField;
