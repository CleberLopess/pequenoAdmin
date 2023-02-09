import React from "react";
import { Wrapper } from "./styled";

interface IProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: IProps) => {
  return <Wrapper>{children}</Wrapper>;
};
