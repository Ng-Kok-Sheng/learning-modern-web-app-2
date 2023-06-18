import { MouseEventHandler } from "react";

export interface ICustomButton {
  title: string;
  containerStyles: string;
  btnType: "button" | "submit" | "reset" | undefined;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
}

export interface ICustomFilter {
  title: string;
}

export interface ISearchManufacturer {
  manufacturer: string;
  setManufacturer: React.Dispatch<React.SetStateAction<string>>;
}
