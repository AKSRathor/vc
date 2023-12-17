import React from 'react'
import "./Navbar.css"
import { gsap } from 'gsap'
import { useLayoutEffect, useEffect, useRef, useState } from 'react'
import { ScrollTrigger, CustomEase, Power3 } from 'gsap/all'
import { Link } from "react-router-dom"
import { Modal } from '@mui/joy'
import { Box } from '@react-three/drei'
import Card from './CardPopup'

gsap.registerPlugin(ScrollTrigger)
gsap.registerPlugin(CustomEase);

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

const Navbar = (ref) => {

    const navTarget1 = useRef(null);
    const navTarget2 = useRef(null);
    const navTarget3 = useRef(null);
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const onMidHover = (nt) => {

        // if (ref.current) {
        gsap.to(nt.current, {

            width: "100%",
            duration: 0.2
        })
        // }
    }
    const onMidOut = (nt) => {
        gsap.to(nt.current, {
            width: "0",
            duration: 0.2,
        })
    }

    return (
        <div id='navbar'>

            <nav id="leftNav">
                <ul>
                    <Link>Logo</Link>
                </ul>
            </nav>

            <nav id='middleNav'>
                <ul>
                    <Link to = "/" onMouseOver={() => onMidHover(navTarget1)} onMouseOut={() => onMidOut(navTarget1)}>
                        <div className="navText">Home</div>
                        <div ref={navTarget1} className="navBefore"></div>
                    </Link>

                    <Link onMouseOver={() => onMidHover(navTarget2)} onMouseOut={() => onMidOut(navTarget2)}>
                        <div className="navText">Why Choose Us</div>
                        <div ref={navTarget2} className="navBefore"></div>
                    </Link>

                    <Link onMouseOver={() => onMidHover(navTarget3)} id='contactingDiv' onMouseOut={() => onMidOut(navTarget3)}>
                        <div className="navText" >Contract <i class="fa-solid fa-plus"></i></div>
                        <div ref={navTarget3} className="navBefore"></div>
                    </Link>



                </ul>
            </nav>

            <nav id="rightNav">
                <ul id='rightNavLeftUl'>
                    <Link><button class="button-wallet" onClick={handleOpen}> Connect Wallet </button></Link>
                </ul>
                <ul id='rightNavRightUl'>
                    <Link to="/login" id='navRightJoin'>Join Server</Link>
                    <Link to="/login">Sign in</Link>
                </ul>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={{ ...style, width: 200 }}>
                        <Card open={open} handleClose={handleClose} setOpen={setOpen} />
                    </Box>
                </Modal>
            </nav>
        </div>
    )
}

export default Navbar