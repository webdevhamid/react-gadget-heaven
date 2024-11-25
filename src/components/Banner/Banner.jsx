import { Link } from "react-router-dom";
import bannerImg from "../../assets/banner.jpg";

const Banner = () => {
  return (
    <div className="p-1 border-2 rounded-[32px]">
      <div className="relative bg-color-primary text-white rounded-[32px] min-h-[690px]">
        <div className="md:w-4/5 lg:w-3/5 mx-auto text-center flex flex-col gap-4 pt-28">
          <h1 className="font-bold md:text-4xl text-3xl lg:text-5xl">
            Upgrade Your Tech Accessorize with Gadget Heaven Accessories
          </h1>
          <p className="text-lg text-gray-color opacity-80">
            Explore the latest gadgets that will take your experience to the next level. From smart
            devices to the coolest accessories, we have it all!
          </p>
          <Link to={"/dashboard/cart"}>
            <button className="text-color-primary bg-white w-fit mx-auto px-6 py-4 rounded-badge font-bold">
              Shop Now
            </button>
          </Link>
        </div>
        <div className="w-8/12 mx-auto absolute left-1/2 -translate-x-1/2 -bottom-2/5 bg-transparent backdrop-blur-2xl p-6 rounded-3xl border-2 border-white mt-5 z-10">
          <img src={bannerImg} alt="" className="rounded-2xl w-full h-full" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
