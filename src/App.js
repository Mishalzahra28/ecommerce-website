import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/home/Home";
import Admin from "./pages/admin/Admin";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import ForgetPassword from "./pages/auth/ForgetPassword";
import Cart from "./pages/cart/Cart";
import { ToastContainer, toast } from "react-toastify";
import ProductDetail from "./pages/productDetail/ProductDetail";
import "react-toastify/dist/ReactToastify.css";
import CartProvider from "./store/CartProvider";
function App() {
  return (
    <>
      <BrowserRouter>
        <CartProvider>
          <ToastContainer autoClose={600} />
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forgetpassword" element={<ForgetPassword />} />
            <Route path="/product/:detail" element={<ProductDetail />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
          <Footer />
        </CartProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
