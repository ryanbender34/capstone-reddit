import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Cookies from "js-cookie";
import { getCategories } from '../../store/categories';
import { postThread } from '../../store/threads';
import { Editor } from 'react-draft-wysiwyg';
import { EditorState, convertFromRaw, convertToRaw } from 'draft-js';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import './createrich.css';
import CreateModal from '../CreateModal/createmodal';
import useModal from '../useModal/useModal';

const CreateRich = () => {
    const dispatch = useDispatch();
    const {isShowing, toggle} = useModal();
    const user = useSelector((state) => state.session?.user)
    const [createStatus, setCreateStatus] = useState(false)
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
        console.log(content, convertedContent, 'need these to match i think')
        let newThread = { userId, title, description, categoryId, convertedContent }

        // why does await allow me to render my errors 
        const data = await dispatch(postThread(newThread))
        if (data && data.errors) {
            setErrors(data.errors)
            return
        } 
        setCreateStatus(false)
    }

    const onChange = async (state) => {
        setEditorState(editorState);
        // const data = convertToRaw(editorState.getCurrentContent());
        };

    const handleCancel = () => {
        setCreateStatus(false)
        setErrors([])
    }

    // todo - make this a link
    // const loginLink = <NavLink href='/login' exact={true} > Login </NavLink>

    return (
        <>
            <button className='threadcreatebtn' hidden={createStatus} onClick={user ? toggle : () => setErrors([`Please login to start a thread`])}>Create new thread</button>
            {(errors.length > 0) && errors?.map((err, i) => {
                return <p key={i} className='anerror' >{err}</p>
            })}
            <CreateModal isShowing={isShowing} hide={toggle} />
        </>
    )
}

export default CreateRich