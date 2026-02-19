import "./globals.css";
import Link from "next/link";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <nav className="navbar">
          <Link href="/" className="nav-logo">
            MyApp
          </Link>

          <div className="nav-links">
            <Link href="/login">Login</Link>
            <Link href="/signup" className="nav-button">
              Sign Up
            </Link>
          </div>
        </nav>

        {children}
      </body>
    </html>
  );
}
