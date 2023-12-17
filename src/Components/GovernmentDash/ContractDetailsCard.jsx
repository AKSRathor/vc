import { Button, Modal } from '@mui/joy'
import { Button as MuiButton } from '@mui/material';
import { Box, Grow } from '@mui/material'
import React, { useState } from 'react'


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


const ContractDetailsCard = () => {

    const [open, setOpen] = useState(false);
    const handleOpen = () => {
        setOpen(true);

    };
    const handleClose = () => {
        setOpen(false);
    };


    return (
        <div className='contractDetailsCard'>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="child-modal-title"
                aria-describedby="child-modal-description"

            >
                <Grow in={open}>
                    <Box sx={{ ...style, width: 200 }}>
                        <div className="allInsideTheLandDetailsBox">
                            <div className="landRentOwnerName"><h2>Contract Details</h2></div>
                            <div className="rentLandDetailsModal"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, dolore est, asperiores exercitationem ipsam, quo suscipit quos sapiente veniam iste porro nemo ratione earum et iure accusamus! Impedit, nam porro?</p></div>
                            <div className="rentLandCityModal"><p>New Delhi</p></div>
                            <div className="rentLandCityAddress"><p>123 Nevermore Lane, Gloomsbury, CA 99999</p></div>
                            <div className="rentDetailsBtns">
                                
                                <div className="rentCancelContractButton"><MuiButton variant="contained" color="error" >Cancel Contract</MuiButton></div>
                            </div>
                        </div>
                    </Box>

                </Grow>
            </Modal>
            <div className="govContractHead"><h2>Land Contract</h2></div>
            <div className="govContractDetailsCard"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime suscipit, assumenda blanditiis repudiandae id eum fuga aliquid quasi ad quae quas cupiditate itaque qui odit eos saepe rerum obcaecati vero!</p></div>
            <div className="govContractCardMoreInfoBtnDiv"><Button onClick={handleOpen}>More Info</Button></div>

        </div>
    )
}

export default ContractDetailsCard