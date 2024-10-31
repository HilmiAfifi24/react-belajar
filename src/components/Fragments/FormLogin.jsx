import InputForm from "../Elements/Input";
import ButtonBlack from "../Elements/Button/Button";
import { useNavigate } from "react-router-dom";
import { useEffect, useRef } from "react";
import { login } from "../../services/auth.service";

const FormLogin = () => {
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            fullname: e.target.fullname.value,
            password: e.target.password.value,
        };

        login(data, (status, res) => {
            if(status) {
                localStorage.setItem("token", res);
                navigate("/products");
            } else {
                console.error("Failed to login:", res);
                alert("Invalid credentials!"); // Tampilkan pesan error jika login gagal
            }
        }); 
    };

    const fullnameRef = useRef(null);

    useEffect(() => {
        fullnameRef.current.focus();
    }, []);

    return (
        <>
            <form action="" onSubmit={handleSubmit}>
                <InputForm label="FullName" type="text" placeholder="Please enter your fullname" name="fullname" ref={fullnameRef}></InputForm>
                <InputForm label="Password" type="password" placeholder="********" name="password"></InputForm> {/* Mengubah name jadi "password" */}
                <ButtonBlack color="bg-slate-700 w-full">Login</ButtonBlack>
            </form>
        </>
    );
};

export default FormLogin;
