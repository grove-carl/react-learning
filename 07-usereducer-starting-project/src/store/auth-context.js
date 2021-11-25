import React from "react";

const AuthContext = React.createContext({
  isLoggedIn: false,
  onLogout: undefined
});

export default AuthContext;
