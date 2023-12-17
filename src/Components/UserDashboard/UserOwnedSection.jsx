import React from 'react'
import "./UserOwnedSection.css"
import OwnSectionCard from './OwnSectionCard'

const UserOwnedSection = () => {
    return (
        <div>
            <div id="ownHeadingSection">
                <h1>Owned</h1>
            </div>
            <div id="ownSectionUserlist">
                <OwnSectionCard/>
                <OwnSectionCard/>
            </div>
        </div>
    )
}

export default UserOwnedSection