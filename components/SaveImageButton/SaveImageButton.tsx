// SaveImageButton.tsx
'use client';

import html2canvas from 'html2canvas';

export default function SaveImageButton() {
    const handleCapture = async () => {
        const element = document.getElementById('preview-capture');
        if (!element) return;

        const canvas = await html2canvas(element);
        const dataUrl = canvas.toDataURL('image/png');

        const link = document.createElement('a');
        link.href = dataUrl;
        link.download = 'preview.png';
        link.click();
    };

    return (
        <button className="btn-body" onClick={handleCapture}>Save Image</button>
    );
}
