import SignupForm from "@/components/forms/SignupForm";

export default function SignupPage() {
  return (
    <main className="auth-container">
      <section className="auth-card">
        <h1 className="auth-title">Sign Up</h1>
        <p className="auth-subtitle">Create your account</p>
        <SignupForm />
      </section>
    </main>
  );
}
