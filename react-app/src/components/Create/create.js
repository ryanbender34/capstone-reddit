import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Cookies from "js-cookie";
import { getCategories } from '../../store/categories';

const Create = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCategories());
    }, [dispatch])

    const categories = useSelector(state => {
        return state.categories
    })

    console.log(categories, 'here should be our array of categories')

    return (
        <>
            <form id='thread' action='/'>
                <input type="hidden" name="csrf_token" value={Cookies.get('XSRF-TOKEN')} />
                <label for='category'>Choose a Category: </label>
                <select name='category' id='category' form='thread'></select>
                    {/* map through categories */}
                    {/* {categories.map(category => {
                        <option value={category.name}>{category.name}</option>
                    })} */}
                    <option value='basketball'>Basketball</option>
                <label for='title'>Title: </label>
                <input type='text' id='title' placeHolder='thread title...' required></input>
                <label for='description'>Description: </label>
                <input type='text' id='description' placeHolder='thread description (optional)'></input>
            </form>
        </>
    )
}

export default Create