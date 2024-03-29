import React from 'react'
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import './Hero.css'



const Hero = () => {
    return (
<>        

        <div className='hero'>


            <div className="hero-container">

                <div className="content">
                        <h1 className="animate-charcter">Auburn Rehab</h1>
                    <Fade left>
                        <h2 className='subtitle'>Substance Abuse Addiction and Mental Health Treatment Facility</h2>
                    </Fade>
                        <br />
                        <div className='hero-btn'>
                        <Link to="/contact">
                        <button>Contact Us</button>
                    </Link>
                    </div>
                    <br />
                    <Fade bottom>
                        <p>Find your happiness and learn to put it first.</p>
                    </Fade>
                </div>
            </div>
        </div>


</>

    )
}

export default Hero