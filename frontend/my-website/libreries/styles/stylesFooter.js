export const stylesFooter = {
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
}