import React from 'react'
import { FaFacebookSquare } from "react-icons/fa";
import { ImInstagram } from "react-icons/im";
import { FaTwitch } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { stylesFooter } from '../styles/stylesFooter';

export default function Footer() {
  return (
    <footer style={stylesFooter.footer}>
      <div style={stylesFooter.logo}>Emanuel Sudañez</div>
      <div style={stylesFooter.icons}>
        <FaFacebookSquare />
        <FaWhatsapp/>
        <ImInstagram />
        <FaTwitch/>
        <FaLinkedin/>
      </div>
    </footer>
  );
}



