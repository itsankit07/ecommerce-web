import "./App.css";
import { Route, Routes, useLocation } from "react-router-dom";
import "react-toastify/ReactToastify.css";
import Header from "../src/components/Header";
import Footer from "../src/components/Footer";
import Login from "../src/components/Login";
import HomePage from "../src/components/Home/HomePage";
import ProductsDetails from "../src/components/ProductsDetails";
import ErrorPage from "../src/components/ErrorPage";
import ContactPage from "../src/components/ContactPage";
import AccountPage from "../src/components/AccountPage";
import About from "../src/components/About";
import { lazy, Suspense, useEffect } from "react";
import SinglePage from "../src/components/browseByCategoryPages/SinglePage";
import CartPage from "../src/components/CartPage";
const ViewAllProductPage = lazy(() => {
  return import("../src/components/ViewAllProductPage");
});

function App() {
  const location = useLocation();
  useEffect(() => {
    window.scroll(0, 0);
  }, [location.pathname]);
  return (
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
  );

}

export default App;
