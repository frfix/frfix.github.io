"use strict";
import {NumberGenerator} from "./NumberGenerator.js";
import {Cell} from "./Cell.js";
import {Enums} from "./Enums.js";
import {Ship} from "./Ship.js";
//Класс игровой доски
export class Board {
    constructor(owner, game) {
        this.container = null;
        this.cells = [];
        this.ships = [];
        this.owner = owner;
        this.shipCount = 10;
        this.game = game;
    }

    insertBoardToDOM() {
        let parent = document.createElement("div");
        parent.classList.add("playField");

        let playerName = document.createElement("p");
        if(this.owner===Enums.BoardOwnerEnum.player){
          playerName.innerHTML = this.game.playerName;
        } else{
            playerName.innerHTML = "Компьютер";
        }
        parent.appendChild(playerName);
        document.getElementById("app").appendChild(parent);

        this.container = document.createElement("div");
        this.container.className = "board";
        parent.appendChild(this.container);

        this.cells = new Array(10);
        for (let i = 0; i < this.cells.length; i++) {
            this.cells[i] = new Array(10);
        }
        for (let i = 0; i < this.cells.length; i++) {
            for (let j = 0; j < this.cells[0].length; j++) {
                this.cells[i][j] = new Cell(i, j, this.game, this.owner);
                this.cells[i][j].insertCellToDOM(this.container);
            }

        }
    }

    generateShips() {
        let shipCells = null;
        for (let i = 0; i < 10; i++) {  // Создаем 1 четырёхпалбуный корабль, 2 двухпалубных итд.
            if (i === 0) {
                shipCells = this.chooseValidCells(4);
            }
            else if (i > 0 && i < 3) {
                shipCells = this.chooseValidCells(3);
            }
            else if (i > 2 && i < 6) {
                shipCells = this.chooseValidCells(2);
            }
            else if (i > 5) {
                shipCells = this.chooseValidCells(1);
            }
            this.instantiateShip(shipCells);
        }

    }

    decreaseShipCount(){
        this.shipCount --;
        if(this.shipCount===0){
            this.game.gameover(this.owner);
        }
    }

    instantiateShip(shipCells) {
        let ship = new Ship({ board: this, takenCells: shipCells.cellsArray, orientation: shipCells.orientation });
        ship.takenCells.forEach(element => {
            element.ship = ship;
            element.status = Enums.CellStatusEnum.occupied;
        });
        this.occupyBorderCells(ship);
        this.ships.push(ship);
        if (this.owner === Enums.BoardOwnerEnum.player) {
            ship.insertShipToDOM();
        }

    }

    chooseValidCells(shipLength) {
        for (; ;) {
            let x = NumberGenerator.randomInteger(0, 9);
            let y = NumberGenerator.randomInteger(0, 9);

            let orientation = NumberGenerator.randomInteger(0, 1) === 0 ? Enums.ShipOrientationEnum.Horizontal : Enums.ShipOrientationEnum.Vertical;

            let validCellsCounter = 0;

            if (orientation === Enums.ShipOrientationEnum.Horizontal) {
                for (let i = 0; i < shipLength; i++) {
                    if (this.cells[x][y + i]) {
                        if (this.cells[x][y + i].status === Enums.CellStatusEnum.free) {
                            validCellsCounter++;
                        }
                    }
                }
                if (validCellsCounter === shipLength) {
                    let cellsArray = [];
                    for (let i = 0; i < shipLength; i++) {
                        cellsArray.push(this.cells[x][y + i]);
                    }
                    return { cellsArray: cellsArray, orientation: orientation };
                }
                else {
                    continue;
                }
            }

            else {
                for (let i = 0; i < shipLength; i++) {
                    if (x + i < this.cells.length) {
                        if (this.cells[x + i][y].status === Enums.CellStatusEnum.free) {
                            validCellsCounter++;
                        }
                    }
                }
                if (validCellsCounter === shipLength) {
                    let cellsArray = [];
                    for (let i = 0; i < shipLength; i++) {
                        cellsArray.push(this.cells[x + i][y]);
                    }
                    return { cellsArray: cellsArray, orientation: orientation };
                }
                else {
                    continue;
                }


            }
        }

    }

    occupyBorderCells(ship) {
        if (ship.orientation === Enums.ShipOrientationEnum.Horizontal) {
            for (let i = 0; i < 3; i++) {
                for (let j = 0; j < ship.takenCells.length + 2; j++) {
                    if (ship.takenCells[0].x - 1 + i < this.cells.length && ship.takenCells[0].x - 1 + i >= 0 && ship.takenCells[0].y - 1 + j < this.cells[0].length && ship.takenCells[0].y - 1 + j >= 0) {
                        if (this.cells[ship.takenCells[0].x - 1 + i][ship.takenCells[0].y - 1 + j].status === Enums.CellStatusEnum.free) {
                            this.cells[ship.takenCells[0].x - 1 + i][ship.takenCells[0].y - 1 + j].status = Enums.CellStatusEnum.occupied;
                        }
                    }
                }
            }
        } else {
            for (let i = 0; i < ship.takenCells.length + 2; i++) {
                for (let j = 0; j < 3; j++) {
                    if (ship.takenCells[0].x - 1 + i < this.cells.length && ship.takenCells[0].x - 1 + i >= 0 && ship.takenCells[0].y - 1 + j < this.cells[0].length && ship.takenCells[0].y - 1 + j >= 0) {
                        if (this.cells[ship.takenCells[0].x - 1 + i][ship.takenCells[0].y - 1 + j].status === Enums.CellStatusEnum.free) {
                            this.cells[ship.takenCells[0].x - 1 + i][ship.takenCells[0].y - 1 + j].status = Enums.CellStatusEnum.occupied;
                        }
                    }
                }
            }
        }
    }


}