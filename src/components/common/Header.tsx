import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import styles from "./Header.module.css";

export const Header = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const headerClass = `
    ${styles.header}
    ${
      isHome && !scrolled
        ? styles.transparent
        : styles.solid
    }
  `;

  return (
    <header className={headerClass}>
      <h1 className={styles.logo}>MALIPI</h1>

      <nav className={styles.nav}>
        <ul className={styles.nav__links}>
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/products">Productos</Link></li>
          <li><Link to="/cart">Carrito</Link></li>
          <li><Link to="/login">Iniciar Sesión</Link></li>
        </ul>
      </nav>
    </header>
  );
};
