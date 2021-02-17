"use strict";
import { Enums } from "./Enums.js";
import {BattleshipsGame} from "./BattleshipsGame.js";

var game;

window.cellClick = (cell) => {
    if (!cell.hitResut && game.turnOwner===Enums.BoardOwnerEnum.player && cell.owner!==Enums.BoardOwnerEnum.player) {
        cell.hit();
    }

}

window.startGameButton = () =>{
    if(game){  //Есть не первая игра, удаляем сыгранное поле
        if(game.playerBoard.container && game.aiBoard.container){
            document.querySelectorAll('.playField').forEach(element => {
                element.remove();
            });
            document.querySelectorAll('.status').forEach(element => {
                element.remove();
            });
            document.querySelectorAll('.gameoverScreen').forEach(element => {
                element.remove();
            });
        }
    }
    let playerTurn = document.querySelector('input[name="turn"]:checked').value;
    let firstTurnOwner = playerTurn === "first" ? Enums.BoardOwnerEnum.player : Enums.BoardOwnerEnum.ai;
    let playerName = document.querySelector('input[name="playerName"]').value;
    game = new BattleshipsGame({playerName: playerName, firstTurnOwner:firstTurnOwner});
    game.init();
}




