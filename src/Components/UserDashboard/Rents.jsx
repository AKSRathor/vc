import React from 'react'
import "./RentsUser.css"
import UserRentCards from './UserRentCards'

const allLandDetails = [
  {
    landOwner:"Keshav Pandey",
    landId: 1,
    landDescription:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, dolore est, asperiores exercitationem ipsam, quo suscipit quos sapiente veniam iste porro nemo ratione earum et iure accusamus! Impedit, nam porro?",
    borrowDuration:6,
    landCity:"New Delhi",
    landAddress:"123 Nevermore Lane, Gloomsbury, CA 99999",
    borrowDate:20,
    borrowMonth:8,
    borrowYear:2023,
    landStatus:"Fresh as new",
    landArea:"50 Hectares",
    borrowPrice:70000,

  },
  {
    landOwner:"Keshav Pandey",
    landId: 1,
    landDescription:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, dolore est, asperiores exercitationem ipsam, quo suscipit quos sapiente veniam iste porro nemo ratione earum et iure accusamus! Impedit, nam porro?",
    borrowDuration:6,
    landCity:"Sydney",
    landAddress:"42 Wallaby Way, Sydney, Australia",
    borrowDate:20,
    borrowMonth:8,
    borrowYear:2023,
    landStatus:"Fresh as new",
    landArea:"50 Hectares",
    borrowPrice:70000,
    
  },
  {
    landOwner:"Keshav Pandey",
    landId: 1,
    landDescription:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, dolore est, asperiores exercitationem ipsam, quo suscipit quos sapiente veniam iste porro nemo ratione earum et iure accusamus! Impedit, nam porro?",
    borrowDuration:6,
    landCity:"Moscow",
    landAddress:"The Shire, Middle-earth",
    borrowDate:20,
    borrowMonth:8,
    borrowYear:2023,
    landStatus:"Fresh as new",
    landArea:"50 Hectares",
    borrowPrice:70000,
  }
]

const Rents = () => {
  return (
    <div>
        <div id="rentUserHeading"><h1>On Rents</h1></div>
        <div id="allUserRentalDetails">
          {allLandDetails.map((i)=>{
            return <UserRentCards/>
          })}
        </div>
        
    </div>
  )
}

export default Rents