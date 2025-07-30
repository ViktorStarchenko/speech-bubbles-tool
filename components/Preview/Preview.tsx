'use client';

import { DndContext, DragEndEvent } from '@dnd-kit/core';
import DraggableItem from "../DraggableItem/DraggableItem";
import TextContent from "../TextContent/TextContent";
import ImagePreview from "../ImagePreview/ImagePreview";

import {useDispatch, useSelector} from 'react-redux';
import { RootState } from '@/store/store';
import {AppDispatch} from "../../store/store";
import {contentSliceActions} from "../../store/contentSlice";
import SaveImageButton from "../SaveImageButton/SaveImageButton";

export default function Preview() {
    const dispatch = useDispatch<AppDispatch>();
    const content = useSelector((state:RootState) => state.content.content);
    console.log("content Preview", content)

    function handleDragEnd(event: DragEndEvent) {
        const { delta, active } = event;
        const id = active.id as string;

        const newContent = content.map(item => {
            if (item.id == id) {
                return {
                    ...item,
                    positionX: item.positionX + delta.x,
                    positionY: item.positionY + delta.y
                };
            }
            return item;
        })
        dispatch(contentSliceActions.replaceContent(newContent));
    }

    return (
        <div className="preview-wrapper">
            <SaveImageButton />
            <div className="preview-container">
                <DndContext onDragEnd={handleDragEnd}>
                    <div className="preview-capture" id="preview-capture" style={{ position: 'relative' }}>
                        <ImagePreview />
                        {content && content.map(item => (
                            <DraggableItem
                                key={item.id}
                                id={item.id}
                                style={{
                                    left: item.positionX,
                                    top: item.positionY,
                                    position: 'absolute'
                                }}
                            >
                                <TextContent item={item}/>
                            </DraggableItem>
                        ))}
                    </div>
                </DndContext>
            </div>
        </div>


    );
}