import React, { useState } from 'react';
import { Editor } from 'react-draft-wysiwyg';
import { EditorState, convertFromRaw, convertToRaw } from 'draft-js';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

const RichText = () => {
    const [editorState, setEditorState] = useState(() => EditorState.createEmpty());

    const updateTextDescription = async (state) => {
        await setEditorState(state);
        const data = convertToRaw(editorState.getCurrentContent());
        };

    return (
        <Editor
            editorState={editorState}
            toolbarClassName="toolbarClassName"
            wrapperClassName="wrapperClassName"
            editorClassName="editorClassName"
            onEditorStateChange={updateTextDescription}
        />

    )
}

export default RichText;

