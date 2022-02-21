import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useLocation } from 'react-router-dom';
import { selectCategory } from '../../store/categories';
import { getThreads } from '../../store/threads';
import ThreadCard from '../ThreadCard/threadcard';
import './category.css';

const CategoryPage = () => {
	const {category} = useParams();
	const dispatch = useDispatch();
    const location = useLocation();

	useEffect(() => {
        dispatch(selectCategory(category));
        dispatch(getThreads());
	}, [dispatch, location]);

    const curThreadsArr = useSelector(state => {
        return state.categories.active?.threads
    })

	// const filteredProjects = Object.values(allProjects).filter(project => project.categoryId.toString() === categoryId);
	// const projectsArr = Object.values(filteredProjects);

	// const allCategories = useSelector(state => {
	// 	return state.categories
	// });
	// const selectedCategory = Object.values(allCategories).filter(category => category.id.toString() === categoryId);
	// const categoryArr = Object.values(selectedCategory);

	return (
        <>
            <div className='categoriespage-container'>
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