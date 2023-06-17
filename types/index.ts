import { MouseEventHandler } from "react";

export interface ICustomButton {
  title: string;
  containerStyles: string;
  btnType: "button" | "submit" | "reset" | undefined;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
}
