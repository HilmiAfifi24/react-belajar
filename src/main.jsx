import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import LoginPage from './pages/login.jsx';
import RegisterPage from './pages/register.jsx';
import ProductsPage from './pages/products.jsx';
import ProfilePage from './pages/profile.jsx';
import DetailProductPage from './pages/detailProduct.jsx';
// import FormRegister from './components/Fragments/FormRegister.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />, // Bisa diarahkan ke halaman login atau halaman utama
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "*", // Untuk menangani semua rute yang tidak dikenal
    element: <h1>404 - Page Not Found</h1>, // Fallback page
  },
  {
    path: "/products",
    element: <ProductsPage />,
  },
  {
    path: "/profile",
    element: <ProfilePage />,
  },
  {
    path: "/detailProduct/:id",
    element: <DetailProductPage />,
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

