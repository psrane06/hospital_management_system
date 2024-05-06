import React from "react";
import "./button.css";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  customClass?: string;
}

function Button({ customClass, ...props }: Props) {
  return (
    <button className={"btn " + customClass} {...props}>
      {props.value}
    </button>
  );
}

export default Button;
