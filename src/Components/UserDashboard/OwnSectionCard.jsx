import React, { useEffect, useRef, useState } from 'react'
import Box from '@mui/material/Box';
import Grow from '@mui/material/Grow';
// import Modal from '@mui/material/Modal';
import Modal from '@mui/joy/Modal';
import Button from '@mui/material/Button';
import UserLandReqCard from './UserLandReqCard';
import { gsap } from 'gsap'
import { ScrollTrigger, CustomEase, Power3 } from 'gsap/all'
gsap.registerPlugin(ScrollTrigger)



const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 800,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
};


const OwnSectionCard = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => {
        setOpen(true);

    };
    const handleClose = () => {
        setOpen(false);
    };


    return (
        <>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="child-modal-title"
                aria-describedby="child-modal-description"

            >
                <Grow in={open}>
                    <Box sx={{ ...style, width: 200 }}>
                        <div className="allInsideTheLandDetailsBox">

                            <div className="landDetailsOwnUser">
                                <div className="landDetailsEditDiv"><Button className="landDetailsEditBtn"><i class="fa-regular fa-pen-to-square"></i></Button></div>
                                <h2>Land Details</h2>
                                <div className="landDetailsInfo"><p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores ullam alias, esse ab rem cupiditate, tempore expedita accusamus odit itaque deleniti officiis asperiores totam repudiandae reiciendis neque deserunt magni ducimus.</p></div>
                            </div>
                            <div className="landRequestOwnUser">
                                <h2>Land Requests</h2>
                                <div className="allYourRequests">
                                    <UserLandReqCard />
                                    <UserLandReqCard />
                                    <UserLandReqCard />
                                    <UserLandReqCard />
                                </div>
                            </div>
                            <div className="landUserDetailRent">
                                <div className="rentDetailsEditDiv"><Button className="rentDetailsEditBtn"><i class="fa-regular fa-pen-to-square"></i></Button></div>
                                <h2>Rent Details</h2>
                                <div className="rentDetailsInfoUser">
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, rerum quos, dignissimos, repellendus veritatis sit earum quam sunt voluptate a qui? Dolorem perferendis earum corrupti! Placeat fugit perspiciatis cum voluptatibus. Veritatis ea itaque illo?</p>
                                </div>
                            </div>

                            {/* <Button onClick={handleClose}>Close Child Modal</Button> */}
                        </div>
                    </Box>

                </Grow>
            </Modal>
            <div className='ownSectionListCard'>
                <div className="ownSectionCardHead">
                    <h2>Ranhola Land</h2>
                </div>
                <div className="ownSectionCardSubhead">
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, accusantium maiores. Quaerat, culpa. Dolorum eius aperiam ratione recusandae aspernatur magnam.</p>
                </div>
                <div className="ownSetcionCardBtn">
                    <button onClick={handleOpen} className="viewDetailsOwnSectionBtn">View Details</button>
                </div>
            </div>
        </>
    )
}

export default OwnSectionCard
