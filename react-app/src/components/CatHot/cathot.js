import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useLocation } from 'react-router-dom';
import { selectCategory } from '../../store/categories';
import catConverter from '../../utils';
import ThreadCard from '../ThreadCard/threadcard';
import './cathot.css';
import CategoryFilter from '../CategoryFilter/catfilter';
import { getThreads } from '../../store/threads';

const CatHot = () => {
    const {categoryId} = useParams()
	const catId = parseInt(categoryId, 10)
	const dispatch = useDispatch();
    const location = useLocation();

	useEffect(() => {
        dispatch(selectCategory(catId));
        dispatch(getThreads())
        // dispatch(getCatThreads(catId))
	}, [dispatch, location]);

    // const curThreadsArr = useSelector(state => {
    //     return state.categories.active?.threads
    // })

    const allThreads = useSelector(state => {return state.threads})
    const allThreadsArr = Object.values(allThreads)

    const curThreadsArr = allThreadsArr.filter(thread => thread.categoryId === catId)

    curThreadsArr.sort(function (a, b) {
        return b.comments.length - a.comments.length
    })

    // sort by hot



        return (
            <>
                <div className='categoriespage-container'>
                    <h1 className="cat-header">s/{catConverter(catId)}</h1>
                    <CategoryFilter />
                    {curThreadsArr?.map((thread, index) => {
                        return (
                            <ThreadCard key ={thread.id} thread={thread}> </ThreadCard>
                        )
                    })}
                </div >
            </>
        )

};

export default CatHot;