import React from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import "../style/Footer.css"

function Footer() {
    return <div className="footer">
        <div className="Social Media"> 
            <InstagramIcon />
            <LinkedInIcon />
        </div>
        <p> &copy; 2022 samarthkadambi.com | samarthk@umich.edu | 248-535-9147</p>
    </div>
}

export default Footer;