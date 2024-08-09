import { Route, RouterProvider, Routes, useLocation } from "react-router-dom";
import "react-toastify/ReactToastify.css";
import Header from "./Header";
import Footer from "./Footer";
import Login from "./Login";
import HomePage from "./Home/HomePage";
import ProductsDetails from "./ProductsDetails";
import ErrorPage from "./ErrorPage";
import ContactPage from "./ContactPage";
import AccountPage from "./AccountPage";
import About from "./About";
import { lazy, Suspense, useEffect } from "react";
import SinglePage from "./browseByCategoryPages/SinglePage";
import CartPage from "./CartPage";

const ViewAllProductPage = lazy(() => {
  return import("./ViewAllProductPage");
});

const Body = () => {
  const location = useLocation();
  useEffect(() => {
    window.scroll(0, 0);
  }, [location.pathname]);

  return (
    <div>
      <>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/About" element={<About />}></Route>
          <Route path="/cart" element={<CartPage />}></Route>
          <Route path="/AccountPage" element={<AccountPage />}></Route>
          <Route
            path="/productDetails/:prodID"
            element={<ProductsDetails />}
          ></Route>
          <Route path="/singlePage/:categName" element={<SinglePage />}></Route>
          <Route path="/contact" element={<ContactPage />}></Route>
          <Route
            path="*"
            element={<ErrorPage />}
            errorElement={<ErrorPage />}
          />
          <Route
            path="/viewAllProduct"
            element={
              <Suspense
                fallback={
                  <div className="text-4xl flex justify-center font-bold my-30px">
                    Loading...
                  </div>
                }
              >
                <ViewAllProductPage />
              </Suspense>
            }
          ></Route>
        </Routes>
        <Footer />
      </>
    </div>
  );
};

export default Body;
