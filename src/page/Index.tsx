import styles from "./Index.module.css";
import { categories } from "../utils/categories";
import { Category } from "../components/common/Category";
import { Link } from "react-router-dom";

export const Index = () => {
  return (
    <>
      <main className={styles.main}>
        <h1>Fragancias que definen tu estilo</h1>
        <p>Perfumes, desodorantes y aromas premium para cada momento</p>
        <button className={styles.cta}><Link to={"/products"}>Ver productos</Link></button>
      </main>
      <section>
        <h3>Categorias</h3>
        <aside className={styles.cardContainer}>
          {categories.map((c) => (
            <Category category={c.category} image={c.image} />
          ))}
        </aside>
      </section>
    </>
  );
};
