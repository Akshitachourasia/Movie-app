import { createSlice } from "@reduxjs/toolkit";

interface AuthState {
  isLoggedIn: boolean;
  user: { username: string; password: string } | null;
  error: string | null;
  isAuthenticated: boolean;
}

const initialState: AuthState = {
  isLoggedIn: false,
  isAuthenticated: false,
  user: null,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login(state, action) {
      state.isAuthenticated = true;
      state.user = {
        password: action.payload.password,
        username: action.payload.username,
      };
      console.log(state.user.password, "PASSWORD");
      console.log(state.user.username, "USERNAME");
    },
    signup(state, action) {
      state.isAuthenticated = true;
      state.user = {
        password: action.payload.password,
        username: action.payload.username,
      };
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.user = null;
    },
  },
});

export const { login, signup, logout } = authSlice.actions;
export default authSlice.reducer;
