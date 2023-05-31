import React from 'react'
import "./Hero.css"
import { HiLocationMarker } from "react-icons/hi"
import CountUp from "react-countup"

const Hero = () => {
    return (
        <>
            <section className="hero-wrapper">
                <div className="flexCenter paddings innerWidth hero-container">
                    {/** Left Side */}
                    <div className="flexColStart hero-left">
                        <div className="hero-title">
                            <div className="blue-circle" />
                            <h1>
                                Explore <br /> Your Dream<br /> Property
                            </h1>
                        </div>
                        <div className="flexColStart hero-des">
                            <span className='secondaryTextSpan'>Your Gateway to Extraordinary Living</span>
                            <span className='secondaryTextSpan'>Discover Unparalleled Properties that Define Luxury</span>
                        </div>
                        <div className="flexCenter search-bar">
                            <HiLocationMarker color="var(--blue)" size={25} />
                            <input type="text" />
                            <button className='button'>Search</button>
                        </div>
                        <div className="flexCenter stats">
                            <div className="flexColCenter stat">
                                <span><CountUp start={8800} end={9000} duration={4} />
                                    <span>+</span>
                                </span>
                                <span className='secondaryTextNumbers'>Exceptional Quality</span>
                            </div>
                            <div className="flexColCenter  stat">
                                <span><CountUp start={1950} end={2000} duration={4} />
                                    <span>+</span>
                                </span>
                                <span className='secondaryTextNumbers'>Satisfied Clients</span>
                            </div>
                            <div className="flexColCenter  stat">
                                <span><CountUp end={28} />
                                    <span>+</span>
                                </span>
                                <span className='secondaryTextNumbers'>Industry Recognition</span>
                            </div>
                        </div>
                    </div>
                    {/** Right Side */}
                    <div className="flexCenter hero-right">
                        <div className="image-container">
                            <img src='./hero-image.png' alt='Hero Section Image' />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Hero