/* Components */
import { LoginForm } from "@/Admin/components/LoginForm";

export const LoginAdmin = () => {
  return (
    <section className="login-app">
      <div className="login-app__content">
        <h1 className="app-title-color fw-bold">Blue Wave</h1>
        <LoginForm />
      </div>
    </section>
  );
};
