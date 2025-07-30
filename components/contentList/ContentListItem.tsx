'use client'

import {contentSliceActions} from "../../store/contentSlice";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch} from "../../store/store";

import React, { useState } from 'react';
import TipTapEditor from '../TipTapEditor/TipTapEditor';

import BubbleOvalBottomLeftImage from '@/assets/images/bubble-oval-bottom-left.png'
import BubbleOvalBottomImage from '@/assets/images/bubble-oval-bottom.png'
import BubbleOvalBottomRightImage from '@/assets/images/bubble-oval-bottom-right.png'
import BubbleOvalTopLeftImage from '@/assets/images/bubble-oval-top-left.png'
import BubbleOvalTopImage from '@/assets/images/bubble-oval-top.png'
import BubbleOvalTopRightImage from '@/assets/images/bubble-oval-top-right.png'
import BubbleSquareBottomLeftImage from '@/assets/images/bubble-square-bottom-left.png'
import BubbleSquareBottomRightImage from '@/assets/images/bubble-square-bottom-right.png'
import BubbleThoughtsBottomLeftImage from '@/assets/images/bubble-thoughts-bottom-left.png'
import BubbleThoughtsBottomRightImage from '@/assets/images/bubble-thoughts-bottom-right.png'

const bubbleImages = [
    {
        id: 'oval-bottom-left',
        src: BubbleOvalBottomLeftImage.src
    },
    {
        id: 'oval-bottom',
        src: BubbleOvalBottomImage.src
    },
    {
        id: 'oval-bottom-right',
        src: BubbleOvalBottomRightImage.src
    },
    {
        id: 'oval-top-left',
        src: BubbleOvalTopLeftImage.src
    },
    {
        id: 'oval-top',
        src: BubbleOvalTopImage.src
    },
    {
        id: 'oval-top-right',
        src: BubbleOvalTopRightImage.src
    },
    {
        id: 'square-bottom-left',
        src: BubbleSquareBottomLeftImage.src
    },
    {
        id: 'square-bottom-right',
        src: BubbleSquareBottomRightImage.src
    },
    {
        id: 'thoughts-bottom-left',
        src: BubbleThoughtsBottomLeftImage.src
    },
    {
        id: 'thoughts-bottom-right',
        src: BubbleThoughtsBottomRightImage.src
    },
]

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

export default function ContentListItem({item}: Props): JSX.Element {
    const dispatch = useDispatch<AppDispatch>();
    const content = useSelector((state:RootState) => state.content.content);

    const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.id)
        const newContent = content.map(item => {
            if (item.id == e.target.id) {
                return {
                    ...item,
                    text: e.target.value,
                };
            }
            return item;
        })
        dispatch(contentSliceActions.replaceContent(newContent));
    };

    const handleRemove = (e: React.MouseEvent<HTMLButtonElement>) => {
        dispatch(contentSliceActions.removeContent(item));
    }

    const handleStyleChange = (e: React.ChangeEvent<HTMLInputElement>) => {

        const newContent = content.map(contentItem => {
            if (item.id == contentItem.id) {
                return {
                    ...contentItem,
                    style: e.target.value,
                };
            }
            return contentItem;
        })
        dispatch(contentSliceActions.replaceContent(newContent));
    };
    const [value, setValue] = useState('');


    const handleContentUpdate = (html: string) => {
        const newContent = content.map((c: any) => {
            if (c.id === item.id) {
                return { ...c, text: html };
            }
            return c;
        });
        dispatch(contentSliceActions.replaceContent(newContent));
    };

    return (
        <div className="content-body">
            <div className={`content-heading ${item.active == true ? 'active' : ''}`} key={item.id}>{item.id} <button className="btn-body btn-danger" onClick={handleRemove}>Remove ⤬</button></div>
            <div className="content-edit">
                <TipTapEditor content={item.text} onUpdate={handleContentUpdate} />
                {/*<textarea name="text" id={item.id} cols="30" rows="10" value={item.text} onChange={handleTextChange}></textarea>*/}
                {bubbleImages && (
                    <div className="content-edit--style">
                        <p style={{width: '100%'}}>Choose Style:</p>

                        {bubbleImages && bubbleImages.map(item => (
                            <label className="content-edit--style-label" key={item.id} htmlFor={item.id} style={{backgroundImage: `url(${item.src})`}}>
                                <input className="content-edit--style-input" id={item.id} type="radio" name="style" value={item.src} onChange={handleStyleChange}/>
                            </label>
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}