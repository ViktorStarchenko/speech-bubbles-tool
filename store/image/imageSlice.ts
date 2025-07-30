import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ImageState {
    imageUrl: string | null;
}

const initialState: ImageState = {
    imageUrl: null,
};

export const imageSlice = createSlice({
    name: 'image',
    initialState,
    reducers: {
        setImage: (state, action: PayloadAction<string>) => {
            state.imageUrl = action.payload;
        },
        clearImage: (state) => {
            state.imageUrl = null;
        },
    },
});

export const { setImage, clearImage } = imageSlice.actions;
export default imageSlice.reducer;
