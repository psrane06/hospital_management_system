import InputField from "../components/InputField/InputField";
import Button from "../components/Button/Button";
import Layout from "../components/Layout";

function SignUp() {
  return (
    <Layout>
      <section className="login-form">
        <InputField label="Name" />
        <InputField label="Email" />
        <InputField label="Password" />
        <Button type="submit" value="Sign Up" />
      </section>
    </Layout>
  );
}

export default SignUp;
