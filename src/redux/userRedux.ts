import { createSlice } from '@reduxjs/toolkit';

export interface SliceState {
  currentUser: {
    _id: '',
    username: string;
    email: string;
    isAdmin: boolean;
    accessToken: string;
    createdAt: string;
    updatedAt: string;
    __v: number;
  }
  isFetching: boolean;
  error: boolean;
}

const initialState: SliceState = {
  currentUser: {
    _id: '',
    username: '',
    email: '',
    isAdmin: false,
    accessToken: '',
    createdAt: '',
    updatedAt: '',
    __v: 0,
  },
  isFetching: false,
  error: false,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginStart: (state) => {
      state.isFetching = true;
    },
    loginSuccess: (state, action) => {
      state.isFetching = false;
      state.currentUser = action.payload;
      state.error = false;
    },
    loginFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    logoutStart: (state) => {
      state.isFetching = true;
    },
    logoutSuccess: (state) => {
      state.isFetching = false;
      state.currentUser = state.currentUser;
      state.error = false;
    },
    logoutFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
  }
});

export const {
  loginStart,
  loginSuccess,
  loginFailure,
  logoutStart,
  logoutSuccess,
  logoutFailure,
} = userSlice.actions;
export default userSlice.reducer;