export default function DashboardPage() {
  return (
    <main className="dashboard">
      <div className="card">
        <h1>Dashboard</h1>
        <p style={{ marginTop: 8, color: "#6b7280" }}>You are logged in.</p>

        <form action="/api/auth/logout" method="POST" style={{ marginTop: 16 }}>
          <button type="submit" className="btn">
            Logout
          </button>
        </form>
      </div>
    </main>
  );
}
