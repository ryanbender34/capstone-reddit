import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useLocation } from 'react-router-dom';
import { selectCategory } from '../../store/categories';
import { getThreads } from '../../store/threads';
import catConverter from '../../utils';
import ThreadCard from '../ThreadCard/threadcard';
import FourOhFour from '../FourOhFour/fourohfour';
import './category.css';

const CategoryPage = () => {
    const {categoryId} = useParams()
	const catId = parseInt(categoryId, 10)
	const dispatch = useDispatch();
    const location = useLocation();

	useEffect(() => {
        dispatch(selectCategory(catId));
	}, [dispatch, location]);

    const curThreadsArr = useSelector(state => {
        return state.categories.active?.threads
    })

        return (
            <>
                <div className='categoriespage-container'>
                    <h1 className="cat-header">s/{catConverter(catId)}</h1>
                    {curThreadsArr?.map((thread, index) => {
                        return (
                            <ThreadCard key ={thread.id} thread={thread}> </ThreadCard>
                        )
                    })}
                </div >
            </>
        )

};

export default CategoryPage;