import { Helmet, HelmetProvider } from "react-helmet-async";

const Statistics = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>GadgetHeaven | Statistics</title>
      </Helmet>
      <div className="h-screen">
        <div className="relative bg-color-primary text-white min-h-[380px] pt-5">
          <div className="md:w-4/5 lg:w-3/5 mx-auto text-center flex flex-col gap-4 pt-28">
            <h1 className="font-bold md:text-4xl text-3xl lg:text-5xl">Statistics</h1>
            <p className="text-lg text-gray-color opacity-80">
              Explore the latest gadgets that will take your experience to the next level. From
              smart devices to the coolest accessories, we have it all!
            </p>
          </div>
        </div>
      </div>
    </HelmetProvider>
  );
};

export default Statistics;
