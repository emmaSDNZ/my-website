export const stylesFooter = {
  footer: {
    position: "fixed",   // fijamos el footer
    bottom: 0,           // en la parte inferior
    left: 0,
    width: "100%",       // ocupa todo el ancho
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "10px",
    padding: "20px 0",
    borderTop: "0.5px solid rgba(71, 85, 105, 0.15)",  // línea divisoria suave
    color: "var(--foreground-secondary)",
    backgroundColor: "var(--background)", // opcional para que no sea transparente
    zIndex: 50,          // sobre otros elementos
  },
  logo: {
    fontWeight: "bold",
    fontSize: "1.1rem",
    color: "var(--foreground)",
  },
  icons: {
    display: "flex",
    gap: "12px",
    fontSize: "1.4rem",
    cursor: "pointer",
  }
};
