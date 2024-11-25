import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import Products from "../Products/Products";
import { createContext } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";

export const GadgetsContext = createContext(null);

const Home = () => {
  const { products } = useLoaderData();
  console.log(products);

  return (
    <HelmetProvider>
      <Helmet>
        <title>GadgetHeaven | Home</title>
      </Helmet>
      <div className="container mx-auto min-h-screen">
        <GadgetsContext.Provider value={products}>
          <Banner />
          <Products />
        </GadgetsContext.Provider>
      </div>
    </HelmetProvider>
  );
};

export default Home;
