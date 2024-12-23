import React, { FC, ReactNode, useState } from "react"
import LockIcon from "../../../public/svgs/lock_icon.svg"

interface Props {
  label?: ReactNode; 
  placeholder: string; 
  type?: "email" | "text" | "password" | "textarea";
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  // options?: string[]; // For select input options
  options?: {value: string | number; name: string}[]; // For select input options
  select?: boolean; // If true, render a select input
  className?: string;
  disabled?: boolean;
}

const Input: FC<Props> = React.memo(({ label, placeholder, type = 'text', disabled, name, value, onChange, options, select, className }) => {
  const isPassword = type === "password"
  const [showPassword, setShowPassword] = useState(false)

  const handleShowPassword = () => {
    setShowPassword(prev => !prev)
  }

  return (
    <div className={`flex w-full flex-col items-start mb-5 ${className}`}>
      {label}
      <div className="relative w-full">
        {select ? (
          <select
            name={name}
            value={value}
            onChange={onChange}
            className="w-full mt-1 p-2 border border-[#D0D5DD] rounded-md"
          >
            <option disabled selected value={""} hidden >{value ? value : placeholder}</option>
            {options?.map((option, index) => (
              <option key={index} value={option?.value}>
                {option?.name}
              </option>
            ))}
          </select>
        ) : (
          <>
            {isPassword && <LockIcon onClick={handleShowPassword} className=" cursor-pointer absolute bottom-[25%] right-4" />}
            {type !== "textarea" ? <input
              disabled={disabled}
              value={value}
              onChange={onChange}
              className="w-full mt-1 p-2 border border-[#D0D5DD] rounded-md text-[15px]"
              type={!isPassword ? type : showPassword ? "text" : "password"}
              placeholder={placeholder}
              name={name}
            /> : 
              <textarea 
                disabled={disabled}
                value={value}
                // @ts-ignore
                onChange={onChange}
                className="w-full mt-1 min-h-[10em] max-h-[10em] p-2 border border-[#D0D5DD] rounded-md"
                type={type}
                placeholder={placeholder}
                name={name}
              />
            }


          </>
        )}
      </div>
    </div>
  );
})

export default Input;