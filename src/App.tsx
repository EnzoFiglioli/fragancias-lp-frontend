import { Index } from "./page/Index";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import SignIn from "./page/SignIn";
import { Header } from "./components/common/Header";
import ProductDetail from "./components/ProductDetail";
import { Footer } from "./components/common/Footer";
import ProductsPage from "./page/ProductsPage";
import CartPage from "./page/CartPage";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
