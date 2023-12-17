import React, { useEffect, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger, CustomEase, Power3 } from 'gsap/all'
import { Link } from 'react-router-dom'
gsap.registerPlugin(ScrollTrigger)

const GovSider = () => {
  const [hamOpen, setHamOpen] = useState(true)

  
  const handleOnHamburg = () => {
    if (hamOpen) {
      gsap.to("#userHamBtn", {
        rotateZ: 360,
        duration: 0.3,
        right:"-43%"
      })
      gsap.to(".userSideNavSpan2", {
        display: "none",
        duration: 0,
      })
      gsap.to("#userSideNav", {
        width: "6%"
      })
      gsap.to("#userNavUlContents", {
        textAlign: "center"
      })
      gsap.to(".userSiderLi", {
        padding: "17%",
        flexDirection:"column"
      })
      gsap.to(".userSideNavSpan1", {
        padding: 0
      })
      gsap.to(".liAfterTextUserSide",{
        display:"block",
        opacity:"1"
      })
      setHamOpen(false)
      
    }
    else{
      gsap.to("#userHamBtn", {
        rotateZ: 180,
        duration: 0.3,
        right:"-24%"
      })
      gsap.to(".userSideNavSpan2", {
        display: "block",
        duration: 0,
      })
      gsap.to("#userSideNav", {
        width: "14%"
      })
      gsap.to("#userNavUlContents", {
        textAlign: "left"
      })
      gsap.to(".userSiderLi", {
        padding: "6%",
        flexDirection:"row"
      })
      gsap.to(".userSideNavSpan1", {
        paddingRight: "20px",
        paddingLeft: "4%"
      })
      gsap.to(".liAfterTextUserSide",{
        display:"none",
        opacity:"0"
      })
      setHamOpen(true)
    }


  }
  return (
    <nav id='userSideNav'>
      <button onClick={handleOnHamburg} id="userHamBtn"><i class="fa-solid fa-arrow-right"></i></button>
      <ul id='userNavUlContents'>
        <Link className='userSiderLi' to ="issue"> <span className='userSideNavSpan1'><i class="fa-solid fa-upload"></i></span><span className='userSideNavSpan2'>Issue Doc</span>
          <span className="liAfterTextUserSide">Issue Doc</span>
        </Link>
        <Link className='userSiderLi' to="contractdetails"><span className='userSideNavSpan1'><i class="fa-solid fa-file-contract"></i></span><span className='userSideNavSpan2'>Contract</span>
          <span className='liAfterTextUserSide'>Contract</span>
        </Link>
        <Link className='userSiderLi'><span className='userSideNavSpan1'><i class="fa-solid fa-wheat-awn"></i></span><span className='userSideNavSpan2'>Lands</span>
          <span className='liAfterTextUserSide'>Lands</span>
        </Link>
        <Link className='userSiderLi'><span className='userSideNavSpan1'><i class="fa-solid fa-credit-card"></i></span><span className='userSideNavSpan2'>Tenants</span>
          <span className='liAfterTextUserSide'>Tenants</span>
        </Link>
      </ul>
    </nav>
  )
}

export default GovSider