import React, { useEffect, useState } from 'react'
import "./UserSider.css"
import { gsap } from 'gsap'
import { ScrollTrigger, CustomEase, Power3 } from 'gsap/all'
// import { Link } from '@mui/material'
import { Link } from 'react-router-dom'
gsap.registerPlugin(ScrollTrigger)

const UserSider = () => {
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
        <Link className='userSiderLi' to ="owned"> <span className='userSideNavSpan1'><i class="fa-solid fa-landmark"></i></span><span className='userSideNavSpan2'>Owned</span>
          <span className="liAfterTextUserSide">Owned</span>
        </Link>
        <Link className='userSiderLi' to="rents"><span className='userSideNavSpan1'><i class="fa-solid fa-cloud"></i></span><span className='userSideNavSpan2'>On Rent</span>
          <span className='liAfterTextUserSide'>Rents</span>
        </Link>
        <Link className='userSiderLi'><span className='userSideNavSpan1'><i class="fa-regular fa-map"></i></span><span className='userSideNavSpan2'>History</span>
          <span className='liAfterTextUserSide'>History</span>
        </Link>
        <Link className='userSiderLi'><span className='userSideNavSpan1'><i class="fa-regular fa-user"></i></span><span className='userSideNavSpan2'>Account</span>
          <span className='liAfterTextUserSide'>Account</span>
        </Link>
      </ul>
    </nav>
  )
}

export default UserSider