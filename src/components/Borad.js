import React, { useEffect, useState } from "react";
import Card from "./Card.js";

const MAXIMAGES = 15;
const DISPLAYIMAGES = 6;

function Board(props){
    const [notPickedIndexes, setNotPickedIndexes] = useState(Array.from(Array(MAXIMAGES).keys()));

    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }
    
    function removeElement(array, indexToRemove){
        const firstPortion = array.slice(0, indexToRemove);
        const secondPortion = array.slice(indexToRemove+1);
        return firstPortion.concat(secondPortion);
    }

    function imgClicked(event){
        const pickedIndex = parseInt(event.target.id);
        //check if picked already
        if (notPickedIndexes.includes(pickedIndex)){
            //updates the score
            const newScore = props.score + 1;
            props.setScore(newScore);
            if(newScore > props.bestScore){
                props.setBestScore(newScore);
            }
            //updates the board
            setNotPickedIndexes(removeElement(notPickedIndexes, notPickedIndexes.indexOf(pickedIndex)));
        }
        else{
            //lost
            //updates the score
            props.setScore(0);
            //updates the board
            setNotPickedIndexes(Array.from(Array(MAXIMAGES).keys()));
        }

        
    }

    function genPicksForRender(){
        let picks = [-1,-1,-1,-1,-1,-1];
        if (notPickedIndexes.length === 0){
            //gameover
        }
        else{
            //push one element that the player didn't picked yet
            picks[getRandomInt(DISPLAYIMAGES)]=(notPickedIndexes[getRandomInt(notPickedIndexes.length-1)])

            //enter random images
            while (picks.includes(-1)){
                const newPick = getRandomInt(MAXIMAGES);
                if (!picks.includes(newPick)){
                    picks[picks.indexOf(-1)]=newPick;
                }
            }
        }
        return picks;
    }

        
    const picks = genPicksForRender();
    return (
        <div id="board">
            <Card imgIndex={picks[0]} imgClicked={imgClicked}/>
            <Card imgIndex={picks[1]} imgClicked={imgClicked}/>
            <Card imgIndex={picks[2]} imgClicked={imgClicked}/>
            <Card imgIndex={picks[3]} imgClicked={imgClicked}/>
            <Card imgIndex={picks[4]} imgClicked={imgClicked}/>
            <Card imgIndex={picks[5]} imgClicked={imgClicked}/>
        </div>
    );
}

export default Board;
