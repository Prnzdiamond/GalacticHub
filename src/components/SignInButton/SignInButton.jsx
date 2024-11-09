const SignInButton = () => {
  return (
    <>
      <div className="w-full h-[500px] bg-black bg-opacity-50 absolute text-white bottom-0 left-0 flex items-center justify-center">
        <button className="bg-primary px-6  text-2xl py-3 md:w-[400px] w-[200px] sm:w-[300px] md:h-[133px] h-auto md:text-5xl sm:text-3xl font-amaranth font-bold">
          Sign In
        </button>
      </div>
    </>
  );
};

export default SignInButton;
