import { configureStore } from '@reduxjs/toolkit';
import navigationReducer from './slicers/NavigationSlice';
import authReducer from './slicers/AuthSlice';

const store = configureStore({
    reducer: {
        navigation: navigationReducer,
        auth: authReducer,
    },
});

export default store;
