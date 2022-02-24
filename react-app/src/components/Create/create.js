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

    useEffect(() => {
        dispatch(getCategories());
    }, [dispatch])

    const handleSubmit = async (e) => {
        e.preventDefault();
        let newThread = { userId, title, description, categoryId, content }
        // if (title && (title.length > 50)) errors.push("Project title limited to 50 characters.");

        // if (errors.length === 0) {
        const data = await dispatch(postThread(newThread))
        if (data && data.errors) {
            setErrors(data.errors)
            return
        } 
        // }
        setCreateStatus(false)
    }

    // const titleValidation = (e) => {
    //     (e.target.value.length > 50) ? setErrors("Title must be no greater than 50 characters") : setErrors([]);
    // }

    return (
        <>
            <button className='threadcreatebtn' hidden={createStatus} onClick={() => setCreateStatus(true)}>Create new thread</button>
            {createStatus &&
            <div className='threadform-container'>
                <div className="errors-container">
                    {(errors.length > 0) && errors?.map((err, i) => {
                        return <p key={i} className='anerror' >{err}</p>
                    })}
                </div>
                <form id='threadform' action='/' onSubmit={handleSubmit}>
                    <input type="hidden" name="csrf_token" value={Cookies.get('XSRF-TOKEN')} />
                    <label htmlFor='category'>Choose a Category: </label>
                    <select name='category' value={categoryId} id='category' form='thread' onChange={(e) => setCategoryId(e.target.value)}>
                        <option value={1}>Basketball</option>
                        <option value={2}>Football</option>                        
                    </select>
                    <label htmlFor='title'>Title: </label>
                    <input type='text' value={title} onChange={(e) => setTitle(e.target.value)} id='title' placeholder='thread title...' required></input>
                    <label htmlFor='description'>Description: </label>
                    <textarea type='text' id='description' value={description} onChange={(e) => setDescription(e.target.value)} placeholder='thread description (optional)'></textarea>
                    <label htmlFor='content'>Content: </label>
                    <textarea type='text' id='content' value={content} onChange={(e) => setContent(e.target.value)} placeholder='thread content'></textarea>
                    <div>
                        <button type="submit">Submit New Thread</button>
                        <button onClick={() => setCreateStatus(false)}>Cancel</button>
                    </div>
                </form>
            </div>
            }
        </>
    )
}

export default Create