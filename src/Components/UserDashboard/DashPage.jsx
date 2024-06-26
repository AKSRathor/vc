import React from 'react'
import UserSider from './UserSider'
import UserOwnedSection from './UserOwnedSection'
import "./DashPage.css"
import Rents from './Rents'
import { Outlet } from 'react-router-dom'

const DashPage = () => {
  return (
    <div id='dashPage'>
      <UserSider />
      <div className="rightSideUserInterface">
        {/* <UserOwnedSection /> */}
        {/* <Rents/> */}
        <Outlet className = "usersideOutlet"/>
      </div>
    </div>
  )
}

export default DashPage