import React from "react";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

function Button(props: Props) {
  return <button {...props}>{props.value}</button>;
}

export default Button;
