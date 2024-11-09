import ModalBtn from "../ModalBtn/ModalBtn";
import InputComponent from "./../InputComponent/InputComponent";

const SignupModal = () => {
  return (
    <div className="fixed top-0 left-0 z-10 flex items-center justify-center w-screen h-screen bg-black bg-opacity-50">
      {/* Modal */}
      <div className="w-[62%] h-fit max-w-[887px] max-h-[593px] bg-white rounded-3xl shadow-lg">
        <div className="container flex flex-col items-center px-3 py-3 mx-auto">
          <div className="flex items-center justify-center w-1/2 border border-black rounded-full h-fit mt-11">
            <ModalBtn text="Sign In" />
            <ModalBtn text="Sign Up" />
          </div>
          <form action="" className="flex flex-col items-center w-1/2 my-16">
            <div className="flex flex-col w-full gap-2">
              <InputComponent placeholder={"Username"} />
              <InputComponent placeholder={"Email"} />
              <InputComponent placeholder={"Password"} />
            </div>
            <div className="flex items-center justify-center w-full pt-20">
              <ModalBtn text={"Log In"} type="submit" />
            </div>
          </form>

          <div>
            <p className="text-center font-2xl">Or</p>
          </div>
          <div className="flex">
            <div>google</div>
            <div>facebook</div>
            <div>twitter</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupModal;
