const ButtonBlack = (props) => {
  const { color, onClick, children } = props;
  return (
    <button
      className={`${color} px-6 py-2 text-white font-semibold rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default ButtonBlack;
