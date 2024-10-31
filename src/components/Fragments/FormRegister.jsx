import { useNavigate } from "react-router-dom"; // Import useNavigate
import InputForm from "../Elements/Input";
import ButtonBlack from "../Elements/Button/Button";
import { useEffect, useRef } from "react";

const FormRegister = () => {
    const navigate = useNavigate(); // Mendapatkan fungsi navigate

    const handleSubmit = (e) => {
        e.preventDefault(); // Mencegah pengiriman formulir default

        // Setelah berhasil mendaftar, arahkan ke halaman login
        navigate("/login"); 
    };

    const nameRef = useRef(null);

    useEffect(() => {
        nameRef.current.focus(); // Memfokus ke inputan fullname saat halaman dibuka
    })

    return (
        <>
            <form onSubmit={handleSubmit}> 
                <InputForm
                    label="FullName"
                    type="text"
                    placeholder="Insert your fullname here..."
                    name="fullname"
                    ref={nameRef}
                />
                <InputForm
                    label="Email"
                    type="email"
                    placeholder="example@gmail.com"
                    name="email"
                />
                <InputForm
                    label="Password"
                    type="password"
                    placeholder="********"
                    name="password" // Pastikan nama ini konsisten
                />
                <InputForm
                    label="Confirm Password"
                    type="password"
                    placeholder="********"
                    name="confirmpassword"
                />
                <ButtonBlack color="bg-slate-700 w-full" type="submit">Register</ButtonBlack> {/* Pastikan ada type="submit" */}
            </form>
        </>
    );
};

export default FormRegister;