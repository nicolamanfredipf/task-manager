import { configureStore } from '@reduxjs/toolkit';
import navigationReducer from './slicers/navigationSlice';
import authReducer from './slicers/authSlice';

const store = configureStore({
    reducer: {
        navigation: navigationReducer,
        auth: authReducer,
    },
});

export default store;
