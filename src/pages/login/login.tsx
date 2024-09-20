import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  Button,
  TextField,
  Typography,
  Container,
  Box,
  CssBaseline,
} from "@mui/material";
import { login } from "../../slice/slice";
import { useNavigate } from "react-router-dom";

const Login: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogin = () => {
    if (username === "admin" && password === "password") {
      dispatch(login(username));
      localStorage.setItem("isAuthenticated", "true");
      navigate("/dashboard");
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h5">
          Login
        </Typography>
        <Box component="form" noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            label="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            type="button"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            onClick={handleLogin}
          >
            Login
          </Button>
          <Typography
            variant="body2"
            sx={{ marginTop: "16px", textAlign: "center" }}
          >
            Don't have an account?
            <Button
              onClick={() => navigate("/signup")}
              sx={{ textTransform: "none", padding: 0 }}
            >
              Sign Up
            </Button>
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default Login;
