/* Components */
import { LoginTableForm } from "../../components/Login";

export const LoginClient = () => {
  return (
    <section className="login-app">
      <div className="login-app__content">
        <h1 className="app-title-color fw-bold">Blue Wave</h1>
        <LoginTableForm />
      </div>
    </section>
  );
};
