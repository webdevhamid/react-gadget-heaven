import { useLoaderData, useParams } from "react-router-dom";
import { IoCartOutline } from "react-icons/io5";
import { IoMdHeartEmpty } from "react-icons/io";
import ReactStars from "react-rating-stars-component";
import { Toaster } from "react-hot-toast";
import { useEffect, useState } from "react";
import { addToStoredCartList, addToWishList, getStoredCartList } from "../../Utilities/AddToDb";
import { Helmet, HelmetProvider } from "react-helmet-async";

const ProductDetails = () => {
  const { products } = useLoaderData();
  const { productId } = useParams();
  const [isDisableCart, setIsDisableCart] = useState(false);

  const matchedProduct = products.find((product) => product.product_id === productId);
  const {
    product_id,
    product_title,
    product_image,
    price,
    rating,
    availability,
    description,
    specification,
  } = matchedProduct;

  const handleAddToCart = (id) => {
    addToStoredCartList(id);
  };

  const handleAddToWishList = (id) => {
    addToWishList(id);
  };

  return (
    <HelmetProvider>
      <Helmet>
        <title>GadgetHeaven | {product_title}</title>
      </Helmet>
      <div className="h-screen">
        <div className="relative bg-color-primary text-white min-h-[380px] pt-5">
          <div className="md:w-4/5 lg:w-3/5 mx-auto text-center flex flex-col gap-4 pt-28">
            <h1 className="font-bold md:text-4xl text-3xl lg:text-5xl">Product Details</h1>
            <p className="text-lg text-gray-color opacity-80">
              Explore the latest gadgets that will take your experience to the next level. From
              smart devices to the coolest accessories, we have it all!
            </p>
          </div>
          <div className="md:10/12 lg:w-8/12 mx-auto absolute left-1/2 -translate-x-1/2 -bottom-2/5  mt-5 z-10 flex items-center bg-white text-black rounded-3xl overflow-hidden py-6 px-5 gap-5">
            <div className="w-[500px]">
              <img src={product_image} alt="" className="w-full" />
            </div>
            <div>
              <h1 className="font-bold text-2xl">{product_title}</h1>
              <p className="font-semibold text-xl text-gray-500 my-3">Price: ${price}</p>
              <div className="badge badge-accent badge-outline mb-3">{availability}</div>
              <p className="text-gray-600 mb-3">{description}</p>
              <div className="text-gray-600 mb-3">
                <span className="font-bold">Specification:</span>
                {specification.map((features, i) => {
                  for (const feature in features) {
                    return (
                      <p key={i}>
                        {i + 1}: {feature}: {features[feature]}
                      </p>
                    );
                  }
                })}
              </div>
              <div className="mb-3 flex items-start flex-col ">
                <p>Rating</p>
                <p className="flex items-center gap-5">
                  <ReactStars edit={false} value={rating} size={30}></ReactStars>
                  {rating}
                </p>
              </div>
              {/* add to cart and wishlist button */}
              <div className="flex items-center gap-3">
                <button
                  className={`flex items-center gap-3 text-lg text-white bg-color-primary px-6 py-3 rounded-badge`}
                  onClick={() => handleAddToCart(product_id)}
                >
                  Add to cart <IoCartOutline></IoCartOutline>
                </button>
                <button onClick={() => handleAddToWishList(product_id)}>
                  <IoMdHeartEmpty className="text-3xl"></IoMdHeartEmpty>
                </button>
              </div>
            </div>
          </div>
        </div>
        <Toaster position="top-center" reverseOrder={false} />
      </div>
    </HelmetProvider>
  );
};

export default ProductDetails;
