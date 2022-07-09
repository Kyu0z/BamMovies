import React, { useState, useRef } from "react";
import { TextField, Typography, Link, Button, Stack, Box } from "@mui/material";
import loginUrl from "./images/footer-bg.jpg";

import LoginIcon from "@mui/icons-material/Login";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";

const Login = ({ setUser }) => {
  const [username, setUsername] = useState();
  // Support "enter"
  const [password, setPassword] = useState(); // hook
  // Chuyển hướng tới trang chủ || ràng buộc login
  // const navigate = useNavigate();

  // Support "enter"
  const passwordEl = useRef();
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
            <input
              autocomplete="off"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              style={{
                marginBottom: "1.6rem",
                background: "rgba(255, 255, 255, 0.1)",
                color: "#fff",
                height: "40px",
                width: "100%",
                padding: "8px 2px",
                border: "1px solid #b3b3b3",
                borderRadius: "3px",
                outline: "none",
                fontSize: "1.2rem",
              }}
              name=""
              id=""
              placeholder="Email"
            />
            <input
              type="password"
              style={{
                marginBottom: "1.6rem",
                background: "rgba(255, 255, 255, 0.1)",
                color: "#fff",
                height: "40px",
                width: "100%",
                padding: "8px 2px",
                border: "1px solid #b3b3b3",
                borderRadius: "3px",
                outline: "none",
                fontSize: "1.2rem",
              }}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              ref={passwordEl}
              onKeyPress={(ev) => {
                if (ev.key === "Enter") {
                  ev.preventDefault();
                  // handleLogin();
                }
              }}
              required
              name=""
              id=""
              placeholder="Password"
            />
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <Link
                href="/auth/forgetpassword"
                sx={{ fontSize: "1rem" }}
                underline="hover"
                pb={2}
              >
                {"Forget password?"}
              </Link>
            </div>
            <Button
              type="button"
              sx={{ fontSize: "1rem" }}
              variant="contained"
              size="medium"
              fullWidth
              // onClick={handleLogin}
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
                href="/auth/register"
                sx={{ fontSize: "1rem", ml: "1rem" }}
                underline="hover"
                size="large"
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
