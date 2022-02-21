import { Link } from 'react-router-dom';
import catConverter from '../../utils';

const ThreadCard = ({ thread }) => {
	return (
        <>
            <Link className="thread-row" to={`${catConverter(thread.id)}/${thread.id}`}>
                <h3 className='thread-header-text'> {thread.title}</h3>
                <p className='thread-body-text'>{thread.content}</p>
            </Link>
        </>
	)
}

export default ThreadCard