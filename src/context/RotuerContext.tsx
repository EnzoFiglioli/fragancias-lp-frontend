import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import { Index } from "../page/Index";
import { Header } from "../components/common/Header";
import { Footer } from "../components/common/Footer";
import ProductDetail from "../components/ProductDetail";
import ProductsPage from "../page/ProductsPage";
import CartPage from "../page/CartPage";
import SignIn from "../page/SignIn";
import ProductBrand from "../page/ProductBrand";
import ScrollTop from "../components/ScrollTop";

function RouterContent() {
  const location = useLocation();

  return (
    <>
      <ScrollTop />
      <Header />

      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Index />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/products/:id/:slug" element={<ProductDetail />} />
          <Route path="/products/brand/:brand" element={<ProductBrand />} />
          <Route path="/login" element={<SignIn />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </AnimatePresence>

      <Footer />
    </>
  );
}

export default RouterContent;
