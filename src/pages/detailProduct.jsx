// src/pages/DetailProductPage.js
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom"; // Import useNavigate
import { getDetailProduct } from "../services/product.service";

const DetailProductPage = () => {
  const { id } = useParams();
  const navigate = useNavigate(); // Initialize navigate
  const [product, setProduct] = useState({});

  // fungsi mendapatkan detail product berdasarkan id dari API
  useEffect(() => {
    const fetchData = async () => {
      const data = await getDetailProduct(id);
      setProduct(data);
    };
    fetchData();
  }, [id]);

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center p-8">
      <div className="max-w-4xl w-full bg-white rounded-lg shadow-lg overflow-hidden p-8">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 flex justify-center mb-6 md:mb-0">
            <img
              src={product.image}
              alt={product.title}
              className="w-full max-w-xs rounded-lg shadow-lg transform transition duration-300 hover:scale-105"
            />
          </div>
          <div className="w-full md:w-1/2 p-4">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">{product.title}</h1>
            <p className="text-lg text-gray-600 mb-4">{product.description}</p>
            <p className="text-2xl font-bold text-blue-600 mb-6">
              {product.price &&
                product.price.toLocaleString("USD", { style: "currency", currency: "USD" })}
            </p>
            <button
              onClick={() => navigate("/products")} // Navigate to ProductsPage
              className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300 ease-in-out transform hover:scale-105"
            >
              Back to Products
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailProductPage;
