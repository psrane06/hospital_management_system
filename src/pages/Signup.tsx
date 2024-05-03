import InputField from "../components/InputField";
import Button from "../components/Button";

function SignUp() {
  return (
    <section className="login-form">
      <InputField label="Name" />
      <InputField label="Email" />
      <InputField label="Password" />
      <Button type="submit" value="Sign Up" />
    </section>
  );
}

export default SignUp;
