import React from "react";
import authorization from "../../../backend/authFirebase";
import { useNavigate } from "react-router-dom";
const Logout = () => {
  const navigate = useNavigate();
  return (
    <>
      <button
        onClick={() => {
          authorization.handle_logout();
          navigate("/login");
        }}
      >
        Log out
      </button>
    </>
  );
};

export default Logout;
