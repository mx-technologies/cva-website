import { createSlice } from '@reduxjs/toolkit';

export interface AuthStateProps {
  auth: UserProps;
}

export interface UserProps {
  user: {
    id: string;
    email: string;
    token: string;
  };
}
const initialState: { user: UserProps | any } = {
  user: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    clearUser: (state) => {
      state.user = null;
    },
  },
});

export const { setUser, clearUser } = authSlice.actions;
export const authReducer = authSlice.reducer;
