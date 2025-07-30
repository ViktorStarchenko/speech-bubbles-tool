// store/contentSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {imageSlice} from "./imageSlice";

// interface contentState {
//     content: [
//         {
//             id: string,
//             text: string,
//             active: boolean,
//             style: string,
//             positionX: number,
//             positionY: number
//         }
//     ]
// }

// const initialContentState = {
//     content: []
// }

export interface ContentItem {
    id: string;
    text: string;
    active: boolean;
    style: string;
    positionX: number;
    positionY: number;
    fontSize: string;
    fontWeight: string;
}

interface ContentState {
    content: ContentItem[];
}


const initialContentState: ContentState = {
    content: []
};

export const contentSlice = createSlice({
    name: 'content',
    initialState: initialContentState,
    reducers: {
        addContent(state, action: PayloadAction<{
            id: string,
            text: string,
            active: boolean,
            style: string,
            positionX: number,
            positionY: number,
            fontSize: string,
            fontWeight: string,
        }>) {
            // state.imageFile = action.payload.file;
            state.content.push(action.payload);
        },
        removeContent(state, action: PayloadAction<{ id:number,text:string}>) {
            // state.imageFile = null;
            state.content = state.content.filter(item => item.id != action.payload.id);
        },
        replaceContent(state, action: PayloadAction<ContentItem[]>) {
            state.content = action.payload;
        }
    }
})

export const contentSliceActions = contentSlice.actions;
export default contentSlice.reducer;