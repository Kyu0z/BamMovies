import React, { useState, useRef, useEffect } from "react";
import authApi from "../api/auth";
import { TextField, Typography, Button, Stack, Box, Grid } from "@mui/material";
import loginUrl from "./images/footer-bg.jpg";
import { setUser, setToken } from "../redux";
import { useDispatch } from "react-redux";
import { useHistory, useLocation, Link } from "react-router-dom";

import LoginIcon from "@mui/icons-material/Login";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";

const Login = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const history = useHistory();

  const [username, setUsername] = useState();
  const [password, setPassword] = useState(); // hook
  const passwordEl = useRef();

  const setUserAndRedirect = (user) => {
    dispatch(setUser(user));
    const nextUrl =
      new URL(window.location.href).searchParams.get("next") ?? "/";
    return history.push(nextUrl);
  };

  useEffect(() => {
    const tokenRaw = localStorage.getItem("token");
    if (tokenRaw) {
      const token = JSON.parse(tokenRaw);
      dispatch(setToken(token));
      authApi.me().then(({ success, data }) => {
        if (success) {
          return setUserAndRedirect(data);
        }
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (location.state) {
      const { username, password } = location.state;
      if (username && password) {
        setUsername(username);
        setPassword(password);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSubmit = () => {
    authApi
      .loginByPassword(username, password)
      .then(({ success, message, data, error }) => {
        if (success) {
          const { user, token } = data;
          dispatch(setToken(token));
          return setUserAndRedirect(user);
        } else {
          return alert(error?.error_description ?? error?.error ?? message);
        }
      });
  };

  return (
    <div className="main" style={{}}>
      <div
        className="login"
        style={{
          backgroundImage: `url(${loginUrl})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box autoComplete="off">
          <form
            noValidate
            autoComplete="off"
            style={{
              width: "360px",
              minHeight: "100px",
              padding: "32px 24px",
              textAlign: "center",
              background: "rgb(255 255 255 / 15%)",
              borderRadius: "2px",
              margin: "70px",
              alignSelf: "center",
              boxShadow: "0 2px 5px 0 rgb(51 62 73 / 10%)",
            }}
          >
            <Typography
              pb={2}
              variant="h3"
              align="center"
              subtitle2
              sx={{ color: "#dadada" }}
            >
              Login
            </Typography>
            <Typography
              variant="h6"
              pb={2}
              align="center"
              gutterBottom
              subtitle1
              sx={{ color: "#dadada" }}
            >
              Enjoy the moment 🍿
            </Typography>
            <Grid container direction="column" spacing="12">
              <Grid item>
                <TextField
                  autocomplete="off"
                  required
                  focused
                  fullWidth
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  label="Username"
                  variant="filled"
                  color="success"
                  inputProps={{ style: { fontSize: 20, color: "#fff" } }}
                  InputLabelProps={{ style: { fontSize: 20, color: "#fff" } }}
                />
              </Grid>
              <Grid item>
                <TextField
                  type="password"
                  autocomplete="off"
                  required
                  focused
                  fullWidth
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  ref={passwordEl}
                  onKeyPress={(ev) => {
                    if (ev.key === "Enter") {
                      ev.preventDefault();
                      handleSubmit();
                    }
                  }}
                  label="Password"
                  variant="filled"
                  color="success"
                  inputProps={{ style: { fontSize: 20, color: "#fff" } }}
                  InputLabelProps={{ style: { fontSize: 20, color: "#fff" } }}
                />
              </Grid>
            </Grid>
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <Link to="/auth/forgetpassword" style={{ fontSize: "1rem" }}>
                {"Forget password?"}
              </Link>
            </div>
            <Button
              type="button"
              sx={{ fontSize: "1rem" }}
              variant="contained"
              size="medium"
              fullWidth
              onClick={handleSubmit}
              endIcon={<LoginIcon />}
            >
              Login
            </Button>

            <Button
              type="button"
              sx={{
                m: "3rem 0 1.5rem",
                textTransform: "capitalize",
                color: "#dadada",
              }}
              variant="outlined"
              size="medium"
              fullWidth
              startIcon={<GoogleIcon />}
            >
              Sign in with Gmail
            </Button>

            <Button
              type="button"
              sx={{ textTransform: "capitalize", color: "#dadada" }}
              variant="outlined"
              size="medium"
              fullWidth
              startIcon={<FacebookIcon />}
            >
              Sign in with Facebook
            </Button>

            <Stack
              direction="row"
              justifyContent="center"
              alignItems="center"
              mt={12}
            >
              <Typography variant="h8" size="large" sx={{ color: "#dadada" }}>
                Don't have an account yet?
              </Typography>
              <Link
                to="/auth/register"
                style={{ fontSize: "1rem", ml: "1rem" }}
              >
                {"Sign Up"}
              </Link>
            </Stack>
          </form>
        </Box>
      </div>
    </div>
  );
};

export default Login;
