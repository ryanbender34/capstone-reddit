import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getCategories, selectCategory } from '../../store/categories';
import { getThreads } from '../../store/threads';
// import ProjectCard from '../ProjectCard/ProjectCard';
import './category.css';

const CategoryPage = () => {
	const { catName } = useParams();
	const dispatch = useDispatch();

	useEffect(() => {
        dispatch(selectCategory(catName));
	}, [dispatch]);

	const activeCat = useSelector(state => {
		return state.categories.active
	});

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
            <div className='thread-container'>
                {curThreadsArr?.map((thread, index) => {
                    return (
                        <div key={`thread-${index}`} className='thread'>
                            <h1 className='category-header-text'>Now Viewing the {thread.title} Card</h1>
                            <p>{thread.content}</p>
                        </div>
                    )
                })}
            </div >
        </>
	)
};

export default CategoryPage;