import Header from "./Header";
import Footer from "./Footer";
import Login from "./Login";
import { Route, RouterProvider, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import ProductsDetails from "./ProductsDetails";
import ErrorPage from "./ErrorPage";
import ContactPage from "./ContactPage";
import About from "./About";

const Body = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/About" element={<About />}></Route>
        <Route path="/productDetails" element={<ProductsDetails />}></Route>
        <Route path="/contact" element={<ContactPage />}></Route>
        <Route path="*" element={<ErrorPage />} errorElement={<ErrorPage />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default Body;
