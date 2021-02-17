"use strict";
import { Enums } from "./Enums.js";
// Класс корабля
export class Ship {
    constructor(props) {
        this.container = null;
        this.size = 0;
        this.takenCells = props.takenCells;
        this.board = props.board;
        this.orientation = props.orientation;
        this.hp = this.takenCells.length;
        this.status = Enums.ShipStatusEnum.alive;
    }

    insertShipToDOM() {
        this.container = document.createElement("div");
        this.container.className = "ship";
        this.container.style.top = this.takenCells[0].container.getBoundingClientRect().top + "px";;
        this.container.style.left = this.takenCells[0].container.getBoundingClientRect().left + "px";

        this.container.classList.add(`ship${this.takenCells.length}Cells${this.orientation}`)

        this.board.container.appendChild(this.container);
    }
    dealDamage() {
        this.hp--;
        if (this.hp === 0) {
            this.destroy()
        }
    }
    destroy() {
        this.status = Enums.ShipStatusEnum.dead;
        if (!this.container) {
            this.insertShipToDOM();
        }
        this.container.classList.add("deadShip");
        this.markBorderCells();
        this.board.decreaseShipCount();
    }

    markBorderCells() { //Пометить граничные с кораблем клетки при уничтожении корабля
        if (this.orientation === Enums.ShipOrientationEnum.Horizontal) {
            for (let i = 0; i < 3; i++) {
                for (let j = 0; j < this.takenCells.length + 2; j++) {
                    if (this.takenCells[0].x - 1 + i < this.board.cells.length && this.takenCells[0].x - 1 + i >= 0 && this.takenCells[0].y - 1 + j < this.board.cells[0].length && this.takenCells[0].y - 1 + j >= 0) {
                        if (this.board.cells[this.takenCells[0].x - 1 + i][this.takenCells[0].y - 1 + j].hitResut!==Enums.CellHitResultEnum.miss && !this.board.cells[this.takenCells[0].x - 1 + i][this.takenCells[0].y - 1 + j].ship) {
                            let dot = document.createElement("div");
                            dot.classList.add("dot");
                            this.board.cells[this.takenCells[0].x - 1 + i][this.takenCells[0].y - 1 + j].container.appendChild(dot);
                            this.board.cells[this.takenCells[0].x - 1 + i][this.takenCells[0].y - 1 + j].hitResut = Enums.CellHitResultEnum.miss;
                        }

                    }

                }
            }
        }
        else {
            for (let i = 0; i < this.takenCells.length + 2; i++) {
                for (let j = 0; j < 3; j++) {
                    if (this.takenCells[0].x - 1 + i < this.board.cells.length && this.takenCells[0].x - 1 + i >= 0 && this.takenCells[0].y - 1 + j < this.board.cells[0].length && this.takenCells[0].y - 1 + j >= 0) {
                        if (this.board.cells[this.takenCells[0].x - 1 + i][this.takenCells[0].y - 1 + j].hitResut!==Enums.CellHitResultEnum.miss && !this.board.cells[this.takenCells[0].x - 1 + i][this.takenCells[0].y - 1 + j].ship) {
                            let dot = document.createElement("div");
                            dot.classList.add("dot");
                            this.board.cells[this.takenCells[0].x - 1 + i][this.takenCells[0].y - 1 + j].container.appendChild(dot);
                            this.board.cells[this.takenCells[0].x - 1 + i][this.takenCells[0].y - 1 + j].hitResut = Enums.CellHitResultEnum.miss;
                        }

                    }
                }
            }
        }
    }
}
