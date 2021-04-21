import React, {useState, useEffect} from "react";

function Score(props){
    return (
        <div id="score">
            <p>Your Score: {props.score}</p>
            <p>Best Score: {props.bestScore}</p>
        </div>
    );
}

export default Score;