'use client'

import {useDispatch, useSelector} from 'react-redux';
import { RootState } from '@/store/store';
import {AppDispatch} from "../../store/store";
import { contentSliceActions } from '../../store/contentSlice';
import ContentListItem from "./ContentListItem";


export default function ContentList(): JSX.Element {
    const dispatch = useDispatch<AppDispatch>();
    const content = useSelector((state:RootState) => state.content.content);

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        if (!content) {
            return null;
        }
        const id = `${Date.now()}-${Math.floor(Math.random() * 10000)}`;
        let newItem = {
            id: 'item-'+id,
            text: 'Some text',
            active: false,
            style: '',
            positionX: 0,
            positionY: 0
        }
        dispatch(contentSliceActions.addContent(newItem));
    };


    return (
        <div className="content-list">
            <div className="content-list-title">
                <h1>Content</h1>
                <button className="btn-body" onClick={handleClick}>Add content +</button>
            </div>
            {content && content.map(item => (
                <ContentListItem key={item.id} item={item}/>
            ))}
        </div>
    )
}