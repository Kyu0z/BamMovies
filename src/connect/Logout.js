import React, { useEffect } from "react";
import { setUser, setToken } from "../redux";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

const Logout = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(setToken(null));
    dispatch(setUser(null));
    return history.push("/auth/login");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return <></>;
};

export default Logout;
