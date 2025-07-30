// store/store.ts
import { configureStore } from '@reduxjs/toolkit';
import imageReducer from './imageSlice';
import contentReducer from './contentSlice';

export const store = configureStore({
    reducer: {
        image: imageReducer,
        content: contentReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
