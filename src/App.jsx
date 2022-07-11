import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MDBContainer } from "mdb-react-ui-kit";
import "./App.css";
import Footer from "./common_components/Footer";
import Header from "./common_components/Header";
import Alert from "./common_components/Alert";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Login from "./pages/Authentication/Login";
import Register from "./pages/Authentication/Register";
import Account from "./pages/Authentication/Account";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import OrderDetails from "./pages/OrderDetails";
import OrderHistory from "./pages/OrderHistory";
import PageNotFound from "./pages/Error/PageNotFound";
import PaymentSuccessful from "./pages/Payment/PaymentSuccessful";
import PaymentFailed from "./pages/Payment/PaymentFailed";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* header */}
        <Header />
        <MDBContainer className="my-5">
          {/* alert */}
          <Alert />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop/:categoryId" element={<Shop />} />
            <Route path="/details/:productId" element={<ProductDetails />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/order-history" element={<OrderHistory />} />
            <Route path="/order-details/:orderId" element={<OrderDetails />} />
            <Route path="/account" element={<Account />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/payment-success" element={<PaymentSuccessful />} />
            <Route path="/payment-failed" element={<PaymentFailed />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </MDBContainer>
        {/* footer */}
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
