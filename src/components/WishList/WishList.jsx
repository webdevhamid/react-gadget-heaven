import { IoCartOutline } from "react-icons/io5";

const WishList = ({ product }) => {
  const { product_id, product_image, product_title, description, price } = product;

  return (
    <div className="flex items-center gap-5 bg-white p-8 rounded-3xl">
      <div className="w-[200px] min-h-[124px] rounded-3xl overflow-hidden">
        <img src={product_image} alt="" className="w-full h-full object-cover" />
      </div>
      <div>
        <p className="text-2xl font-bold mb-3">{product_title}</p>
        <p className="text-gray-500 mb-3">{description}</p>
        <p className="text-xl font-semibold">${price}</p>
      </div>
      <div>
        <button className="flex items-center gap-3 text-lg text-white bg-color-primary px-6 py-3 rounded-badge">
          Add to cart <IoCartOutline></IoCartOutline>
        </button>
      </div>
    </div>
  );
};

export default WishList;
