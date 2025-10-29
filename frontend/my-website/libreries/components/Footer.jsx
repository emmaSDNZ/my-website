"use client";
import { FaFacebookSquare, FaTwitch, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { ImInstagram } from "react-icons/im";
import { stylesFooter } from "../styles/stylesFooter";

export default function Footer() {
  return (
    <footer
      style={{
        ...stylesFooter.footer,
        position: "fixed",
        bottom: 0,
        left: 0,
        width: "100%",
        zIndex: 50,
        backgroundColor: "var(--background)",
      }}
    >
      <div style={stylesFooter.logo}>Emanuel Sudañez</div>
      <div style={stylesFooter.icons}>
        <FaFacebookSquare />
        <FaWhatsapp />
        <ImInstagram />
        <FaTwitch />
        <FaLinkedin />
      </div>
    </footer>
  );
}
