import { useContext, useEffect, useState } from "react";
import { GadgetsContext } from "../Home/Home";
import Categories from "../Categories/Categories";
import Product from "../Product/Product";
import { BeatLoader } from "react-spinners";

const Products = () => {
  const products = useContext(GadgetsContext);
  const [allProducts, setAllProducts] = useState(products);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (products) {
      setLoading(false);
    }
  }, []);

  const categories = products.map((product) => product.category);
  const uniqueCategories = [];
  categories.filter((category) => {
    if (!uniqueCategories.includes(category)) {
      uniqueCategories.push(category);
    }
    return uniqueCategories;
  });

  const handleCategoryProducts = (category) => {
    // console.log(category);
    if (category === "all_products") {
      setAllProducts(products);
    } else {
      const getCategoryProducts = products.filter((product) => product.category === category);
      setAllProducts(getCategoryProducts);
    }
  };

  return (
    <div className="py-20 md:mt-40 lg:mt-96">
      <h1 className="text-4xl text-center font-bold mb-10">Explore Cutting-Edge Gadgets</h1>

      <div className="flex gap-6 lg:flex-row flex-col">
        <div className="w-fit lg:min-w-[240px] border bg-white p-6 rounded-xl h-fit lg:sticky top-0">
          <div className="flex flex-wrap gap-3 justify-center lg:flex-col lg:gap-0">
            <button
              className={`w-[180px] h-[50px] mb-3 rounded-badge bg-gray-100`}
              onClick={() => handleCategoryProducts("all_products")}
            >
              All Products
            </button>
            {uniqueCategories.map((category, i) => (
              <Categories
                key={i}
                category={category}
                handleCategoryProducts={handleCategoryProducts}
              />
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 gap-6">
          {allProducts.map((product) => (
            <Product key={product.product_id} product={product}></Product>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
