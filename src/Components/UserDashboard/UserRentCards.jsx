import { Button, Grow, IconButton } from '@mui/material'
import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Modal from '@mui/joy/Modal';

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



const UserRentCards = () => {


    const [open, setOpen] = useState(false);
    const handleOpen = () => {
        setOpen(true);

    };
    const handleClose = () => {
        setOpen(false);
    };


    return (
        <div className='userRentCards'>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="child-modal-title"
                aria-describedby="child-modal-description"

            >
                <Grow in={open}>
                    <Box sx={{ ...style, width: 200 }}>
                        <div className="allInsideTheLandDetailsBox">
                            <div className="landRentOwnerName"><h2>Keshav Pandey</h2></div>
                            <div className="rentLandDetailsModal"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, dolore est, asperiores exercitationem ipsam, quo suscipit quos sapiente veniam iste porro nemo ratione earum et iure accusamus! Impedit, nam porro?</p></div>
                            <div className="rentLandCityModal"><p>New Delhi</p></div>
                            <div className="rentLandCityAddress"><p>123 Nevermore Lane, Gloomsbury, CA 99999</p></div>
                            <div className="rentDetailsBtns">
                                <div className="rentExtendContractButton"><Button variant="contained" >Extend Contract</Button></div>
                                <div className="rentCancelContractButton"><Button variant="contained" color="error" >Cancel Contract</Button></div>
                            </div>
                            <div className="rentContractDuration"></div>
                        </div>
                    </Box>

                </Grow>
            </Modal>

            <div className="showMoreAboutRentsBtnDiv" ><IconButton onClick={handleOpen} color="black" ><i class="fa-solid fa-angles-right"></i></IconButton></div>
            <div className="userLandHead"><h2>Ashok Park</h2></div>
            <div className="landOwnerRent"><p>Keshav Pandey</p></div>
            <div className="landCityRent"><p>New Delhi</p></div>

        </div>
    )
}

export default UserRentCards