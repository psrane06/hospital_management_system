import InputField from "../components/InputField/InputField";
import Button from "../components/Button/Button";
import Layout from "../components/Layout";

function Login() {
  return (
    <Layout>
      <section className="login-form">
        <InputField label="Email" />
        <InputField label="Password" />
        <Button customClass="btn-primary" type="submit" value="Login" />
      </section>
    </Layout>
  );
}

export default Login;
