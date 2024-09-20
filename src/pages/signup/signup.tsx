import React, { useState } from "react";
import {
  Button,
  TextField,
  Typography,
  Container,
  Box,
  CssBaseline,
  Alert,
} from "@mui/material";
import { signup } from "../../slice/slice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Signup: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validatePhone = (phone: string) => {
    return /^[0-9]{10}$/.test(phone);
  };

  const handleSignup = () => {
    if (!username || !email || !phone || !password || !confirmPassword) {
      setError("All fields are required.");
      return;
    }

    if (!validateEmail(email)) {
      setError("Please enter a valid email.");
      return;
    }

    if (!validatePhone(phone)) {
      setError("Please enter a valid 10-digit phone number.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    if (password.length < 6) {
      setError("Password should be at least 6 characters long.");
      return;
    }

    setError(null);
    alert(`Account created for ${username}`);
    dispatch(signup({ username, password, email, phone }));
    localStorage.setItem("isAuthenticated", "true");
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);
    navigate("/auth/login");
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
          Sign Up
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
            label="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            label="Phone"
            type="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
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
          <TextField
            margin="normal"
            required
            fullWidth
            label="Confirm Password"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />

          {error && (
            <Alert severity="error" sx={{ width: "100%", mt: 2 }}>
              {error}
            </Alert>
          )}

          <Button
            type="button"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            onClick={handleSignup}
          >
            Sign Up
          </Button>
          <Typography
            variant="body2"
            sx={{ marginTop: "16px", textAlign: "center" }}
          >
            Already have an account?
            <Button
              onClick={() => navigate("/auth/login")}
              sx={{ textTransform: "none", padding: 0 }}
            >
              Login
            </Button>
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default Signup;
