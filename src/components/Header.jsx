import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";
import LogoutIcon from "@mui/icons-material/Logout";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";

const Header = () => {
  const { isLoggedIn, handleLogout, currentUser } = useContext(UserContext);
  return (
    <React.Fragment>
      <header className="border-b border-gray-200 bg-white/80 backdrop-blur-sm shadow-sm ">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-r flex justify-center items-center from-blue-500 to-purple-600 rounded-lg">
              {" "}
              <AutoAwesomeIcon className="text-white" />
            </div>
            <h1 className="text-2xl font-bold text-gray-900">
              Personal Dashboard
            </h1>
          </div>
          <div>
            {isLoggedIn ? (
              <div className="flex items-center gap-4">
                <div className="text-right">
                  <p className="text-mg font-semibold text-gray-500">
                    Welcome back,
                  </p>
                  <span className="text-mg font-medium text-gray-900">
                    {currentUser?.name}
                  </span>
                </div>
                <button
                  onClick={handleLogout}
                  className="px-4 py-2 text-sm font-medium cursor-pointer text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <LogoutIcon /> Logout
                </button>
              </div>
            ) : (
              <p className="text-mg font-semibold text-gray-500">
                Please log in to access your dashboard
              </p>
            )}
          </div>
        </div>
      </header>
    </React.Fragment>
  );
};
export default Header;
