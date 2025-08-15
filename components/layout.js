// components/Layout.js

import Link from "next/link";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/search", label: "Search" },
  { href: "/rooms-suites", label: "Rooms & Suites" },
  { href: "/dining", label: "Dining" },
  { href: "/property/loyalty-program", label: "Loyalty Program" },
];

export default function Layout({ children }) {
  return (
    <div>
      <header style={styles.header}>
        <div style={styles.brand}>
          <Link href="/" style={styles.logo}>
            <span role="img" aria-label="owl">
              🦉
            </span>{" "}
            Owl Hotels & Resorts
          </Link>
        </div>
        <nav>
          {navLinks.map(({ href, label }) => (
            <Link key={href} href={href} style={styles.navLink}>
              {label}
            </Link>
          ))}
        </nav>
      </header>
      <main style={styles.main}>{children}</main>
      <footer style={styles.footer}>
        &copy; {new Date().getFullYear()} Owl Hotels & Resorts &mdash; All
        rights reserved.
      </footer>
    </div>
  );
}

const styles = {
  header: {
    background: "#16171b",
    color: "#eee",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "1rem 2rem",
    fontFamily: "serif",
  },
  brand: {
    fontWeight: "bold",
    fontSize: "1.6rem",
  },
  logo: {
    color: "#fff",
    textDecoration: "none",
  },
  navLink: {
    color: "#eee",
    textDecoration: "none",
    marginLeft: "2rem",
    fontSize: "1rem",
  },
  main: {
    maxWidth: "900px",
    margin: "2rem auto",
    background: "#fff",
    borderRadius: "12px",
    boxShadow: "0 2px 12px #0001",
    padding: "2rem",
    minHeight: "75vh",
  },
  footer: {
    background: "#f9f9f9",
    color: "#666",
    textAlign: "center",
    padding: "1.5rem",
    fontSize: "1rem",
    marginTop: "3rem",
  },
};
