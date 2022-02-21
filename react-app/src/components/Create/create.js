import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Cookies from "js-cookie";
import { getCategories } from '../../store/categories';
import { postThread } from '../../store/threads';
import './create.css';

const Create = () => {
    const dispatch = useDispatch();
    const [createStatus, setCreateStatus] = useState(false)
    const userId = useSelector(state => state.session.user?.id)
    const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
    const [content, setContent] = useState('');
    const [categoryId, setCategoryId] = useState(1);
    const [errors, setErrors] = useState([]); // TODO: #85 find a solution for project and step errors on publish page
    const updateTitle = (e) => setTitle(e.target.value);
	const updateDescription = (e) => setDescription(e.target.value);
    const updateContent = (e) => setContent(e.target.value);
    const updateCategoryId = (e) => setCategoryId(e.target.value);

    useEffect(() => {
        dispatch(getCategories());
    }, [dispatch])

    const handleSubmit = (e) => {
        e.preventDefault();
        let newThread = { userId, title, description, categoryId, content }
        dispatch(postThread(newThread))
        setCreateStatus(false)
    }

    return (
        <>
            <button onClick={() => setCreateStatus(true)}>Create new thread</button>
            {createStatus &&
                <form id='threadform' action='/' onSubmit={handleSubmit}>
                    <input type="hidden" name="csrf_token" value={Cookies.get('XSRF-TOKEN')} />
                    <label htmlFor='category'>Choose a Category: </label>
                    <select name='category' id='category' form='thread' onBlur={updateCategoryId}>
                        <option value={1}>Basketball</option>
                        <option value={2}>Football</option>                        
                    </select>
                    <label htmlFor='title'>Title: </label>
                    <input type='text' onKeyUp={updateTitle} id='title' placeholder='thread title...' required></input>
                    <label htmlFor='description'>Description: </label>
                    <textarea type='text' id='description' onKeyUp={updateDescription} placeholder='thread description (optional)'></textarea>
                    <label htmlFor='content'>Content: </label>
                    <textarea type='text' id='content' onKeyUp={updateContent} placeholder='thread content'></textarea>
                    <button type="submit">Submit New Thread</button>
                </form>
            }
        </>
    )
}

export default Create