import { createSlice } from '@reduxjs/toolkit';

const isAuth = localStorage.getItem('isAuth') === 'true';
const token = localStorage.getItem('token') || '';
const refreshToken = localStorage.getItem('refreshToken') || '';;

const initialState = {
    isAuth: isAuth,
    token: token,
    refreshToken: refreshToken,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logIn(state, action) {
            if (action.payload) {
                state.isAuth = action.payload.auth;
                state.token = action.payload.token;
                state.refreshToken = action.payload.refreshToken;
            }
        },
        logOut(state) {
            state.isAuth = false;
            state.token = '';
            state.refreshToken = '';
        },
    },
})

export const { auth, logIn } = authSlice.actions
export default authSlice.reducer