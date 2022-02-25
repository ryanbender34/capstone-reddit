import './aboutme.css';
import { NavLink } from 'react-router-dom';

const About = () => { 
    return (
        <div className="about-me-container">
                <h1 className="about-me-header">Hello!</h1>
                <h2 classNAme='about-me-title'>About</h2>
                <p className='about-me-text'>Scouttit is a reddit inspired website where users can create threads to start discussions about amateur prospects in various sports.</p>
                <br />
                <div className='dev-info'> 
                <p className='dev-info-header'>Developer Info:</p>
                <NavLink to='/aboutme' className='about-me-dev-link'>About Me</NavLink>
                <a className='about-me-dev-link' href='https://github.com/ryanbender34/scouttit'>
                    <i class="fa fa-github"></i>
                </a>
                <a className='about-me-dev-link' href='https://www.linkedin.com/in/ryan-bender-0b5b16127/'>
                    <i className='fa fa-linkedin' />
                </a>
                </div>
         </div>
    )
}

export default About;