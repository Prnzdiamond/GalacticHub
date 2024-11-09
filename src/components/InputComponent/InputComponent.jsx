const InputComponent = ({ placeholder }) => {
  return (
    <div>
      <input
        type="text"
        className="w-full text-2xl font-normal leading-10 border-b-2 focus:border-x-transparent focus:border-t-transparent focus:outline-none focus:cursor-text font-roboto"
        placeholder={placeholder}
      />
    </div>
  );
};

export default InputComponent;
