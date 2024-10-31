// src/pages/ProductsPage.js
import { useNavigate } from "react-router-dom";
import CardProduct from "../components/Fragments/CardProduct";
import { useEffect, useState } from "react";
import { getProduct } from "../services/product.service";
import { useLogin } from "../hooks/useLogin";

const ProductsPage = () => {
  const navigate = useNavigate();
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart")) || []);
  const [totalBelanja, setTotalBelanja] = useState(JSON.parse(localStorage.getItem("totalBelanja")) || 0);
  const [productList, setProductList] = useState([]);
  const username = useLogin();

  // fetch data product ketika component did mount dan mendapatkan product dari API server
  useEffect(() => {
    const fetchData = async () => {
      const products = await getProduct();
      setProductList(products);
    };
    fetchData();
  }, []);

  // buat fungsi menghitung totalBelanja
  useEffect(() => {
    const sum = cart.reduce((acc, item) => {
      const product = productList.find((product) => product.id === item.id);
      return acc + item.qty * (product?.price || 0);
    }, 0);
    setTotalBelanja(sum);
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart, productList]);

  // buat fungsi setItem totalBelanja ke localstorage
  useEffect(() => {
    localStorage.setItem("totalBelanja", JSON.stringify(totalBelanja));
  }, [totalBelanja]);

  // fungsi memfilter product yang tampil di halaman UI berdasarkan category product
  const filterProduct = productList.filter(
    (product) =>
      product.category === "men's clothing" || product.category === "electronics"
  );

  // fungsi handle addToCart ketika tombol "Add to Cart" diklik
  const handleAddToCart = (id) => {
    const existingItem = cart.find((item) => item.id === id);
    if (existingItem) {
      setCart(
        cart.map((item) =>
          item.id === id ? { ...item, qty: item.qty + 1 } : item
        )
      );
    } else {
      setCart([...cart, { id, qty: 1 }]);
    }
  };

  // fungsi handleClearCart ketika tombol "Clear Cart" diklik
  const handleClearCart = () => {
    setCart([]);
    localStorage.removeItem("cart");
    setTotalBelanja(0);
    localStorage.removeItem("totalBelanja");
  }

  // fungsi handleLogout ketika tombol "Logout" diklik
  const handleLogout = (e) => {
    e.preventDefault();
    localStorage.removeItem("fullname");
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <>
      <header className="relative bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-between p-4 h-28 text-white">
        <h1 className="text-2xl md:text-3xl font-bold ml-5">Hello, {username}</h1>
        <button
          className="px-4 py-2 text-sm md:text-base bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg 
                     shadow-md transition duration-300 ease-in-out transform hover:scale-105"
          onClick={handleLogout}
        >
          Logout
        </button>
      </header>

      <div className="flex flex-col md:flex-row justify-center py-8 gap-6 px-4">
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filterProduct.slice(0, 7).map((product) => (
            <CardProduct key={product.id}>
              <CardProduct.Header image={product.image} id={product.id} />
              <CardProduct.Body title={product.title}>
                {product.description}
              </CardProduct.Body>
              <CardProduct.Footer
                price={product.price}
                id={product.id}
                handleAddToCart={handleAddToCart}
              />
            </CardProduct>
          ))}
        </div>

        <div className="w-full md:w-1/3 bg-white rounded-lg shadow-lg p-4">
          <h1 className="text-2xl md:text-3xl font-bold text-blue-600 mb-4">Cart</h1>
          <table className="text-left table-auto border-separate border-spacing-x-5 w-full text-xs md:text-base">
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Qty</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => {
                const product = productList.find((product) => product.id === item.id);
                return (
                  <tr key={item.id}>
                    <td>{product?.title || "N/A"}</td>
                    <td>
                      {product?.price?.toLocaleString("USD", {
                        style: "currency",
                        currency: "USD",
                      }) || 0}
                    </td>
                    <td>{item.qty}</td>
                    <td>
                      {(item.qty * (product?.price || 0)).toLocaleString("USD", {
                        style: "currency",
                        currency: "USD",
                      })}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>

          <div className="mt-4 flex flex-col md:flex-row justify-between items-center">
            <p className="text-lg md:text-xl font-bold">
              Total Belanja:{" "}
              {totalBelanja.toLocaleString("USD", {
                style: "currency",
                currency: "USD",
              })}
            </p>
            <button
              className="mt-4 md:mt-0 px-4 py-2 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-lg shadow-md 
                 transition duration-300 ease-in-out"
              onClick={handleClearCart}
            >
              Hapus Keranjang
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductsPage;
