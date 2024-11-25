import { useEffect, useRef, useState } from "react";
import Cart from "../Cart/Cart";
import WishList from "../WishList/WishList";
import { NavLink, useLoaderData, useNavigate, useParams } from "react-router-dom";
import { addToStoredCartList, getStoredCartList, getStoredWishList } from "../../Utilities/AddToDb";
import toast from "react-hot-toast";
import successImg from "../../assets/success.png";
import { Helmet, HelmetProvider } from "react-helmet-async";

const Dashboard = () => {
  const { products } = useLoaderData();
  const [cart, setCart] = useState([]);
  const [wishList, setWishList] = useState([]);
  const modalRef = useRef(null);
  const navigate = useNavigate();

  const { currentTab } = useParams();
  const [activeCurrentTab, setActiveCurrentTab] = useState("cart");

  useEffect(() => {
    const storedCartList = getStoredCartList();
    const storedWishList = getStoredWishList();

    const cartList = products.filter((product) => storedCartList.includes(product.product_id));
    const wishList = products.filter((product) => storedWishList.includes(product.product_id));

    setCart(cartList);
    setWishList(wishList);
  }, []);

  const totalCartCost = cart.reduce((acc, product) => {
    const total = (acc += product.price);
    return total;
  }, 0);

  const handleRemoveCartItem = (id) => {
    const item = cart.filter((productId) => productId !== id);
    setCart(item);
  };

  const handleSortByPrice = () => {
    const sortedCart = [...cart].sort((a, b) => b.price - a.price);
    setCart(sortedCart);
  };

  // const handleAddToCart = (id) => {
  //   addToStoredCartList(id);
  // };

  useEffect(() => {
    if (currentTab === "cart") {
      setActiveCurrentTab("cart");
    } else if (currentTab === "wishlist") {
      setActiveCurrentTab("wishlist");
    } else if (currentTab === "currentTab") setActiveCurrentTab("cart");
  }, [currentTab]);

  const handlePurchase = () => {
    if (modalRef.current) {
      localStorage.removeItem("cart-list");
      modalRef.current.showModal();
    }
  };

  const handleNavigate = () => {
    navigate("/");
  };

  return (
    <HelmetProvider>
      <Helmet>
        <title>GadgetHeaven | Dashboard</title>
      </Helmet>
      <div className="min-h-screen">
        <div className="relative bg-color-primary text-white min-h-[380px] pt-5">
          <div className="md:w-4/5 lg:w-3/5 mx-auto text-center flex flex-col gap-4 pt-28">
            <h1 className="font-bold md:text-4xl text-3xl lg:text-5xl">Dashboard</h1>
            <p className="text-lg text-gray-color opacity-80">
              Explore the latest gadgets that will take your experience to the next level. From
              smart devices to the coolest accessories, we have it all!
            </p>
            <div className="flex gap-5 justify-center">
              <NavLink to={"/dashboard/cart"}>
                <button
                  className={`px-10 py-3 bg-transparent border border-white text-white rounded-3xl font-semibold ${
                    activeCurrentTab === "cart" && "!bg-white !text-color-primary"
                  }`}
                >
                  Cart
                </button>
              </NavLink>
              <NavLink to={"/dashboard/wishlist"}>
                <button
                  className={`px-10 py-3 bg-transparent border border-white text-white rounded-3xl font-semibold ${
                    activeCurrentTab === "wishlist" && "!bg-white !text-color-primary"
                  }`}
                >
                  Wishlist
                </button>
              </NavLink>
            </div>
          </div>
        </div>
        <div className="container mx-auto py-10">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-3xl font-bold">
                {activeCurrentTab === "cart" ? "Cart" : "Wishlist"}
              </h2>
            </div>
            <div
              className={`flex items-center gap-3 my-8 ${activeCurrentTab !== "cart" && "hidden"}`}
            >
              <h2 className="text-3xl font-bold">Total Cost: ${totalCartCost}</h2>
              <button
                className="btn border-color-primary text-color-primary btn-outline"
                onClick={handleSortByPrice}
              >
                Sort By Price
              </button>
              <button
                className="btn bg-color-primary text-white"
                onClick={handlePurchase}
                disabled={cart.length === 0 || totalCartCost === 0}
              >
                Purchase
              </button>
            </div>
          </div>
          <div className={`grid grid-cols-1 gap-5 ${activeCurrentTab !== "cart" && "hidden"}`}>
            {cart.map((product) => (
              <Cart
                key={product.product_id}
                product={product}
                handleRemoveCartItem={handleRemoveCartItem}
              />
            ))}
          </div>
          <div className={`grid grid-cols-1 gap-5 ${activeCurrentTab !== "wishlist" && "hidden"}`}>
            {wishList.map((product) => (
              <WishList key={product.product_id} product={product} />
            ))}
          </div>
        </div>
        {/* Put this part before </body> tag */}
        <dialog id="purchase_modal" className="modal modal-bottom sm:modal-middle" ref={modalRef}>
          <div className="modal-box text-center">
            <img src={successImg} alt="" className="text-center mx-auto my-3" />
            <h3 className="font-bold text-lg">Payment Successful</h3>
            <div className="divider"></div>
            <p>Thanks for purchasing</p>
            <p>Total: ${totalCartCost}</p>
            <div className="modal-action justify-center">
              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn" onClick={handleNavigate}>
                  Close
                </button>
              </form>
            </div>
          </div>
        </dialog>
      </div>
    </HelmetProvider>
  );
};
export default Dashboard;
