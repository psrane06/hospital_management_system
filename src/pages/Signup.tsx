import InputField from "../components/InputField/InputField";
import Button from "../components/Button/Button";
import Layout from "../components/Layout";
import { useState } from "react";
import Patient from "../backend/Patient";

function SignUp() {
  const [patient, setPatient] = useState({
    name: "",
    dob: "",
    email: "",
    password: "",
  });

  function OnInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    //simple code
    /* const target: string = e.target.name;
    if (target === "email") {
      setPatient({ ...patient, email: e.target.value });
    } else if (target === "name") {
      setPatient({ ...patient, name: e.target.value });
    } else if (target === "password") {
      setPatient({ ...patient, password: e.target.value });
    } else if (target === "age") {
      setPatient({ ...patient, age: e.target.value });
    } */
    console.log(typeof e.target.value);
    //better code
    setPatient({
      ...patient,
      [e.target.name]: e.target.value,
    });
  }

  /*   function validateForm() {
    function validateEmail() {
      const validEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
      if (patient.email !== "" || patient.email.match(validEmail)) {
      }
    }
  } */

  function createPatient() {
    const patient_obj = new Patient(
      patient.name,
      patient.dob,
      patient.password,
      patient.email
    );

    patient_obj.store();
  }

  return (
    <Layout>
      <section className="login-form">
        <InputField
          label="Name"
          value={patient.name}
          name="name"
          onChange={OnInputChange}
          required
        />
        <InputField
          label="Email"
          type="email"
          name="email"
          value={patient.email}
          onChange={OnInputChange}
          required
        />
        <InputField
          label="Password"
          type="password"
          name="password"
          value={patient.password}
          onChange={OnInputChange}
          required
        />
        <InputField
          label="Birthdate"
          type="date"
          name="dob"
          value={patient.dob}
          onChange={OnInputChange}
          required
        />
        <Button
          value="Sign Up"
          customClass="btn-primary"
          onClick={createPatient}
        />
      </section>
    </Layout>
  );
}

export default SignUp;
