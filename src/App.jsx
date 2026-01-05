import React, { useEffect } from "react";
import { useState } from "react";
import Header from "./components/Header";
import LoginForm from "./components/Form";
import DashBoard from "./DashBoard";
import { UserContext } from "./context/UserContext";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    let getUser = localStorage.getItem("currentUser");
    if (getUser) {
      setIsLoggedIn(true);
      setCurrentUser(JSON.parse(getUser));
    }
  }, []);

  useEffect(() => {
    if (currentUser) {
      localStorage.setItem("currentUser", JSON.stringify(currentUser));
    }
  }, [currentUser]);

  const handleLogin = (user) => {
    setIsLoggedIn(true);
    setCurrentUser(user);
  };

  const handleLogout = () => {
    setCurrentUser(null);
    setIsLoggedIn(false);
  };

  const contextValue = {
    currentUser,
    isLoggedIn,
    handleLogin,
    handleLogout,
  };

  return (
    <React.Fragment>
      <UserContext.Provider value={contextValue}>
        <Header />
        {isLoggedIn ? <DashBoard /> : <LoginForm />}
      </UserContext.Provider>
    </React.Fragment>
  );
};

export default App;
