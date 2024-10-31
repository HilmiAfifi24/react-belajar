// src/components/Fragments/CardProduct.js
import { Link } from "react-router-dom";
import ButtonBlack from "../Elements/Button/Button";

const CardProduct = ({ children }) => {
  return (
    <div className="w-full max-w-sm bg-gray-800 border border-gray-700 rounded-lg shadow mx-5 my-2 flex flex-col justify-between mt-8">
      {children}
    </div>
  );
};

const Header = ({ image, id }) => (
  <div className="px-5 py-2">
    <Link to={`/detailproduct/${id}`}>
      <img src={image} alt="product" className="p-5 rounded-t-lg cursor-pointer w-full h-48 object-cover" />
    </Link>
  </div>
);

const Body = ({ title, children }) => (
  <div className="px-5 pb-5">
    <h5 className="text-lg md:text-xl font-semibold tracking-tight text-white mx-5">{title}</h5>
    <p className="text-sm md:text-base text-white mx-5">{children}</p>
  </div>
);

const Footer = ({ price, handleAddToCart, id }) => (
  <div className="flex items-center justify-between px-5 pb-5">
    <span className="mx-5 text-lg md:text-xl font-bold text-white">
      {price.toLocaleString("USD", { style: "currency", currency: "USD" })}
    </span>
    <ButtonBlack color="bg-blue-600" onClick={() => handleAddToCart(id)}>
      Add To Cart
    </ButtonBlack>
  </div>
);

CardProduct.Header = Header;
CardProduct.Body = Body;
CardProduct.Footer = Footer;

export default CardProduct;
