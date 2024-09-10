import React, { FC, ReactNode } from "react"
import LockIcon from "../../../public/svgs/lock_icon.svg"

interface Props {
  label?: ReactNode; 
  placeholder: string; 
  type?: "email" | "text" | "password";
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  options?: string[]; // For select input options
  select?: boolean; // If true, render a select input
  className?: string;
}

const Input: FC<Props> = React.memo(({ label, placeholder, type = 'text', name, value, onChange, options, select, className }) => {

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
            <option disabled selected value={""} hidden >Select Permission</option>
            {options?.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
        ) : (
          <>
            {type === "password" && <LockIcon className="absolute bottom-[25%] right-4" />}
            <input
              value={value}
              onChange={onChange}
              className="w-full mt-1 p-2 border border-[#D0D5DD] rounded-md"
              type={type}
              placeholder={placeholder}
              name={name}
            />
          </>
        )}
      </div>
    </div>
  );
})

export default Input;