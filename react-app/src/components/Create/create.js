import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Cookies from "js-cookie";
import { getCategories } from '../../store/categories';
import { postThread } from '../../store/threads';
import './create.css';

const Create = () => {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.session?.user)
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

        // why does await allow me to render my errors 
        const data = await dispatch(postThread(newThread))
        if (data && data.errors) {
            setErrors(data.errors)
            return
        } 
        setCreateStatus(false)
    }

    const handleCancel = () => {
        setCreateStatus(false)
        setErrors([])
    }

    return (
        <>
            <button className='threadcreatebtn' hidden={createStatus} onClick={user ? () => setCreateStatus(true) : () => setErrors(['Please log in to start a thread'])}>Create new thread</button>
            {(errors.length > 0) && errors?.map((err, i) => {
                return <p key={i} className='anerror' >{err}</p>
            })}
            {createStatus &&
            <div className='threadform-container'>
                <div className="errors-container">
                </div>
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
                    <textarea type='text' id='content' value={content} onChange={(e) => setContent(e.target.value)} placeholder='thread content' required></textarea>
                    <div>
                        <button type="submit">Submit New Thread</button>
                        <button onClick={() => handleCancel()}>Cancel</button>
                    </div>
                </form>
            </div>
            }
        </>
    )
}

export default Create