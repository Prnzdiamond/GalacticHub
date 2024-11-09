const Bannercard = () => {
  return (
    <>
      <div className="bg-black">
        <div className="bannerCard container mx-auto w-full md:pl-[41px] pl-5 py-10 flex flex-col bg-black gap-y-8">
          <div className="bannerTitle">
            <h1 className="font-rock_salt font-normal md:text-6xl text-2xl text-white leading-normal">
              Tv Shows
            </h1>
          </div>
          <div className="bannerDescription w-full max-w-lg">
            <p className="font-red_hat text-white md:text-xl text-sm font-bold leading-normal">
              Enjoy online streaming of the best Action, Comedy, and Romantic tv
              series from all over the world
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Bannercard;
