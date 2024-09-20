import { createSlice } from "@reduxjs/toolkit";

interface AuthState {
  isLoggedIn: boolean;
  user: { email: string } | null;
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
      state.user = { email: action.payload.email };
    },
    signup(state, action) {
      state.isAuthenticated = true;
      state.user = { email: action.payload.email };
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.user = null;
    },
  },
});

export const { login, signup, logout } = authSlice.actions;
export default authSlice.reducer;
