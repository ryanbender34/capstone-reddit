import './about.css';

const About = () => { 
    return (
        <div className="about-container">
                <h1>Welcome to Scouttit!</h1>
                <h2>About</h2>
                <p>Scouttit is a reddit inspired website where users can create threads to start discussions about amateur prospects in various sports.</p>
                <br />
                <div> Developer Info:
                <a className='about-link' href='https://github.com/ryanbender34/scouttit'>Github Link</a>
                <a className='about-link' href='https://www.linkedin.com/in/ryan-bender-0b5b16127/'>LinkedIn Link</a>
                </div>
         </div>
    )
}

export default About;