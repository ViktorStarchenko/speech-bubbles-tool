'use client';

import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';

export default function ImagePreview() {
    const previewUrl = useSelector((state: RootState) => state.image.imagePreviewUrl);

    if (!previewUrl) return <p>No image uploaded yet.</p>;

    return (
        <img className="image-preview" src={previewUrl} alt="Uploaded preview" />
    );
}
