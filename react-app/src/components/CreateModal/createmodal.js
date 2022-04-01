import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { useDispatch, useSelector } from 'react-redux';
import Cookies from "js-cookie";
import { getCategories } from '../../store/categories';
import { postThread } from '../../store/threads';
import { Editor } from 'react-draft-wysiwyg';
import { EditorState, convertFromRaw, convertToRaw } from 'draft-js';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import './createmodal.css'

const CreateModal = ({ isShowing, hide }) => {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.session?.user)
    const userId = useSelector(state => state.session.user?.id)
    const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
    const [content, setContent] = useState('');
    const [categoryId, setCategoryId] = useState(1);
    const [errors, setErrors] = useState([]); // TODO: #85 find a solution for project and step errors on publish page

    const [editorState, setEditorState] = useState(() => EditorState.createEmpty());

    const data = convertToRaw(editorState.getCurrentContent());

    console.log(data, editorState, 'does this work')


    useEffect(() => {
        dispatch(getCategories());
    }, [dispatch])

    const handleSubmit = async (e) => {
        e.preventDefault();
        const convertedContent = convertToRaw(editorState.getCurrentContent())
        let newThread = { userId, title, description, categoryId, convertedContent }

        // why does await allow me to render my errors 
        const data = await dispatch(postThread(newThread))
        if (data && data.errors) {
            setErrors(data.errors)
            return
        } else {
            hide()
        }
        
    }

    if (isShowing) {
        return ReactDOM.createPortal(
            <React.Fragment>
              <div className="modal-overlay"/>
              <div className="modal-wrapper" aria-modal aria-hidden tabIndex={-1} role="dialog">
                <div className="modal">
                  <div className="modal-header">
                    <button type="button" className="modal-close-button" data-dismiss="modal" aria-label="Close" onClick={hide}>
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div className='threadform-container'>
                      <form id='threadform' action='/' onSubmit={handleSubmit}>
                             <input type="hidden" name="csrf_token" value={Cookies.get('XSRF-TOKEN')} />
                               <label htmlFor='category'>Choose a Category: </label>
                               <select name='category' value={categoryId} id='category' form='thread' onChange={(e) => setCategoryId(e.target.value)}>
                                   {/* todo - make this a list of all categories */}
                                   <option value={1}>Basketball</option>
                                   <option value={2}>Football</option>   
                                   <option value={3}>Baseball</option>                     
                               </select>
                               <label htmlFor='title'>Title: </label>
                               <input type='text' value={title} onChange={(e) => setTitle(e.target.value)} id='title' placeholder='thread title...' required></input>
                               <label htmlFor='description'>Description: </label>
                               <textarea type='text' id='description' value={description} onChange={(e) => setDescription(e.target.value)} placeholder='thread description (optional)'></textarea>
                               <label htmlFor='content'>Content: </label>
                               <div className='editor-component'>
                                    <Editor 
                                        editorState={editorState}
                                        toolbarClassName="toolbar"
                                        wrapperClassName="wrapper"
                                        editorClassName="editor"
                                        onEditorStateChange={editorState => setEditorState(editorState)}
                                    />    
                                </div>                               <div>
                                   <button type="submit">Submit New Thread</button>
                                   <button onClick={hide}>Cancel</button>
                               </div>
                          </form>
                       </div>
                </div>
              </div>
            </React.Fragment>, document.body
          )
    } else return null;
}

export default CreateModal;



