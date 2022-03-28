import './welcome.css';
import Create from '../Create/create';

const Welcome = () => { 
    return (
        <div className="welcome-container">
                <h1 className="welcome-header">Welcome to Scouttit!</h1>
                <h2 className='welcome-title'>New Here? </h2>
                <p className='welcome-text'>Scouttit is a reddit inspired website where users can create threads to start discussions about amateur prospects in various sports. Scout it is deployed to heroku where users can interact with the site. Currently users can create threads, comment, reply, vote, filter, filter by category, and search for threads. </p>
                <br />
                <div className='dev-info'> 
                <div className='dev-info-container'></div>
                {/* <NavLink to='/welcomeme' className='welcome-dev-link'>Welcome Me</NavLink> */}
                <p className='welcome-text'>Get started by creating your first thread below! </p>
                <br />
                <Create />
                <br />
                <br />
                </div>
         </div>
    )
}

export default Welcome;