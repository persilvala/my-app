import Link from "next/link";

export default function HomePage() {
  return (
    <main className="home-container">
      <div>
        <h1>Welcome</h1>
        <p style={{ marginTop: 8, color: "#6b7280" }}>Login or create an account.</p>

        <div className="home-buttons">
          <Link href="/signup" className="primary-btn">
            Sign Up
          </Link>
          <Link href="/login" className="secondary-btn">
            Login
          </Link>
        </div>
      </div>
    </main>
  );
}
