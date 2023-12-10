import React, { useEffect } from 'react'
import "./Page2.css"
import Lenis from '@studio-freight/lenis'
import { gsap } from 'gsap'
import { ScrollTrigger, CustomEase, Power3 } from 'gsap/all'
import WhatWeDoTemplate from './WhatWeDoTemplate'

gsap.registerPlugin(ScrollTrigger)

const whatWeDo = [
  {
    hd: "Smart Contract Solutions",
    desc: "Revolutionize your agreements with smart contracts. These self-executing contracts automate processes, ensuring that agreed-upon terms are executed without intermediaries. Say goodbye to delays and disputes, and welcome a new era of trust."
  },
  {
    hd: "Decentralized Security",
    desc: "Traditional systems are vulnerable to centralized attacks. We mitigate this risk by leveraging the decentralized nature of blockchain. Your data is stored across a network of nodes, eliminating the risk of a single point of failure."
  },
  {
    hd: "Immutable Record-Keeping",
    desc: "Transparency is at the core of our platform. Every contract and transaction is recorded on the blockchain, creating an immutable and time-stamped record. This ensures that your agreements are tamper-proof and easily verifiable."
  }
  ,
  {
    hd: "User-Friendly Interface",
    desc: "Blockchain can be complex, but using it shouldn't be. Our user-friendly interface makes creating, managing, and signing contracts a seamless experience. Whether you're a blockchain expert or a first-time user, our platform is designed for you."
  },
  {
    hd: "Wide Range of Use Cases",
    desc: "From freelancers seeking secure payment agreements to businesses executing complex supply chain contracts, [Your Platform Name] is versatile. Our platform accommodates various industries, providing tailored solutions for your unique needs."
  }


]


const Page2 = () => {

  useEffect(() => {


    // gsap.to(".allContentsPage2Home", {
    //   x:500,
    //   scrollTrigger: {
    //     trigger: "#page2Home",
    //     start: "15% center",
    //     end: "bottom center",
    //     scrub:true,
    //     pin: true,
    //   }
    // })
    
    gsap.to(".headingWWD", {
      rotateX:0,
      rotateY:0,
      rotateZ:0,
      opacity:1,
      stagger:0.01,
      duration:0.04,
      scrollTrigger: {
            trigger: "#page2Home",
            start: "-30% center",
            end: "bottom center",
            scrub:true,
          }
    })

    const lenis = new Lenis()

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {

    }
  }, [])

  return (
    <div id='page2Home'>
        <div id="page2HomeDiv">
          <div id="page2heading">
            <h1>We can we do</h1>
          </div>
              <div className="allContentsPage2Home">
                  {/* {whatWeDo.map((i, index) => {
                      return <WhatWeDoTemplate hd={i.hd} desc={i.desc} key={index} />
                    })} */}

                    <div className='completeWWDTemp'>
                      <div className="headingWWD"><h2>Smart Contract Solutions</h2></div>
                    </div>
                    <div className='completeWWDTemp'>
                      <div className="headingWWD"><h2>Decentralized Security</h2></div>
                    </div>
                    
                  <div className='completeWWDTemp'>
                    <div className="headingWWD"><h2>Immutable Record-Keeping</h2></div>
                  </div>
                  
                  <div className='completeWWDTemp'>
                    <div className="headingWWD"><h2>User-Friendly Interface</h2></div>
                  </div>
                  
                  <div className='completeWWDTemp'>
                    <div className="headingWWD"><h2>Wide Range of Use Cases</h2></div>
                  </div>
                  
                </div>




        </div>
        


    </div >
  )
}

export default Page2