import { Link, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ThreadCard = ({ thread }) => {
    const cat = useSelector(state => {
        return state.categories.active.name
    })
	return (
        <>
            <Link className="thread-row" to={`${cat}/${thread.id}`}>
                <h3 className='thread-header-text'> {thread.title}</h3>
                <p className='thread-body-text'>{thread.content}</p>
            </Link>
        </>
	)
}

export default ThreadCard