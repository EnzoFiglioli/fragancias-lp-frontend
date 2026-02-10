const Button = () => {
    enum buttonType {
      PRIMARY = "primary",
      SECONDARY = "secondary",
      WHATSAPP = "whatsapp"
    };
    
    const base = {
            padding: "0.9rem 1.6rem",
            borderRadius:"12px",
            border: "none",
            fontSize: "0.95rem",
            fontWeight: "600",
            cursor: "pointer"
        }
    
    const style = {
        primary{
            ...base,
        },
        secondary{
            ...base,
        },
        whatsapp{
            ...base,
        }
    }
  return <button className={style.primary}>Agregar al carrito</button>;
};

export default Button;
