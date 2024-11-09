import galaticHub from "../../assets/Images/galaticHub.png";

const Navbar = () => {
  return (
    <>
      <div className="bg-primary">
        <div className="Navbar container mx-auto w-full h-[50px] bg-primary flex items-center justify-between px-8 py-10">
          <div className="logoBx w-1/2 h-[78px] justify-start flex items-center">
            <a href="#">
              <img src={galaticHub} alt="Galatic Hub 📺" />
            </a>
          </div>
          <div className="AuthBtns flex justify-end w-1/2 gap-1 md:gap-3">
            <button className="w-20 md:w-32 h-9 font-amaranth font-normal text-base md:text-2xl bg-black text-white border border-black">
              Sign In
            </button>
            <button className="w-20 md:w-32 h-9 font-amaranth font-normal text-base md:text-2xl  border border-black">
              {" "}
              Join{" "}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
