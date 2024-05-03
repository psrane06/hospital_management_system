import InputField from "../components/InputField";
import Button from "../components/Button";
import Layout from "../components/Layout";

function Login() {
  return (
    <Layout>
      <section className="login-form">
        <InputField label="Email" />
        <InputField label="Password" />
        <Button type="submit" value="Login" />
      </section>
    </Layout>
  );
}

export default Login;
