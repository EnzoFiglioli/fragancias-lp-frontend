import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import type { Product } from "../@types";
import productService from "../services";
import style from "./ProductDetail.module.css";
import { formatter } from "../utils/formatteRegex";
import { currencyFormatter } from "../utils/currencyFormatter";
import { useDispatch } from "react-redux";
import { addElement } from "../app/core/slice/cartSlice";
import type { AppDispatch } from "../app/core/redux/store";
import Breadcrumb from "./shared/BreadCumb";
import { motion } from "framer-motion";
import Modal from "./common/Modal";

const ProductDetail = () => {
  const { id, slug } = useParams<{ id: string; slug: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const dispatch = useDispatch<AppDispatch>();
  const [open, setOpen] = useState(false);

  useEffect(() => {
  if (!id) return;

  const fetchItem = async () => {
    const response = await productService.getById(id);
    setProduct(response);
    document.title = `${response.name} | FraganciasLP`;
  };

  fetchItem();
}, [id]);

  if (!product) {
    return <p style={{ color: "white" }}>Loading...</p>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      style={{ marginTop: "100px" }}
    >
      <Breadcrumb category={product.category.categoryName} />
      <div className={style.container}>
        <figure className={style.media}>
          <img
            className={style.image}
            src={product.pictures[0].url}
            alt={product.name}
            loading="lazy"
          />
        </figure>

        <section className={style.details}>
          <header className={style.header}>
            <h1 className={style.title}>{product.name}</h1>
          </header>

          <article
            className={style.description}
            dangerouslySetInnerHTML={{
              __html: formatter(product.description),
            }}
          />
          <aside
            style={{
              color: "#000",
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
              marginTop: "1rem",
              fontWeight: "600",
            }}
          >
            <span>Stock: {product.stock}</span>
            <span className={style.price}>
              {currencyFormatter(product.price)}
            </span>
          </aside>
          <div className={style.actions}>
            <button
              className={style.primary}
              onClick={() => {
                setOpen(true);
                dispatch(
                  addElement({
                    id: product.id,
                    picture: {
                      url: product.pictures[0].url,
                      id: product.pictures[0].id,
                      productId: product.pictures[0].productId,
                    },
                    name: product.name,
                    price: product.price,
                    amount: 0,
                    count: 0,
                    category: "",
                    pictures: [],
                    stock: 0,
                  }),
                );
              }}
            >
              Agregar al carrito
            </button>
          </div>
          <Modal isOpen={open} onClose={() => setOpen(false)}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "1rem",
                textAlign: "center",
              }}
            >
              <h2 style={{ margin: 0 }}>Producto agregado</h2>

              <img
                src={product.pictures?.[0]?.url}
                alt={product.name}
                style={{
                  width: "120px",
                  height: "120px",
                  objectFit: "cover",
                  borderRadius: "12px",
                }}
              />

              <h3 style={{ margin: 0 }}>{product.name}</h3>

              <p style={{ fontWeight: 600, margin: 0 }}>
                {currencyFormatter(product.price)}
              </p>

              <button
                onClick={() => setOpen(false)}
                style={{
                  marginTop: "1rem",
                  padding: "0.6rem 1.2rem",
                  borderRadius: "8px",
                  border: "none",
                  backgroundColor: "#111",
                  color: "#fff",
                  cursor: "pointer",
                }}
              >
                Continuar comprando
              </button>
            </div>
          </Modal>
        </section>
      </div>
    </motion.div>
  );
};

export default ProductDetail;
