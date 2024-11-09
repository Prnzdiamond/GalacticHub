import moviePic from "../../assets/images/movieImages/100 1.png";
import SignInButton from "../SignInButton/SignInButton";

const Categorycard = () => {
  return (
    <>
      <div className="bg-black relative">
        <div className=" container mx-auto w-full md:px-[41px] px-5 py-8 flex flex-col bg-black gap-y-8">
          <div className="catTitlebx">
            <h4 className="text-white font-bitter text-2xl md:text-5xl">
              Sci-Fi
            </h4>
          </div>

          <div className=" moviesCard grid grid-cols-1 sm:grid-cols-3  md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-6">
            {Array(11)
              .fill("")
              .map((_, index) => (
                <div
                  key={index}
                  className="movieCard mx-auto w-3/4  md:w-[177px] sm:w-[177px] md:h-[250px] relative overflow-hidden  shadow-lg transition-transform duration-500 ease-in-out transform hover:translate-y-[-10px] hover:shadow-xl"
                >
                  <img
                    className="w-full h-full object-cover transition-transform duration-500 ease-in-out"
                    src={moviePic}
                    alt="movie picture"
                  />
                  {/* Optional: Movie Title Overlay */}
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-500">
                    <h4 className="text-white font-semibold text-lg">
                      Movie Title
                    </h4>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Categorycard;
