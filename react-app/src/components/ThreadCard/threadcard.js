import { Link } from 'react-router-dom';
import catConverter from '../../utils';
import './threadcard.css';

const ThreadCard = ({ thread }) => {
    const dateConverter = (comment) => {
		const currentDate = new Date();
		const commentDate = Date.parse(comment)
		let seconds = ((currentDate - (commentDate + 21599000)) / 1000)

		var d = Math.floor(seconds / (3600 * 24));
		var h = Math.floor(seconds % (3600 * 24) / 3600);
		var m = Math.floor(seconds % 3600 / 60);
		var s = Math.floor(seconds % 60);

		var dDisplay = d > 0 ? d + (d === 1 ? " day " : " days ") : "";
		var hDisplay = ((h > 0) && (d === 0)) ? h + (h === 1 ? " hour " : " hours ") : "";
		var mDisplay = ((m > 0) && (h === 0)) ? m + (m === 1 ? " minute " : " minutes ") : "";
		var sDisplay = ((s > 0) && ((m === 0))) ? s + (s === 1 ? " second" : " seconds") : "";
		return dDisplay + hDisplay + mDisplay + sDisplay;

	}
	return (
        <>
            <Link className="thread-row" to={`${catConverter(thread.categoryId)}/${thread.id}`}>
                <div className='thread-column-1'>
                    Vote
                </div>
                <div className='thread-column-2'>
                    <p className='thread-topline'>Posted by {thread.username} {dateConverter(thread.updatedAt)} ago</p>
                    <h3 className='thread-header-text'> {thread.title}</h3>
                    <p className='thread-body-text'>{thread.content}</p>
                </div>
            </Link>
        </>
	)
}

export default ThreadCard