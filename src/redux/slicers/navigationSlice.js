import { createSlice } from '@reduxjs/toolkit';

const initialState = { path: '/' };

const NavigationSlice = createSlice({
    name: 'navigation',
    initialState,
    reducers: {
        goToHome(state) {
            state.path = '/';
        },
        goToPath(state, action) {
            state.path = action.payload;
        },
    },
})

export const { goToHome, goToPath } = NavigationSlice.actions
export default NavigationSlice.reducer