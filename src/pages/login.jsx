import AuthLayouts from "../components/Layouts/AuthLayouts";
import FormLogin from "../components/Fragments/FormLogin";


const LoginPage = () => {
    return (
        <AuthLayouts tittle="Login" type="login">
            <FormLogin />
        </AuthLayouts>
    )
}

export default LoginPage;