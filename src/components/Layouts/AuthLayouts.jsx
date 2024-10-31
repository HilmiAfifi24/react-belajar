import { Link } from "react-router-dom";

const AuthLayouts = (props) => {
  const { children, tittle, type } = props;
  return (
    <div className="flex justify-center min-h-screen items-center bg-black">
      <div className="w-full max-w-xs">
        <h1 className="text-blue-600 text-3xl font-bold mb-2">{tittle}</h1>
        <p className="font-medium text-slate-500 mb-8">
          Welcome, Please enter your details
        </p>
        {children}
        <p className="text-sm mt-5 text-center text-white">
          {type === 'login' ? "Don't have an account?" : "Already have an account?"}

          <Link
            to={type === 'login'? '/register' : '/login'}
            className="font-bold text-blue-600"
          >
            {type === 'login'? ' Register' : ' Login'}
          </Link>
        </p>
      </div>
    </div>
  );
};

export default AuthLayouts;