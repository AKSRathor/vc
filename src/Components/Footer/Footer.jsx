import React from 'react';
import "./Footer.css";

function Footer() {
    return (
        <footer className="padding_4x siteFooter">
            <div className="flex">
                <section className="flex-content padding_1x">
                    <h3 className="footerH3">Top Products</h3>
                    <a className="allFooterA" href="#">Managed Website</a>
                    <a className="allFooterA" href="#">Manage Reputation</a>
                    <a className="allFooterA" href="#">Power Tools</a>
                    <a className="allFooterA" href="#">Marketing Service</a>
                </section>
                <section className="flex-content padding_1x">
                    <h3 className="footerH3">Quick Links</h3>
                    <a className="allFooterA" href="#">Jobs</a>
                    <a className="allFooterA" href="#">Brand Assets</a>
                    <a className="allFooterA" href="#">Investor Relations</a>
                    <a className="allFooterA" href="#">Terms of Service</a>
                </section>
                <section className="flex-content padding_1x">
                    <h3 className="footerH3">Features</h3>
                    <a className="allFooterA" href="#">Jobs</a>
                    <a className="allFooterA" href="#">Brand Assets</a>
                    <a className="allFooterA" href="#">Investor Relations</a>
                    <a className="allFooterA" href="#">Terms of Service</a>
                </section>
                <section className="flex-content padding_1x">
                    <h3 className="footerH3">Resources</h3>
                    <a className="allFooterA" href="#">Guides</a>
                    <a className="allFooterA" href="#">Research</a>
                    <a className="allFooterA" href="#">Experts</a>
                    <a className="allFooterA" href="#">Agencies</a>
                </section>
                <section className="flex-content padding_1x">
                    <h3 className="footerH3">Newsletter</h3>
                    <p className='footerPara'>You can trust us. we only send promo offers,</p>
                    <fieldset className="fixed_flex">
                        <input className='footerInput' type="email" name="newsletter" placeholder="Your Email Address" />
                        <button className="btn btn_2 buttonFooter">Subscribe</button>
                    </fieldset>
                </section>
            </div>
            <div className="flex">
                <section className="flex-content padding_1x">
                    <p className='footerPara'>Copyright ©2023 All rights reserved || website name</p>
                </section>
                <section className="flex-content padding_1x">
                    <a className="allFooterA" href="#"><i className="fa fa-facebook"></i></a>
                    <a className="allFooterA" href="#"><i className="fa fa-twitter"></i></a>
                    <a className="allFooterA" href="#"><i className="fa fa-dribbble"></i></a>
                    <a className="allFooterA" href="#"><i className="fa fa-linkedin"></i></a>
                </section>
            </div>
        </footer>
    );
}

export default Footer;
