import LoginForm from "@/components/forms/LoginForm";

export default function LoginPage() {
  return (
    <main className="login-shell">
      <section className="login-content">
        <div className="login-card">
          <div className="login-logo" aria-label="Asceoft">
            <div className="logo-mark" aria-hidden="true">
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
            </div>
            <span className="logo-text">Asceoft</span>
          </div>
          <h1 className="login-title">Sign in to your account</h1>
          <LoginForm />
        </div>
      </section>
    </main>
  );
}
