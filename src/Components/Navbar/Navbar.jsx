import React from 'react'
import "./Navbar.css"
import { gsap } from 'gsap'
import { useLayoutEffect, useEffect, useRef, useState } from 'react'
import { ScrollTrigger, CustomEase, Power3 } from 'gsap/all'
gsap.registerPlugin(ScrollTrigger)
gsap.registerPlugin(CustomEase);

const Navbar = (ref) => {

    const navTarget1 = useRef(null);
    const navTarget2 = useRef(null);
    const navTarget3 = useRef(null);

    const onMidHover = (nt) => {
      
        // if (ref.current) {
        gsap.to(nt.current, {

            width: "100%",
            duration:0.2
        })
    // }
    }
    const onMidOut = (nt)=>{
        gsap.to(nt.current, {
            width:"0",
            duration:0.2,
        })
    }

    return (
        <div id='navbar'>

            <nav id="leftNav">
                <ul>
                    <li>Logo</li>
                </ul>
            </nav>

            <nav id='middleNav'>
                <ul>
                    <li onMouseOver={() => onMidHover(navTarget1)} onMouseOut={() => onMidOut(navTarget1)}>
                        <div className="navText">Home</div>
                        <div ref={navTarget1} className="navBefore"></div>
                    </li>

                    <li onMouseOver={() => onMidHover(navTarget2)} onMouseOut={() => onMidOut(navTarget2)}>
                        <div className="navText">Why Choose Us</div>
                        <div ref={navTarget2} className="navBefore"></div>
                    </li>

                    <li onMouseOver={() => onMidHover(navTarget3)} id='contactingDiv' onMouseOut={() => onMidOut(navTarget3)}>
                        <div className="navText" >Contract <i class="fa-solid fa-plus"></i></div>
                        <div ref={navTarget3} className="navBefore"></div>
                    </li>



                </ul>
            </nav>

            <nav id="rightNav">
                <ul id='rightNavLeftUl'>
                    <li>Connect wallet <i class="fa-solid fa-caret-down"></i></li>
                </ul>
                <ul id='rightNavRightUl'>
                    <li id='navRightJoin'>Join Server</li>
                    <li>Sign in</li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar