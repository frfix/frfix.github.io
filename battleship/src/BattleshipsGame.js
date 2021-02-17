"use strict";
import { Board } from "./Board.js";
import { Ai } from "./Ai.js";
import { Enums } from "./Enums.js";
//Класс игры
export class BattleshipsGame {
    constructor(props) {
        this.ai = null;
        this.playerBoard = null;
        this.aiBoard = null;
        this.turnOwner = props.firstTurnOwner;
        this.playerName = props.playerName;
        this.statusDiv = null;
    }

    init() {
        this.playerBoard = new Board(Enums.BoardOwnerEnum.player, this);
        this.playerBoard.insertBoardToDOM();

        this.aiBoard = new Board(Enums.BoardOwnerEnum.ai, this);
        this.aiBoard.insertBoardToDOM();

        this.playerBoard.generateShips();
        this.aiBoard.generateShips();

        this.ai = new Ai({ playerBoard: this.playerBoard });

        this.statusDiv = document.createElement("div");
        this.statusDiv.classList.add("status");
        this.statusDiv.innerHTML = `Ход игрока ${this.turnOwner === Enums.BoardOwnerEnum.player ? this.playerName : "Компьютер"}`;

        document.getElementById("app").appendChild(this.statusDiv);

        if (this.turnOwner === Enums.BoardOwnerEnum.ai) {
            setTimeout(() => { this.ai.makeTurn() }, 500); 

        }

    }

    changeTurnOwner() {
        this.turnOwner = this.turnOwner === Enums.BoardOwnerEnum.player ? Enums.BoardOwnerEnum.ai : Enums.BoardOwnerEnum.player;
        this.statusDiv.innerHTML = `Ход игрока ${this.turnOwner === Enums.BoardOwnerEnum.player ? this.playerName : "Компьютер"}`;
        if (this.turnOwner === Enums.BoardOwnerEnum.ai) {
            setTimeout(() => { this.ai.makeTurn() }, 1000);
        }
    }

    gameover(loser) {
        this.turnOwner = "";
        setTimeout(() => {
            document.querySelectorAll('.playField').forEach(element => {
                element.remove();
            });
            document.querySelectorAll('.status').forEach(element => {
                element.remove();
            });
            this.showGameoverScreen(loser);
        }, 1000);

    }

    showGameoverScreen(loser){
        let gameOverScreen = document.createElement("div");
        gameOverScreen.classList.add("gameoverScreen");
        gameOverScreen.innerHTML=`<p class = "gameover-text">Вы ${loser===Enums.BoardOwnerEnum.player ? "проиграли!" : "победили!"}</p>`
        document.getElementById("app").appendChild(gameOverScreen);
    }
}