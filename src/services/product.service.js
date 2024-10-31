// src/services/product.service.js
// mengambil data dari API
import axios from "axios";

export const getProduct = async () => {
  try {
    const res = await axios.get("https://fakestoreapi.com/products");
    return res.data;
  } catch (err) {
    console.error("gagal untuk mendapatkan data product:", err);
    return [];
  }
};


export const getDetailProduct = async (id) => {
  try {
    const res = await axios.get(`https://fakestoreapi.com/products/${id}`);
    return res.data;
  } catch (err) {
    console.error("gagal untuk mendapatkan data detail product:", err);
    return {};
  }
};