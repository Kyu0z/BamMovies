import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory, Link } from "react-router-dom";
import { Button, Typography, Stack, Grid, TextField } from "@mui/material";
import authApi from "../api/auth";

// img
import loginUrl from "./images/footer-bg.jpg";

const Register = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    authApi.register(username, email, password).then(({ success, message }) => {
      if (success) {
        return history.push("/auth/login", { username, password });
      } else {
        return alert(message);
      }
    });
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
              <Link to="/auth/login" style={{ fontSize: "1.5rem", ml: "1rem" }}>
                {"Login In"}
              </Link>
            </Stack>
            <Grid
              container
              direction="column"
              spacing="12"
              sx={{ marginTop: "3rem" }}
            >
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
                  autocomplete="off"
                  required
                  focused
                  fullWidth
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  label="Email"
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
                  label="Password"
                  variant="filled"
                  color="success"
                  inputProps={{ style: { fontSize: 20, color: "#fff" } }}
                  InputLabelProps={{ style: { fontSize: 20, color: "#fff" } }}
                />
              </Grid>
            </Grid>
            <Button
              variant="contained"
              sx={{ float: "right", marginTop: "2rem", fontSize: "1.5rem" }}
              onClick={handleSubmit}
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
