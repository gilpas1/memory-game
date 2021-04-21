import gaara from "../images/Gaara.png";
import ino from "../images/Ino.png";
import itachi from "../images/Itachi.png";
import jiraiya from "../images/Jiraiya.png";
import kakashi from "../images/Kakashi.png";
import lee from "../images/Lee.png";
import naruto from "../images/Naruto.png";
import neji from "../images/Neji.png";
import obito from "../images/Obito.png";
import orochimaru from "../images/Orochimaru.png";
import sakura from "../images/Sakura.png";
import sasuke from "../images/Sasuke.png";
import shikamaru from "../images/Shikamaru.png";
import tobi from "../images/Tobi.png";
import tsunade from "../images/Tsunade.png";

import React, { useState, useEffect } from "react";

function Card(props){
    const images = [gaara, ino, itachi, jiraiya, kakashi, lee, naruto, neji, obito, orochimaru, sakura, sasuke, shikamaru, tobi, tsunade];



    return(
        <img 
            id={props.imgIndex}
            src={images[props.imgIndex]} 
            alt=""
            onClick={props.imgClicked}
            className="card"
            >
        </img>
    );
}

export default Card;