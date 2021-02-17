"use strict";
import {Enums} from "./Enums.js";
//Класс клетки игровой доски
export class Cell {
    constructor(x, y, game, owner) {
        this.container = null;
        this.x = x;
        this.y = y;
        this.ship = null;
        this.status = Enums.CellStatusEnum.free;
        this.hitResut = null;
        this.game = game;
        this.owner = owner;
    }
    insertCellToDOM(parent) {
        this.container = document.createElement("div");
        this.container.className = "cell";
        this.container.onclick = this.handleClick.bind(this);
        parent.appendChild(this.container);

    }

    handleClick() {
        window.cellClick(this);
    }

    hit() {
        if (this.ship) { //Если попали по кораблю
            this.ship.dealDamage();
            this.hitResut = Enums.CellHitResultEnum.damaged;
            let cross = document.createElement("div");
            cross.classList.add("cross");
            this.container.appendChild(cross);
            if(this.game.turnOwner===Enums.BoardOwnerEnum.ai){
                setTimeout(()=>{this.game.ai.makeTurn()},500);
            }
        }
        else {
            if (!this.hitResut) { //Если клетка пуста, ставим в ней точку
                this.hitResut = Enums.CellHitResultEnum.miss;
                let dot = document.createElement("div");
                dot.classList.add("dot");
                this.container.appendChild(dot);
                this.game.changeTurnOwner();
            }


        }

    }
}