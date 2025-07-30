'use client';

// import { useEditor, EditorContent } from '@tiptap/react';
// import StarterKit from '@tiptap/starter-kit';
// import React from 'react';

import { TextStyleKit } from '@tiptap/extension-text-style'
import type { Editor } from '@tiptap/react'
import { EditorContent, useEditor, useEditorState } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import TextStyle from '@tiptap/extension-text-style';
import { FontSize } from './extensions/FontSize';
import TextAlign from '@tiptap/extension-text-align'

import React from 'react'

const extensions = [TextStyleKit, StarterKit]

type Props = {
    content: string;
    onUpdate: (content: string) => void;
};

export default function TipTapEditor({ content, onUpdate }: Props) {
    const editor = useEditor({
        extensions: [
            StarterKit,
            TextStyle,
            FontSize,
            TextAlign.configure({
                types: ['heading', 'paragraph'], // до чого застосовувати
            })
        ],
        content,
        onUpdate: ({ editor }) => {
            onUpdate(editor.getHTML());
        },
        immediatelyRender: false, // <-- ВАЖЛИВО
    });

    if (!editor) {
        return null;
    }

    return (
        <>
            <MenuBar editor={editor} />
            <div className="editor-font-size">
                Font Size:
                <input type="number" defaultValue="14" onChange={(e) => editor?.commands.setFontSize(e.target.value)}/>
                {/*<select*/}
                {/*    onChange={(e) => editor?.commands.setFontSize(e.target.value)}*/}
                {/*    defaultValue=""*/}
                {/*>*/}
                {/*    <option value="">Font size</option>*/}
                {/*    <option value="12">12px</option>*/}
                {/*    <option value="14">14px</option>*/}
                {/*    <option value="16">16px</option>*/}
                {/*    <option value="20">20px</option>*/}
                {/*    <option value="24">24px</option>*/}
                {/*</select>*/}
            </div>
            <EditorContent editor={editor} />
        </>
    )

}

