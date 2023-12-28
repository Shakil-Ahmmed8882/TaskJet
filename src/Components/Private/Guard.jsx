import { Navigate, useLocation } from "react-router-dom";

import PropTypes from 'prop-types'; 
import { UseAuth } from "../../Hooks/UseAuth";
import LoadingSpinner from "../Ui/Spinner/Spinner";

const Guard = ({ children }) => {
  const { user, loading } = UseAuth()
  const location = useLocation();

  if (loading) return <LoadingSpinner/>

  if (user) {
    return children;
  }

    return <Navigate state={location.pathname} to="/login"></Navigate>;

};

Guard.propTypes = {
  children: PropTypes.node 
}

export default Guard;