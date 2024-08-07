import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SignupState {
  username: string;
  email: string;
  password: string;
  loading: boolean;
  error: string | null;
}

const initialState: SignupState = {
  username: "",
  email: "",
  password: "",
  loading: false,
  error: null,
};

const signupSlice = createSlice({
  name: "signup",
  initialState,
  reducers: {
    setUsername(state, action: PayloadAction<string>) {
      state.username = action.payload;
    },
    setEmail(state, action: PayloadAction<string>) {
      state.email = action.payload;
    },
    setPassword(state, action: PayloadAction<string>) {
      state.password = action.payload;
    },
    setLoading(state, action: PayloadAction<boolean>) {
      state.loading = action.payload;
    },
    setError(state, action: PayloadAction<string | null>) {
      state.error = action.payload;
    },
  },
});

export const { setUsername, setEmail, setPassword, setLoading, setError } =
  signupSlice.actions;

export default signupSlice.reducer;
