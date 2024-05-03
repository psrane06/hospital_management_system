/* eslint-disable react/style-prop-object */
import React from "react";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  message?: string;
}

function InputField(props: Props) {
  return (
    <div>
      <div>
        <label htmlFor={props.name}> {props.label} </label>
      </div>
      <input {...props} />
      <p style={{ display: "none" }}>{props.message}</p>
    </div>
  );
}

export default InputField;
