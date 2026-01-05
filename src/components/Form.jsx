import React, { useContext, useState } from "react";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { UserContext } from "../context/UserContext";
const LoginForm = () => {
  const { handleLogin } = useContext(UserContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();
    if (name && email) {
      handleLogin({ name, email });
    } else {
      console.log("Invalid Inputs");
    }
  };
  return (
    <React.Fragment>
      <div className="w-full max-w-md mx-auto my-20">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Welcome Back
          </h1>
          <p className="text-gray-600 font-semibold">
            Sign in to access your personal dashboard
          </p>
        </div>
        <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-8">
          <form onSubmit={onSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="username"
                className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2"
              >
                <PersonIcon />
                Username
              </label>
              <input
                id="username"
                type="text"
                placeholder="Enter your username"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-all"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2"
              >
                {/* <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg> */}
                <EmailIcon />
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-all"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 px-4 cursor-pointer bg-gradient-to-r from-blue-200 to-blue-500 text-white font-semibold rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 transition-all transform hover:scale-[1.02]"
            >
              Sign In <ArrowForwardIcon />
            </button>
          </form>
        </div>
      </div>
    </React.Fragment>
  );
};
export default LoginForm;
