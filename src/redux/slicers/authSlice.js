import { createSlice } from '@reduxjs/toolkit';

const isAuth = localStorage.getItem('isAuth') === 'true';
const token = localStorage.getItem('token') || '';
const refreshToken = localStorage.getItem('refreshToken') || '';;

const initialState = {
    isAuth: isAuth,
    token: token,
    refreshToken: refreshToken,
};

const AuthSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logIn(state, action) {
            if (action.payload) {
                state.isAuth = action.payload.auth;
                state.token = action.payload.token;
                state.refreshToken = action.payload.refreshToken;
                localStorage.setItem('isAuth', 'true');
                localStorage.setItem('token', action.payload.token);
                localStorage.setItem('refreshToken', action.payload.refreshToken);
            }
        },
        logOut(state) {
            state.isAuth = false;
            state.token = '';
            state.refreshToken = '';
            localStorage.removeItem('isAuth');
            localStorage.removeItem('token');
            localStorage.removeItem('refreshToken');
        },
    },
})

export const isLoggedIn = (state) => state.auth.auth;
export const { auth, logIn } = AuthSlice.actions
export default AuthSlice.reducer