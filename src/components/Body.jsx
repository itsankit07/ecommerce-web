import Header from "./Header";
import Footer from "./Footer";
import Login from "./Login";
import { Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import ProductsDetails from "./ProductsDetails";

const Body = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/homePage" element={<HomePage />}></Route>
        <Route path="/productDetails" element={<ProductsDetails />}></Route>
      </Routes>
      <Footer />
    </div>
  );
};

export default Body;
