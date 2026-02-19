import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import styles from "./Header.module.css";
import logo from "/logo.png";

export const Header = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };

    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  const headerClass = `
    ${styles.header}
    ${isHome && !scrolled ? styles.transparent : styles.solid}
  `;

  const closeMenu = () => setIsOpen(false);

  const user = false;

  return (
    <>
      <header className={headerClass}>
        <Link to={"/"}>
          <img src={logo} width={80} alt="logo" />
        </Link>

        <nav className={styles.nav}>
          <ul className={styles.nav__links}>
            <li>
              <i
                className="fa-solid fa-house"
                style={{ color: "white", margin: "0px 5px" }}
              ></i>

              <Link to="/">Inicio</Link>
            </li>
            <li>
              <i
                className="fa-solid fa-tags"
                style={{ color: "white", margin: "0px 5px" }}
              ></i>
              <Link to="/products">Productos</Link>
            </li>
            <li>
              <i
                className="fa-solid fa-cart-shopping"
                style={{ color: "white", margin: "0px 5px" }}
              ></i>
              <Link to="/cart">Carrito</Link>
            </li>
            {user && (
              <li>
                <Link to="/login">Iniciar Sesión</Link>
              </li>
            )}
          </ul>
        </nav>

        <button
          className={`${styles.hamburger} ${isOpen ? styles.active : ""}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Abrir menú"
        >
          <span />
          <span />
          <span />
        </button>
      </header>

      {/* Overlay */}
      {isOpen && <div className={styles.overlay} onClick={closeMenu} />}

      {/* Mobile Menu */}
      <aside className={`${styles.mobileMenu} ${isOpen ? styles.open : ""}`}>
        <ul>
          <li>
            
              <i className="fa-solid fa-house" style={{ color: "white" }}></i>
            <Link to="/" onClick={closeMenu}>
              Inicio
            </Link>
          </li>
          <li>
            <i className="fa-solid fa-tags" style={{color:"white", margin:'0px 5px'}}></i>

            <Link to="/products" onClick={closeMenu}>
              Productos
            </Link>
          </li>
          <li>
            <i className="fa-solid fa-cart-shopping" style={{color:"white", margin:'0px 5px'}}></i>
            <Link to="/cart" onClick={closeMenu}>
              Carrito
            </Link>
          </li>
        </ul>
      </aside>
    </>
  );
};
