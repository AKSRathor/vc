import React, { useEffect, useState } from 'react'
import "./Page3.css"
import { gsap } from 'gsap'
import { ScrollTrigger, CustomEase, Power3 } from 'gsap/all'
gsap.registerPlugin(ScrollTrigger)
import SplitType from 'split-type'


const Page3 = () => {

    const [secondAnimationTriggered, setSecondAnimationTriggered] = useState(false);

    useEffect(() => {
        const firstAnimation = gsap.to(".headPlaceh1", {
            y: 0,
            opacity: 1,
            stagger: 1,
            duration: 1,
            ease: 'power4.out',
            scrollTrigger: {
                trigger: "#page3Home",
                toggleActions: "restart reverse restart none",
                scrub: true,
                pin: true,
            },
        });

        const secondAnimation = firstAnimation.eventCallback("onComplete", () => {
            // if (!secondAnimationTriggered) {
                gsap.to("#headPlaceAllContainpg3", {
                    scale: 80,
                    x: "200%",
                    y: "40%",
                    scrollTrigger: {
                        trigger: "#page3Home",
                        scrub: true,
                        pin: true,
                    },
                });
                setSecondAnimationTriggered(true);
            // }
        });

        secondAnimation.eventCallback("onComplete", () => {
            gsap.to("#headPlaceAllContainpg3", {
              opacity: 0,
            });
          });
        

        gsap.to("#canvas-div", {
            opacity:0,
            scrollTrigger: {
                trigger: "#page3Home",
                scrub: true
            },
        });

       
        return () => {

            // firstAnimation.kill();
            //   secondAnimation.kill();

        }
    }, [])

    return (
        <div id='page3Home'>

        </div>
    )
}

export default Page3