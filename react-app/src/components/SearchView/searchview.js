import { useSelector } from 'react-redux';
import ThreadCard from '../ThreadCard/threadcard';
import './searchview.css'

const SearchView = () => {
	const threads = useSelector(state => {
		return state.search
	});

	const threadsArr = Object.values(threads);

	return (
		<div className='search-page'>
			{threadsArr.length ?
				threadsArr.length > 4 ?
					<div className='search-body'>
						{threadsArr.map(thread => {
							return (
								<ThreadCard thread={thread} key={thread.id} />
							)
						})}
					</div> :
					<div className='search-body-short'>
						{threadsArr.map(thread => {
							return (
								<ThreadCard thread={thread} key={thread.id} />
							)
						})}
					</div> :
				<div className='search-body-none'>
					<h1 className='search-header'>No threads found!</h1>
					<a className='back-to-home-button'
						href='/'>
						Back to Home
					</a>
				</div>
			}
		</div>
	)


};

export default SearchView