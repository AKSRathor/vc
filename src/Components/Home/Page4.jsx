import React, { useEffect } from 'react'
import "./Page4Home.css"
import { gsap } from 'gsap'
import { ScrollTrigger, CustomEase, Power3 } from 'gsap/all'
gsap.registerPlugin(ScrollTrigger)


const Page4 = () => {

  useEffect(() => {

    gsap.to("#page4H1", {
      opacity: 1,
      // ease: 'power4.out',
      duration: 1,
      scrollTrigger: {
        trigger: "#page4Home",
        // toggleActions: "restart reverse restart none",
        start: "180% top",
        end: "-180% bottom",
        scrub: true,
        // markers: true,
        pin: true
      },
    });

    return () => {

    }
  }, [])

  const moveSection2 = () => {
    gsap.to("#page4Sections", {
      x: "-25%",
      duration: 0.5,


    })

  }

  const moveSection3 = () => {
    gsap.to("#page4Sections", {
      x: "-50%",
      duration: 0.5,


    })

  }

  const moveSection4 = () => {
    gsap.to("#page4Sections", {
      x: "-75%",
      duration: 0.5,


    })

  }

  return (
    <div id='page4Home'>
      <div id="page4H1">

        <h1>How it works</h1>

      </div>
      <div id="page4Sections">
        <section className="page4section1 page4Section">
          <div className="sectionHeadPg4">
            <h2>Create your contract</h2>
          </div>
          <div className="createContractPg4P">
            <p>Easily draft your contract using our intuitive interface. Specify terms, conditions, and any other details relevant to your agreement</p>
          </div>
          <div className="createContractHomePg4">
            <button class="continue-application">
              <div>
                <div class="pencil"></div>
                <div class="folder">
                  <div class="top">
                    <svg viewBox="0 0 24 27">
                      <path d="M1,0 L23,0 C23.5522847,-1.01453063e-16 24,0.44771525 24,1 L24,8.17157288 C24,8.70200585 23.7892863,9.21071368 23.4142136,9.58578644 L20.5857864,12.4142136 C20.2107137,12.7892863 20,13.2979941 20,13.8284271 L20,26 C20,26.5522847 19.5522847,27 19,27 L1,27 C0.44771525,27 6.76353751e-17,26.5522847 0,26 L0,1 C-6.76353751e-17,0.44771525 0.44771525,1.01453063e-16 1,0 Z"></path>
                    </svg>
                  </div>
                  <div class="paper"></div>
                </div>
              </div>
              Create Contract
            </button>
          </div>
          <div className="nextSectionPg4BtnDiv">
            <button id='nextSecpg4Btn' onClick={moveSection2} > <span>next</span> </button>
          </div>
        </section>
        <section className="page4section2 page4Section">
          <div className="sectionHeadPg4">
            <h2>Verify and Sign</h2>
          </div>
          <div className="createContractPg4P">
            <p>Parties involved can review the contract and verify its accuracy. Once satisfied, securely sign the contract using blockchain technology</p>
          </div>
          <div className="nextSectionPg4BtnDiv">
            <button id='nextSecpg4Btn' onClick={moveSection3}> <span>next</span> </button>
          </div>
        </section>
        <section className="page4section3 page4Section">
          <div className="sectionHeadPg4">
            <h2>Blockchain Confirmation</h2>
          </div>
          <div className="createContractPg4P">
            <p>Your contract is then recorded on the blockchain, creating an immutable and time-stamped record. Track the status and changes securely at any time.

            </p>
          </div>
          <div className="nextSectionPg4BtnDiv">
            <button id='nextSecpg4Btn' onClick={moveSection4}> <span >next</span> </button>
          </div>
        </section>
        <section className="page4section4 page4Section">
          <div className="sectionHeadPg4">
            <h2>Execution and Automation</h2>
          </div>
          <div className="createContractPg4P">
            <p>Smart contracts ensure automatic execution of terms, streamlining the entire process. Payments, deliveries, or any agreed-upon actions happen seamlessly</p>
          </div>
          <div className="nextSectionPg4BtnDiv">
            <button id='nextSecpg4Btn' > <span>next</span> </button>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Page4