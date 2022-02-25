import './about.css';
import { NavLink } from 'react-router-dom';

const About = () => { 
    return (
        <div className="about-container">
                <h1 className="about-header">Welcome to Scouttit!</h1>
                <h2 className='about-title'>About</h2>
                <p className='about-text'>Scouttit is a reddit inspired website where users can create threads to start discussions about amateur prospects in various sports. About it is deployed to heroku where users can interact with the site. Currently users can create threads, comment, and reply on threads. In the future, Scouttit will add the ability to vote on threads, search for threads, and show more information to the users to gauge thraed activity levels.</p>
                <br />
                <div className='dev-info'> 
                <div className='dev-info-container'></div>
                {/* <NavLink to='/aboutme' className='about-dev-link'>About Me</NavLink> */}
                <a className='about-dev-link' href='https://github.com/ryanbender34/scouttit'>
                    <span className='dev-link-text'>Github <i className='arrow right'></i></span><i className="fa fa-github"></i>
                </a>
                <a className='about-dev-link' href='https://www.linkedin.com/in/ryan-bender-0b5b16127/'>
                    <span className='dev-link-text'>LinkedIn <i className='arrow right'></i></span><i className='fa fa-linkedin' />
                </a>
                </div>
         </div>
    )
}

export default About;