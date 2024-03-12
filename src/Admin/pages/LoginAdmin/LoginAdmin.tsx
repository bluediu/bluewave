/* Components */
import { LoginForm } from "../../components/LoginForm";

import "./LoginAdmin.scss";

export const LoginAdmin = () => {
  return (
    <section className="login-admin">
      <div className="login-admin__content">
        <h1 className="app-title-color fw-bold">Blue Wave</h1>
        <LoginForm />
      </div>
    </section>
  );
};
