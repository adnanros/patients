
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers/patientReducer';

const store = configureStore({
    reducer: rootReducer,
});

export default store;