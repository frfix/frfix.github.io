"use strict";
import { NumberGenerator } from "./NumberGenerator.js";

//Класс "ИИ". Выбирает с вероятность 1/25 клетку с кораблем, либо же случайную клетку
export class Ai {
    constructor(props) {
        this.playerBoard = props.playerBoard;
    }

    makeTurn() {
        let random = NumberGenerator.randomInteger(0, 25);
        if (random === 0) {  
            for (; ;) {
                let x = NumberGenerator.randomInteger(0, 9);
                let y = NumberGenerator.randomInteger(0, 9);

                if (!this.playerBoard.cells[x][y].hitResut && this.playerBoard.cells[x][y].ship) {
                    this.playerBoard.cells[x][y].hit();
                    break;
                }
            }
        } else {
            for (; ;) {
                let x = NumberGenerator.randomInteger(0, 9);
                let y = NumberGenerator.randomInteger(0, 9);

                if (!this.playerBoard.cells[x][y].hitResut) {
                    this.playerBoard.cells[x][y].hit();
                    break;
                }
            }
        }

    }
}