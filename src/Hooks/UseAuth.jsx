import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";

export const UseAuth = () => {
  return useContext(AuthContext);
};

