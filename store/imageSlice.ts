// store/imageSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ImageState {
    // imageFile: File | null;
    imagePreviewUrl: string | null;
}

const initialState: ImageState = {
    // imageFile: null,
    imagePreviewUrl: null,
};

export const imageSlice = createSlice({
    name: 'image',
    initialState,
    reducers: {
        setImage(state, action: PayloadAction<string>) {
            // state.imageFile = action.payload.file;
            state.imagePreviewUrl = action.payload;
        },
        clearImage(state) {
            // state.imageFile = null;
            state.imagePreviewUrl = null;
        },
    },
});

export const { setImage, clearImage } = imageSlice.actions;
export default imageSlice.reducer;
