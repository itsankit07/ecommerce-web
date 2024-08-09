import axios from "axios";
import { useState, useEffect } from "react";
import ProductSlider from "../ProductSlider";
import BrowseByCategory from "../BrowseByCategory";
import BestSellingProduct from "../BestSellingProduct";
import BestDealHomePage from "../BestDealHomePage";
import ExploreOurProducts from "../ExploreOurProducts";
import NewArrival from "../NewArrival";
import Aside from "./Aside";
import HomepageSlider from "./HomepageSlider";
import Badges from "./Badges";

const HomePage = () => {
  const [Products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((res) => {
      const info = res.data;
      console.log(info);
      setProducts(info);
    });
  }, []);

  return (
    <>
      <div className="flex max-w-6xl  justify-between mx-auto mb-[140px]">

       <Aside/>
       
       <HomepageSlider/> 

      </div>

      {/* Today's Section */}

      <ProductSlider product={Products} />

      {/* Browse By Category Section */}

      <BrowseByCategory />

      {/* Best Selling Section */}

      <BestSellingProduct bestSelling={Products} />

      {/* Best Deal Section */}

      <BestDealHomePage />

      {/* Explore Section */}
      <ExploreOurProducts explore={Products} />

      <NewArrival />

      <Badges/>
    </>
  );
};

export default HomePage;
