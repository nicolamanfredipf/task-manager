import { createSlice } from '@reduxjs/toolkit';


const initialState = { path: '' };

const navigationSlice = createSlice({
    name: 'navigation',
    initialState,
    reducers: {
        goToHome(state) {
            state.path = '';
        },
        navigate(state, action) {
            state.path = action.payload;
        },
    },
})

export const { goToHome, navigate } = navigationSlice.actions
export default navigationSlice.reducer