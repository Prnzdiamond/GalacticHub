const ModalBtn = ({ text, type = "button" }) => {
  return (
    <button
      type={type}
      className={`w-1/2 px-8 py-2 text-lg font-bold rounded-full transition-all duration-300 ${
        type === "submit"
          ? "bg-primary text-white hover:bg-opacity-90"
          : "bg-transparent text-primary focus:bg-primary focus:text-white focus:border-primary"
      } font-advent md:text-3xl`}
    >
      {text}
    </button>
  );
};

export default ModalBtn;
