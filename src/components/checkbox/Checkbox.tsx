import * as React from "react";
import { IconTick } from "../icons/IconTick";

interface CheckProps {
  id: string;
  label?: string;
  checked?: boolean;
  className?: string;
  inputClassName?: string;
  onChange: () => void;
  direction?: "left" | "right";
  dark?: boolean;
}

const CheckBox: React.FC<CheckProps> = ({
  id,
  label,
  checked,
  className,
  onChange,
  direction,
  inputClassName,
  dark,
}) => {
  return (
    <label
      onClick={onChange}
      htmlFor={id}
      className={`flex items-center relative ${direction === "left" ? "flex-row-reverse justify-end" : "flex-row"} ${dark ? "text-white" : "text-black"} ${className}`}
    >
      {label && <p>{label}</p>}
      <input id={id} checked={checked} onChange={onChange} type="checkbox" className="hidden" />
      <span
        className={`flex justify-center items-center cursor-pointer h-5 w-5 min-w-[16px] transition-all duration-300 ease-in rounded-[5px] border ${checked ? "bg-[#36CB60] border-[#36CB60]" : "bg-transparent border-[#B3B3B3]"} ${direction === "left" ? "mr-4" : ""} ${inputClassName}`}
      >{checked && <IconTick/>}</span>
    </label>
  );
};

export { CheckBox };
