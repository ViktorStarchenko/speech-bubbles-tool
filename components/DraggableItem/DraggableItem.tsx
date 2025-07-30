import React from 'react';
import { useDraggable } from '@dnd-kit/core';

type Props = {
    id: string,
    children: React.ReactNode,
    style?: React.CSSProperties;
}

export default function DraggableItem({ id, children, style }: Props): JSX.Element {
    const { attributes, listeners, setNodeRef } = useDraggable({
        id: id,
    });

    return (
        <div ref={setNodeRef} style={{...style, position: 'absolute'}} {...listeners} {...attributes}>
            {children}
        </div>
    );
}