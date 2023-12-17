import React from 'react'

const UserLandReqCard = () => {
    return (
        <div className='userLandReqCard'>
            <div className="landRequestMakerName">
                <h3>Keshav Das</h3>
                <div className="accOrRejReq">
                    <button className='accReqBtn'><span class="accReqBtnSpan">Accept</span></button>
                    <button className='rejReqBtn'><span class="rejReqBtnSpan">Deny</span></button>
                </div>

            </div>

        </div>
    )
}

export default UserLandReqCard