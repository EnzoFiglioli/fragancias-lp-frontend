import { useSelector } from "react-redux";
import type { RootState } from "../app/core/redux/store";

import { handlerSum } from "../utils/handlers/handlerSum";
import { currencyFormatter } from "../utils/currencyFormatter";
import { whatsappUrl } from "../utils/handlers/handlerWhatsapp";
import type { ProductCart } from "../@types";

import whatsapp from "../../public/WhatsApp.svg.webp";

const phone = "5492284650777";

const CartPage = () => {
  const cartList = useSelector((state: RootState) => state.cart);

  const total = handlerSum(
    ...cartList.map((item: ProductCart) => item.price * item.amount)
  );

  const message = (() => {
    let msg = "Hola Lili 👋\n\n";
    msg += "Te encargo los siguientes productos:\n\n";

    msg += cartList
      .map(
        (item: ProductCart) =>
          `• ${item.name} x${item.amount} - ${currencyFormatter(
            item.price
          )}`
      )
      .join("\n");

    msg += `\n\nTOTAL: ${currencyFormatter(total)}`;

    return msg;
  })();

  if (cartList.length === 0) {
    return (
      <section>
        <h2>Carrito</h2>
        <p>No hay productos en el carrito</p>
      </section>
    );
  }

  return (
    <div>
      <h2>Carrito</h2>

      <section>
        {cartList.map((item: ProductCart) => (
          <article
            key={item.id}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "8px 0",
            }}
          >
            <img
              src={item.picture.url}
              alt={item.name}
              style={{ width: "50px", height: "50px" }}
            />

            <p style={{ flex: 1, marginLeft: "10px" }}>
              {item.name}
            </p>

            <p>{currencyFormatter(item.price)}</p>

            <div>
              <button>-</button>
              <span style={{ margin: "0 10px" }}>{item.amount}</span>
              <button>+</button>
            </div>
          </article>
        ))}
      </section>

      <section style={{ marginTop: "20px" }}>
        <h4
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <span>TOTAL</span>
          <span>{currencyFormatter(total)}</span>

          <button
            style={{
              backgroundColor: "#26ac53",
              color: "#fff",
              display: "flex",
              alignItems: "center",
              gap: "8px",
              padding: "8px 12px",
              borderRadius: "6px",
              border: "none",
              cursor: "pointer",
            }}
            onClick={() =>
              window.open(whatsappUrl(phone, message), "_blank")
            }
          >
            <img
              src={whatsapp}
              alt="WhatsApp"
              width={20}
              height={20}
            />
            Encargar por WhatsApp
          </button>
        </h4>
      </section>
    </div>
  );
};

export default CartPage;