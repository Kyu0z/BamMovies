import React from "react";
import { Button, Link, Typography, Stack } from "@mui/material";

// img
import loginUrl from "./images/footer-bg.jpg";

const Register = () => {
  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <div className="main" style={{ overflow: "hidden" }}>
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
        <div>
          <form
            style={{
              padding: "18rem 3.5rem",
              background: "rgb(255 255 255 / 15%)",
              borderRadius: "15",
              minHeight: "29rem",
              marginTop: "3rem",
            }}
          >
            <Typography
              variant="h4"
              sx={{
                color: "#ccc",
                marginLeft: ".8rem",
                fontSize: "1.6rem",
              }}
            >
              START FOR FREE
            </Typography>
            <Typography
              variant="h2"
              sx={{
                fontWeight: "bold",
                fontSize: "4.6rem",
                margin: "1.5rem 0",
                color: "#fff",
              }}
            >
              Create new account
            </Typography>
            <Stack
              direction="row"
              justifyContent="left"
              alignItems="center"
              mt={3}
              mb={2}
              sx={{ marginLeft: ".8rem", color: "#666" }}
            >
              <Typography variant="h5" size="large">
                Already A Member?
              </Typography>
              <Link
                href="/auth/login"
                sx={{ fontSize: "1.5rem", ml: "1rem" }}
                underline="hover"
                size="large"
              >
                {"Login In"}
              </Link>
            </Stack>
            <Stack direction="row" spacing={3} sx={{ marginTop: "3rem" }}>
              <input
                autocomplete="off"
                required
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
                placeholder="Name"
              />
              <input
                autocomplete="off"
                required
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
                placeholder="Age"
              />
            </Stack>
            <Stack direction="row" spacing={3} sx={{ marginTop: "1.5rem" }}>
              <input
                autocomplete="off"
                required
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
                autocomplete="off"
                type="password"
                required
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
                placeholder="Password"
              />
            </Stack>
            <Button
              variant="contained"
              sx={{ float: "right", marginTop: "2rem", fontSize: "1.5rem" }}
            >
              Register
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
