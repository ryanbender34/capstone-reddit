import './about.css';
import { NavLink } from 'react-router-dom';

const About = () => { 
    return (
        <div className="about-container">
                <h1 className="about-header">Welcome to Scouttit!</h1>
                <h2 classNAme='about-title'>About</h2>
                <p className='about-text'>Scouttit is a reddit inspired website where users can create threads to start discussions about amateur prospects in various sports.</p>
                <br />
                <div className='dev-info'> 
                <p className='dev-info-header'>Developer Info:</p>
                <NavLink to='/aboutme' className='about-dev-link'>About Me</NavLink>
                <a className='about-dev-link' href='https://github.com/ryanbender34/scouttit'>
                    <i class="fa fa-github"></i>
                </a>
                <a className='about-dev-link' href='https://www.linkedin.com/in/ryan-bender-0b5b16127/'>
                    <i className='fa fa-linkedin' />
                </a>
                </div>
         </div>
    )
}

export default About;