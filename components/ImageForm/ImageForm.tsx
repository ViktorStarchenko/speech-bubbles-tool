'use client';

import { ChangeEvent } from 'react';
import { useDispatch } from 'react-redux';
import { setImage } from '../../store/imageSlice';
import { AppDispatch } from '../../store/store';

export default function ImageForm() {
    const dispatch = useDispatch<AppDispatch>();

    const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                const base64 = reader.result as string;
                dispatch(setImage(base64));
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <form className="image-upload-form">
            <label htmlFor="image-upload">Upload Image <span className="danger-color image-upload-arrow">➘</span>  </label>
            <input type="file" id="image-upload" accept="image/*" onChange={handleImageChange} />
        </form>
    );
}
