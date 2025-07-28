import React from "react";
import Button from "../Button";
import { MenuContext } from "./Menu";

export default function MenuButton({ children }) {
  const { toggleOpen } = React.useContext(MenuContext);
  return <Button onClick={toggleOpen}>{children}</Button>;
}
