import { Link } from "react-router-dom";
import { FaGoogle, FaEnvelope, FaLock } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import toast from "react-hot-toast";
import { apiLogin } from "../../services/auth";

const Login = () => {
  const navigate = useNavigate();
  const [loading,setLoading] = useState(false);

  const handleLogin = async (event) =>{
    event.preventDefault();
    setLoading(true);

    const formData = new FormData(event.target);

    try {
      const response = await apiLogin(formData);
      localStorage.setItem('token', response.data.token)

      toast.success('login successful');

      navigate('/dashboard');
    } catch (error) {
      toast.error('login unsuccessful');
      console.log(error);
    }finally{
      setLoading(false);
    }
  }


  return (
    <div className="w-full h-[600px] flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white shadow-md rounded-xl p-8 w-full max-w-md">
        <h2 className="text-3xl font-bold mb-6 text-center text-[#CE9315]">
          Login
        </h2>

        <form className="space-y-4 text-gray-700" onSubmit={handleLogin}>
          <div className="relative">
            <FaEnvelope className="absolute left-3 top-3 text-gray-400" />
            <input
              name="email"
              type="email"
              placeholder="Email"
              className="w-full pl-10 border rounded-lg px-4 py-2 focus:outline-none   shadow-sm"
            />
          </div>
          <div className="relative">
            <FaLock className="absolute left-3 top-3 text-gray-400" />
            <input
              name="password"
              type="password"
              placeholder="Password"
              className="w-full pl-10 border rounded-lg px-4 py-2 focus:outline-none  shadow-sm"
            />
          </div>

          <button
            type="submit"
            className={`w-full bg-[#CE9315] text-white py-2 rounded-lg hover:bg-[#b47611] transition duration-300 ${loading ? 'opacity-70 cursor-not-allowed':''} `} disabled={loading}
          >
            {loading ? 'Please wait.....': 'Login'}
          </button>
        </form>

        <div className="my-4 text-center text-gray-500">or continue with</div>

        <button className="w-full border flex items-center justify-center gap-3 py-2 rounded-lg hover:bg-gray-100 transition">
          <FaGoogle className="text-red-500" />
          <span>Login with Google</span>
        </button>

        <p className="mt-6 text-center text-sm text-gray-600">
          Don’t have an account?{" "}
          <Link
            to="/signup"
            className="text-[#CE9315] font-semibold hover:underline"
          >
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
