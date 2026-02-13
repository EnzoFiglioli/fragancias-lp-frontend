type ButtonType = "primary" | "secondary" | "whatsapp";

interface Props {
  type?: ButtonType;
  children: React.ReactNode;
}

function Button({ type = "primary", children }: Props) {
  const base: React.CSSProperties = {
    padding: "0.9rem 1.6rem",
    borderRadius: "12px",
    border: "none",
    fontSize: "0.95rem",
    fontWeight: "600",
    cursor: "pointer",
  };

  const variants: Record<ButtonType, React.CSSProperties> = {
    primary: {
      backgroundColor: "#111",
      color: "#fff",
    },
    secondary: {
      backgroundColor: "#ddd",
      color: "#111",
    },
    whatsapp: {
      backgroundColor: "#25D366",
      color: "#fff",
    },
  };

  return (
    <button style={{ ...base, ...variants[type] }}>
      {children}
    </button>
  );
}

export default Button;
