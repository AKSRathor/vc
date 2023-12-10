import React, { useEffect } from 'react'
import "./Hero.css"
import ParticlesObj from './Particles'
import { gsap } from 'gsap'
import { ScrollTrigger, CustomEase, Power3 } from 'gsap/all'
gsap.registerPlugin(ScrollTrigger)

const Hero = () => {

    useEffect(() => {

        gsap.to("#backgroundDarkpositioner", {
            opacity: "1",
            display: "block",
            backdropFilter: "blur(10px)",
            scrollTrigger: {
                trigger: "#page2Home",
                start: "-60% center",
                end: "bottom center",

                scrub: true,
            }
        })
        





        return () => {

        }
    }, [])

    return (
        <div id='homePageHero'>
            <div id="backgroundDarkpositioner">
                <div id="headPlace">
                    <div id="headPlaceAllContainpg3">


                        <span className='headPlaceh1'>P</span><span className='headPlaceh1'>l</span><span className='headPlaceh1'>a</span><span className='headPlaceh1'>c</span><span className='headPlaceh1'>e</span><span className='headPlaceh1'> </span><span className='headPlaceh1'>W</span><span className='headPlaceh1'>h</span><span className='headPlaceh1'>e</span><span className='headPlaceh1'>r</span><span className='headPlaceh1'>e</span><span className='headPlaceh1'> </span><span className='headPlaceh1'>B</span><span className='headPlaceh1'>l</span><span className='headPlaceh1'>o</span><span className='headPlaceh1'>c</span><span className='headPlaceh1'>k</span><span className='headPlaceh1'>s</span><span className='headPlaceh1'> </span><span className='headPlaceh1'>a</span><span className='headPlaceh1'>r</span><span className='headPlaceh1'>e</span><span className='headPlaceh1'> </span><span className='headPlaceh1'>R</span><span className='headPlaceh1'>e</span><span className='headPlaceh1'>i</span><span className='headPlaceh1'>n</span><span className='headPlaceh1'>i</span><span className='headPlaceh1'>t</span><span className='headPlaceh1'>i</span><span className='headPlaceh1'>a</span><span className='headPlaceh1'>t</span><span className='headPlaceh1'>i</span><span className='headPlaceh1'>n</span><span className='headPlaceh1'>g</span><span className='headPlaceh1'> </span><span className='headPlaceh1'>t</span><span className='headPlaceh1'>h</span><span className='headPlaceh1'>e</span><span className='headPlaceh1'> </span><span className='headPlaceh1'>W</span><span className='headPlaceh1'>o</span><span className='headPlaceh1'>r</span><span className='headPlaceh1'>l</span><span className='headPlaceh1'>d</span>
                    </div>
                </div>
            </div>
            <div id="insideHeroFixed">
                <div id="heroHead">
                    <h1>Unleash the power of blockchain, create, manage and secure</h1>

                </div>
                <div id="heroGSBtn">
                    <button class="cssbuttons-io-button">
                        Get started
                        <div class="icon">
                            <svg
                                height="24"
                                width="24"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M0 0h24v24H0z" fill="none"></path>
                                <path
                                    d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                                    fill="currentColor"
                                ></path>
                            </svg>
                        </div>
                    </button>


                </div>
            </div>
            <ParticlesObj />
        </div>
    )
}

export default Hero