import React from 'react';

const ThreadModal = () => {
    return (
        <div className='modal-background'>
            <div className='modal-container'>
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
        </div>
    )
}