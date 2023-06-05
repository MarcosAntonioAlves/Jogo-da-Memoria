import React, { useEffect, useState } from "react";
import GameBoard from "./GameBoard";
import GameOver from "./GameOver";
import game from "../game";

export default function MemoryGamer(){
    const [gameOver, setGameOver] = useState(false);
    const [cards, setCards] = useState([]);

    useEffect(() => {
        setCards(game.createCardsFromTechs())
    },[])

    function restart(){
        game.clearCards();
        setCards(game.createCardsFromTechs())
        setGameOver(false)
    }

    function handleFlip(card){
        game.flipCard(card.id, ()=>{
            //GameOverCallBack
            setGameOver(true)
        }, () => {
            //NoMathCallBack
            setCards([...game.cards])
        })
        setCards([...game.cards]) 
    }

    return(
        <div>
            <GameBoard handleFlip={handleFlip} cards={cards}></GameBoard>
            <GameOver show={gameOver} handleRestart={restart}></GameOver>
        </div>
    )
}
