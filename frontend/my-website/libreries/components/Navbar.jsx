"use client";
import { stylesNavBar } from '../styles/stylesNavBar';
import { diccWebSite } from '../services/diccWebSite';
import Link from 'next/link';

export default function Navbar() {
  const elementosMenu = [];
  for (const clave in diccWebSite) {
    if (clave === "HOME") continue;
    elementosMenu.push(
      <li key={clave}>
        <Link
          href={diccWebSite[clave].link}
          className={stylesNavBar.aLink}
        >
          {diccWebSite[clave].name}
        </Link>
      </li>
    );
  }

  return (
    <nav className={`${stylesNavBar.navBar} fixed top-0 left-0 z-50`}>
      {/* Logo / HOME a la izquierda */}
      <div className={stylesNavBar.logo}>
        <Link href={diccWebSite.HOME.link}>{diccWebSite.HOME.name}</Link>
      </div>

      {/* Menú a la derecha */}
      <ul className={stylesNavBar.navUl}>{elementosMenu}</ul>
    </nav>
  );
}
