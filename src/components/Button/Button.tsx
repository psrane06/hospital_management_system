import React from "react";
import "./button.css";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  customClass?: string;
}

function Button(props: Props) {
  return (
    <button className={"btn " + props.customClass} {...props}>
      {props.value}
    </button>
  );
}

export default Button;
