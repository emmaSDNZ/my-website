import React from 'react'
import { FaFacebookSquare } from "react-icons/fa";
import { ImInstagram } from "react-icons/im";
import { FaTwitch } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
export default function Footer() {
  return (
    <footer style={styles.footer}>
      <div style={styles.logo}>Emanuel Sudañez</div>
      <div style={styles.icons}>
        <FaFacebookSquare />
        <FaWhatsapp/>
        <ImInstagram />
        <FaTwitch/>
        <FaLinkedin/>
      </div>
    </footer>
  );
}

const styles = {
  footer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "10px",
    padding: "20px 0",
    borderTop: "0.1px solid rgba(71, 85, 105, 0.10)",  // **divisor suave**
    color: "var(--foreground-secondary)", // texto más suave
  },
  logo: {
    fontWeight: "bold",
    fontSize: "1.1rem",
    color: "var(--foreground)", // marca personal más fuerte
  },
  icons: {
    display: "flex",
    gap: "12px",
    fontSize: "1.4rem",
    cursor: "pointer",
  }
};


