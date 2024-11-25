import { Link } from "react-router-dom";

const Product = ({ product }) => {
  const { product_id, product_title, product_image, price } = product;
  return (
    <div className="card p-5 border bg-white">
      <figure className="max-h-[180px] max-w-[280px] mx-auto p-3">
        <img src={product_image} className="h-full w-full object-contain" alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title font-semibold text-2xl">{product_title}</h2>
        <p className="text-xl text-gray-600">Price: ${price}</p>
        <div className="card-actions justify-start">
          <Link to={`/product-details/${product_id}`}>
            <button
              n
              className="btn btn-outline rounded-badge border-color-primary text-color-primary"
            >
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Product;
