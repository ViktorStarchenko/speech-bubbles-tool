import Image from "next/image";
import React, { useRef, useState } from "react";

type Props = {
    item: {
        id: string,
        text: string,
        active: boolean,
        style: string,
        positionX: number,
        positionY: number
    }
}

export default function TextContent({item}: Props) {
    const [width, setWidth] = useState(200);
    const [height, setHeight] = useState(100);
    const resizerRef = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    const handleMouseDown = (e: React.MouseEvent) => {
        e.preventDefault();
        const startX = e.clientX;
        const startY = e.clientY;
        const startWidth = containerRef.current?.offsetWidth || 0;
        const startHeight = containerRef.current?.offsetHeight || 0;

        const handleMouseMove = (moveEvent: MouseEvent) => {
            const newWidth = startWidth + (moveEvent.clientX - startX);
            setWidth(newWidth);
            const newHeight = startHeight + (moveEvent.clientY - startY);
            setHeight(newHeight);
        };

        const handleMouseUp = () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handleMouseUp);
        };

        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', handleMouseUp);
    };

    return (
        <div
            ref={containerRef}
            className={`speech-bubble ${item.active == true ? 'active' : ''}`}
            style={{ width: `${width}px`, height: `${height}px`, position: 'relative' }}
        >
            {item.style && (
                <Image src={item.style} title={item.id} alt={item.id} fill/>
            )}
            <p className={`speech-bubble-inner`} dangerouslySetInnerHTML={{ __html: item.text }}></p>
            <div
                className="speech-bubble-resize-handler"
                ref={resizerRef}
                onMouseDown={handleMouseDown}
            >
                <span className="speech-bubble-resize-arrow">⤡</span>
            </div>
        </div>
    )
}