"use client";
import { ICustomButton } from "@/types";
import Image from "next/image";

const CustomButton = ({
  title,
  containerStyles,
  btnType,
  handleClick,
}: ICustomButton) => {
  return (
    <button
      disabled={false}
      type={btnType}
      className={`custom-btn ${containerStyles}`}
      onClick={handleClick}
    >
      <span className={`flex-1`}>{title}</span>
    </button>
  );
};

export default CustomButton;
