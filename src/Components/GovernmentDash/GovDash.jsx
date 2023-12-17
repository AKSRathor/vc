import React from 'react'
import { Outlet } from 'react-router-dom'
import GovSider from './GovSider'

const GovDash = () => {
  return (
    <div id='dashPage'>
      <GovSider />
      <div className="rightSideUserInterface">
        {/* <UserOwnedSection /> */}
        {/* <Rents/> */}
        <Outlet className = "usersideOutlet"/>
      </div>
    </div>
  )
}

export default GovDash