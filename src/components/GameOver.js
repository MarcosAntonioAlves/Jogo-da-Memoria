import React, { Fragment } from "react";

export default function GameOver(props){
    return(props.show?
        <div id="gameOver">
            <div>
                Parabéns Você completou o jogo
            </div>
            <button id="reset" onClick={props.handleRestart}>Jogue Novamente</button>
        </div> : <Fragment/>
    )
}
