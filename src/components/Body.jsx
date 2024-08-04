import Header from "./Header";
import Footer from "./Footer";
import Login from "./Login";
import { Route, RouterProvider, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import ProductsDetails from "./ProductsDetails";
import ErrorPage from "./ErrorPage";
import ContactPage from "./ContactPage";
import About from "./About";
import { lazy, Suspense } from "react";

const ViewAllProductPage = lazy(() => {
  return import("./ViewAllProductPage");
});

const Body = () => {
  return (
    <div>
      <>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/About" element={<About />}></Route>
          <Route
            path="/productDetails/:prodID"
            element={<ProductsDetails />}
          ></Route>
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
