import { Link } from 'react-router-dom';
import './threadcard.css';

const ThreadCard = ({ thread }) => {
	return (
		<div className='thread'>
            <h1 className='category-header-text'>Now Viewing the {thread.title} Card</h1>
            <p>{thread.content}</p>
         </div>
	)
}

export default ThreadCard