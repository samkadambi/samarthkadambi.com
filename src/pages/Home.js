import React from "react";
import EmailIcon from "@material-ui/icons/Email";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import "../style/Home.css";
import img from "../images/DSC00007.JPG"
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';
import SportsTennisIcon from '@material-ui/icons/SportsTennis';
import SportsBasketballIcon from '@material-ui/icons/SportsBasketball';
import FitbitIcon from '@mui/icons-material/Fitbit';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import LightbulbIcon from '@mui/icons-material/Lightbulb';

function Home() {
    return (
    
    <div className="Home"> 
        <div className="about">
            <img src={img} alt="Logo" height='200' width='300'/>
            <h1> Hi, I'm Samarth Kadambi</h1>
            <div className="prompt"> 
            <p>A software developer with a passion for creating and connecting with others</p>
            <p>Learn more about me below!</p>
            <LinkedInIcon/> 
            <EmailIcon />
            <br></br>
            </div>
        </div>
        <div className="skills">
            <h1> Skills </h1>
            <ol className="List"> 
                <span>
                    C++, Python, ReactJS, SQL
                </span>
            </ol>
        </div>

        <div className="aboutme">
            <h1>About Me</h1>
            <h2>I love staying active by running <DirectionsRunIcon /> playing tennis <SportsTennisIcon /> and playing basketball <SportsBasketballIcon /></h2> 


            <h2>I enjoy reading books <LibraryBooksIcon /></h2>

            <h2> I always strive to be learning, making connections, and solving relevant problems <LightbulbIcon /></h2>
        </div>
    </div>

    );
}


export default Home;