function MenuBar({ editor }: { editor: Editor }) {
    // Read the current editor's state, and re-render the component when it changes
    const editorState = useEditorState({
        editor,
        selector: ctx => {
            return {
                isBold: ctx.editor.isActive('bold') ?? false,
                canBold: ctx.editor.can().chain().toggleBold().run() ?? false,
                isItalic: ctx.editor.isActive('italic') ?? false,
                canItalic: ctx.editor.can().chain().toggleItalic().run() ?? false,
                isStrike: ctx.editor.isActive('strike') ?? false,
                canStrike: ctx.editor.can().chain().toggleStrike().run() ?? false,
                isCode: ctx.editor.isActive('code') ?? false,
                canCode: ctx.editor.can().chain().toggleCode().run() ?? false,
                canClearMarks: ctx.editor.can().chain().unsetAllMarks().run() ?? false,
                isParagraph: ctx.editor.isActive('paragraph') ?? false,
                isHeading1: ctx.editor.isActive('heading', { level: 1 }) ?? false,
                isHeading2: ctx.editor.isActive('heading', { level: 2 }) ?? false,
                isHeading3: ctx.editor.isActive('heading', { level: 3 }) ?? false,
                isHeading4: ctx.editor.isActive('heading', { level: 4 }) ?? false,
                isHeading5: ctx.editor.isActive('heading', { level: 5 }) ?? false,
                isHeading6: ctx.editor.isActive('heading', { level: 6 }) ?? false,
                isBulletList: ctx.editor.isActive('bulletList') ?? false,
                isOrderedList: ctx.editor.isActive('orderedList') ?? false,
                isCodeBlock: ctx.editor.isActive('codeBlock') ?? false,
                isBlockquote: ctx.editor.isActive('blockquote') ?? false,
                canUndo: ctx.editor.can().chain().undo().run() ?? false,
                canRedo: ctx.editor.can().chain().redo().run() ?? false,
            }
        },
    })

    return (
        <div className="control-group">
            <div className="button-group">
                <button
                    onClick={() => editor.chain().focus().toggleBold().run()}
                    disabled={!editorState.canBold}
                    className={`btn-body btn-small ${editorState.isBold ? 'is-active' : ''}`}
                >
                    Bold
                </button>
                <button
                    onClick={() => editor.chain().focus().toggleItalic().run()}
                    disabled={!editorState.canItalic}
                    className={`btn-body btn-small ${editorState.isBold ? 'is-active' : ''}`}
                >
                    Italic
                </button>
                <button
                    onClick={() => editor.chain().focus().toggleStrike().run()}
                    disabled={!editorState.canStrike}
                    className={`btn-body btn-small ${editorState.isBold ? 'is-active' : ''}`}
                >
                    Strike
                </button>
                <button
                    onClick={() => editor.chain().focus().toggleCode().run()}
                    disabled={!editorState.canCode}
                    className={`btn-body btn-small ${editorState.isBold ? 'is-active' : ''}`}
                >
                    Code
                </button>
                <button onClick={() => editor.chain().focus().unsetAllMarks().run()}>Clear marks</button>
                <button onClick={() => editor.chain().focus().clearNodes().run()}>Clear nodes</button>
                <button
                    onClick={() => editor.chain().focus().setParagraph().run()}
                    className={`btn-body btn-small ${editorState.isBold ? 'is-active' : ''}`}
                >
                    Paragraph
                </button>
                <button
                    onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
                    className={`btn-body btn-small ${editorState.isBold ? 'is-active' : ''}`}
                >
                    H1
                </button>
                <button
                    onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
                    className={`btn-body btn-small ${editorState.isBold ? 'is-active' : ''}`}
                >
                    H2
                </button>
                <button
                    onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
                    className={`btn-body btn-small ${editorState.isBold ? 'is-active' : ''}`}
                >
                    H3
                </button>
                <button
                    onClick={() => editor.chain().focus().toggleHeading({ level: 4 }).run()}
                    className={`btn-body btn-small ${editorState.isBold ? 'is-active' : ''}`}
                >
                    H4
                </button>
                <button
                    onClick={() => editor.chain().focus().toggleHeading({ level: 5 }).run()}
                    className={`btn-body btn-small ${editorState.isBold ? 'is-active' : ''}`}
                >
                    H5
                </button>
                <button
                    onClick={() => editor.chain().focus().toggleHeading({ level: 6 }).run()}
                    className={`btn-body btn-small ${editorState.isBold ? 'is-active' : ''}`}
                >
                    H6
                </button>
                <button
                    onClick={() => editor.chain().focus().toggleBulletList().run()}
                    className={`btn-body btn-small ${editorState.isBold ? 'is-active' : ''}`}
                >
                    Bullet list
                </button>
                <button
                    onClick={() => editor.chain().focus().toggleOrderedList().run()}
                    className={`btn-body btn-small ${editorState.isBold ? 'is-active' : ''}`}
                >
                    Ordered list
                </button>
                <button
                    onClick={() => editor.chain().focus().toggleCodeBlock().run()}
                    className={`btn-body btn-small ${editorState.isBold ? 'is-active' : ''}`}
                >
                    Code block
                </button>
                <button
                    onClick={() => editor.chain().focus().toggleBlockquote().run()}
                    className={`btn-body btn-small ${editorState.isBold ? 'is-active' : ''}`}
                >
                    Blockquote
                </button>
                <button
                    className={`btn-body btn-small`}
                    onClick={() => editor.chain().focus().setHorizontalRule().run()}>Horizontal rule</button>
                <button
                    className={`btn-body btn-small`}
                    onClick={() => editor.chain().focus().setHardBreak().run()}>Hard break</button>
                <button
                    className={`btn-body btn-small`}
                    onClick={() => editor.chain().focus().undo().run()} disabled={!editorState.canUndo}>
                    Undo
                </button>
                <button
                    className={`btn-body btn-small`}
                    onClick={() => editor.chain().focus().redo().run()} disabled={!editorState.canRedo}>
                    Redo
                </button>
                <p style={{width: '100%'}}>Alignment:</p>
                <div className="button-group">

                    <button
                        className={`btn-body btn-small`}
                        onClick={() => editor.chain().focus().setTextAlign('left').run()}>
                        Align Left
                    </button>
                    <button
                        className={`btn-body btn-small`}
                        onClick={() => editor.chain().focus().setTextAlign('center').run()}>
                        Align Center
                    </button>
                    <button
                        className={`btn-body btn-small`}
                        onClick={() => editor.chain().focus().setTextAlign('right').run()}>
                        Align Right
                    </button>
                    <button
                        className={`btn-body btn-small`}
                        onClick={() => editor.chain().focus().setTextAlign('justify').run()}>
                        Justify
                    </button>
                </div>
            </div>
        </div>
    )
}


// function MenuBar({ editor }) {
//     if (!editor) {
//         return null;
//     }
//
//     return (
//         <div className="menu-bar">
//             <button
//                 onClick={() => editor.chain().focus().toggleBold().run()}
//                 className={editor.isActive('bold') ? 'is-active' : ''}
//             >
//                 Bold
//             </button>
//             <button
//                 onClick={() => editor.chain().focus().toggleItalic().run()}
//                 className={editor.isActive('italic') ? 'is-active' : ''}
//             >
//                 Italic
//             </button>
//             <button
//                 onClick={() => editor.chain().focus().toggleBulletList().run()}
//                 className={editor.isActive('bulletList') ? 'is-active' : ''}
//             >
//                 Bullet List
//             </button>
//             {/* Додай ще кнопки за потребою */}
//         </div>
//     );
// }
