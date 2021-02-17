/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/Ai.js":
/*!*******************!*\
  !*** ./src/Ai.js ***!
  \*******************/
/*! exports provided: Ai */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Ai\", function() { return Ai; });\n/* harmony import */ var _NumberGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NumberGenerator.js */ \"./src/NumberGenerator.js\");\n\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n //Класс \"ИИ\". Выбирает с вероятность 1/25 клетку с кораблем, либо же случайную клетку\n\nvar Ai = /*#__PURE__*/function () {\n  function Ai(props) {\n    _classCallCheck(this, Ai);\n\n    this.playerBoard = props.playerBoard;\n  }\n\n  _createClass(Ai, [{\n    key: \"makeTurn\",\n    value: function makeTurn() {\n      var random = _NumberGenerator_js__WEBPACK_IMPORTED_MODULE_0__[\"NumberGenerator\"].randomInteger(0, 25);\n\n      if (random === 0) {\n        for (;;) {\n          var x = _NumberGenerator_js__WEBPACK_IMPORTED_MODULE_0__[\"NumberGenerator\"].randomInteger(0, 9);\n          var y = _NumberGenerator_js__WEBPACK_IMPORTED_MODULE_0__[\"NumberGenerator\"].randomInteger(0, 9);\n\n          if (!this.playerBoard.cells[x][y].hitResut && this.playerBoard.cells[x][y].ship) {\n            this.playerBoard.cells[x][y].hit();\n            break;\n          }\n        }\n      } else {\n        for (;;) {\n          var _x = _NumberGenerator_js__WEBPACK_IMPORTED_MODULE_0__[\"NumberGenerator\"].randomInteger(0, 9);\n\n          var _y = _NumberGenerator_js__WEBPACK_IMPORTED_MODULE_0__[\"NumberGenerator\"].randomInteger(0, 9);\n\n          if (!this.playerBoard.cells[_x][_y].hitResut) {\n            this.playerBoard.cells[_x][_y].hit();\n\n            break;\n          }\n        }\n      }\n    }\n  }]);\n\n  return Ai;\n}();\n\n//# sourceURL=webpack:///./src/Ai.js?");

/***/ }),

/***/ "./src/BattleshipsGame.js":
/*!********************************!*\
  !*** ./src/BattleshipsGame.js ***!
  \********************************/
/*! exports provided: BattleshipsGame */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"BattleshipsGame\", function() { return BattleshipsGame; });\n/* harmony import */ var _Board_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Board.js */ \"./src/Board.js\");\n/* harmony import */ var _Ai_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Ai.js */ \"./src/Ai.js\");\n/* harmony import */ var _Enums_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Enums.js */ \"./src/Enums.js\");\n\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\n //Класс игры\n\nvar BattleshipsGame = /*#__PURE__*/function () {\n  function BattleshipsGame(props) {\n    _classCallCheck(this, BattleshipsGame);\n\n    this.ai = null;\n    this.playerBoard = null;\n    this.aiBoard = null;\n    this.turnOwner = props.firstTurnOwner;\n    this.playerName = props.playerName;\n    this.statusDiv = null;\n  }\n\n  _createClass(BattleshipsGame, [{\n    key: \"init\",\n    value: function init() {\n      var _this = this;\n\n      this.playerBoard = new _Board_js__WEBPACK_IMPORTED_MODULE_0__[\"Board\"](_Enums_js__WEBPACK_IMPORTED_MODULE_2__[\"Enums\"].BoardOwnerEnum.player, this);\n      this.playerBoard.insertBoardToDOM();\n      this.aiBoard = new _Board_js__WEBPACK_IMPORTED_MODULE_0__[\"Board\"](_Enums_js__WEBPACK_IMPORTED_MODULE_2__[\"Enums\"].BoardOwnerEnum.ai, this);\n      this.aiBoard.insertBoardToDOM();\n      this.playerBoard.generateShips();\n      this.aiBoard.generateShips();\n      this.ai = new _Ai_js__WEBPACK_IMPORTED_MODULE_1__[\"Ai\"]({\n        playerBoard: this.playerBoard\n      });\n      this.statusDiv = document.createElement(\"div\");\n      this.statusDiv.classList.add(\"status\");\n      this.statusDiv.innerHTML = \"\\u0425\\u043E\\u0434 \\u0438\\u0433\\u0440\\u043E\\u043A\\u0430 \".concat(this.turnOwner === _Enums_js__WEBPACK_IMPORTED_MODULE_2__[\"Enums\"].BoardOwnerEnum.player ? this.playerName : \"Компьютер\");\n      document.getElementById(\"app\").appendChild(this.statusDiv);\n\n      if (this.turnOwner === _Enums_js__WEBPACK_IMPORTED_MODULE_2__[\"Enums\"].BoardOwnerEnum.ai) {\n        setTimeout(function () {\n          _this.ai.makeTurn();\n        }, 500);\n      }\n    }\n  }, {\n    key: \"changeTurnOwner\",\n    value: function changeTurnOwner() {\n      var _this2 = this;\n\n      this.turnOwner = this.turnOwner === _Enums_js__WEBPACK_IMPORTED_MODULE_2__[\"Enums\"].BoardOwnerEnum.player ? _Enums_js__WEBPACK_IMPORTED_MODULE_2__[\"Enums\"].BoardOwnerEnum.ai : _Enums_js__WEBPACK_IMPORTED_MODULE_2__[\"Enums\"].BoardOwnerEnum.player;\n      this.statusDiv.innerHTML = \"\\u0425\\u043E\\u0434 \\u0438\\u0433\\u0440\\u043E\\u043A\\u0430 \".concat(this.turnOwner === _Enums_js__WEBPACK_IMPORTED_MODULE_2__[\"Enums\"].BoardOwnerEnum.player ? this.playerName : \"Компьютер\");\n\n      if (this.turnOwner === _Enums_js__WEBPACK_IMPORTED_MODULE_2__[\"Enums\"].BoardOwnerEnum.ai) {\n        setTimeout(function () {\n          _this2.ai.makeTurn();\n        }, 1000);\n      }\n    }\n  }, {\n    key: \"gameover\",\n    value: function gameover(loser) {\n      var _this3 = this;\n\n      this.turnOwner = \"\";\n      setTimeout(function () {\n        document.querySelectorAll('.playField').forEach(function (element) {\n          element.remove();\n        });\n        document.querySelectorAll('.status').forEach(function (element) {\n          element.remove();\n        });\n\n        _this3.showGameoverScreen(loser);\n      }, 1000);\n    }\n  }, {\n    key: \"showGameoverScreen\",\n    value: function showGameoverScreen(loser) {\n      var gameOverScreen = document.createElement(\"div\");\n      gameOverScreen.classList.add(\"gameoverScreen\");\n      gameOverScreen.innerHTML = \"<p class = \\\"gameover-text\\\">\\u0412\\u044B \".concat(loser === _Enums_js__WEBPACK_IMPORTED_MODULE_2__[\"Enums\"].BoardOwnerEnum.player ? \"проиграли!\" : \"победили!\", \"</p>\");\n      document.getElementById(\"app\").appendChild(gameOverScreen);\n    }\n  }]);\n\n  return BattleshipsGame;\n}();\n\n//# sourceURL=webpack:///./src/BattleshipsGame.js?");

/***/ }),

/***/ "./src/Board.js":
/*!**********************!*\
  !*** ./src/Board.js ***!
  \**********************/
/*! exports provided: Board */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Board\", function() { return Board; });\n/* harmony import */ var _NumberGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NumberGenerator.js */ \"./src/NumberGenerator.js\");\n/* harmony import */ var _Cell_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Cell.js */ \"./src/Cell.js\");\n/* harmony import */ var _Enums_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Enums.js */ \"./src/Enums.js\");\n/* harmony import */ var _Ship_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Ship.js */ \"./src/Ship.js\");\n\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\n\n //Класс игровой доски\n\nvar Board = /*#__PURE__*/function () {\n  function Board(owner, game) {\n    _classCallCheck(this, Board);\n\n    this.container = null;\n    this.cells = [];\n    this.ships = [];\n    this.owner = owner;\n    this.shipCount = 10;\n    this.game = game;\n  }\n\n  _createClass(Board, [{\n    key: \"insertBoardToDOM\",\n    value: function insertBoardToDOM() {\n      var parent = document.createElement(\"div\");\n      parent.classList.add(\"playField\");\n      var playerName = document.createElement(\"p\");\n\n      if (this.owner === _Enums_js__WEBPACK_IMPORTED_MODULE_2__[\"Enums\"].BoardOwnerEnum.player) {\n        playerName.innerHTML = this.game.playerName;\n      } else {\n        playerName.innerHTML = \"Компьютер\";\n      }\n\n      parent.appendChild(playerName);\n      document.getElementById(\"app\").appendChild(parent);\n      this.container = document.createElement(\"div\");\n      this.container.className = \"board\";\n      parent.appendChild(this.container);\n      this.cells = new Array(10);\n\n      for (var i = 0; i < this.cells.length; i++) {\n        this.cells[i] = new Array(10);\n      }\n\n      for (var _i = 0; _i < this.cells.length; _i++) {\n        for (var j = 0; j < this.cells[0].length; j++) {\n          this.cells[_i][j] = new _Cell_js__WEBPACK_IMPORTED_MODULE_1__[\"Cell\"](_i, j, this.game, this.owner);\n\n          this.cells[_i][j].insertCellToDOM(this.container);\n        }\n      }\n    }\n  }, {\n    key: \"generateShips\",\n    value: function generateShips() {\n      var shipCells = null;\n\n      for (var i = 0; i < 10; i++) {\n        // Создаем 1 четырёхпалбуный корабль, 2 двухпалубных итд.\n        if (i === 0) {\n          shipCells = this.chooseValidCells(4);\n        } else if (i > 0 && i < 3) {\n          shipCells = this.chooseValidCells(3);\n        } else if (i > 2 && i < 6) {\n          shipCells = this.chooseValidCells(2);\n        } else if (i > 5) {\n          shipCells = this.chooseValidCells(1);\n        }\n\n        this.instantiateShip(shipCells);\n      }\n    }\n  }, {\n    key: \"decreaseShipCount\",\n    value: function decreaseShipCount() {\n      this.shipCount--;\n\n      if (this.shipCount === 0) {\n        this.game.gameover(this.owner);\n      }\n    }\n  }, {\n    key: \"instantiateShip\",\n    value: function instantiateShip(shipCells) {\n      var ship = new _Ship_js__WEBPACK_IMPORTED_MODULE_3__[\"Ship\"]({\n        board: this,\n        takenCells: shipCells.cellsArray,\n        orientation: shipCells.orientation\n      });\n      ship.takenCells.forEach(function (element) {\n        element.ship = ship;\n        element.status = _Enums_js__WEBPACK_IMPORTED_MODULE_2__[\"Enums\"].CellStatusEnum.occupied;\n      });\n      this.occupyBorderCells(ship);\n      this.ships.push(ship);\n\n      if (this.owner === _Enums_js__WEBPACK_IMPORTED_MODULE_2__[\"Enums\"].BoardOwnerEnum.player) {\n        ship.insertShipToDOM();\n      }\n    }\n  }, {\n    key: \"chooseValidCells\",\n    value: function chooseValidCells(shipLength) {\n      for (;;) {\n        var x = _NumberGenerator_js__WEBPACK_IMPORTED_MODULE_0__[\"NumberGenerator\"].randomInteger(0, 9);\n        var y = _NumberGenerator_js__WEBPACK_IMPORTED_MODULE_0__[\"NumberGenerator\"].randomInteger(0, 9);\n        var orientation = _NumberGenerator_js__WEBPACK_IMPORTED_MODULE_0__[\"NumberGenerator\"].randomInteger(0, 1) === 0 ? _Enums_js__WEBPACK_IMPORTED_MODULE_2__[\"Enums\"].ShipOrientationEnum.Horizontal : _Enums_js__WEBPACK_IMPORTED_MODULE_2__[\"Enums\"].ShipOrientationEnum.Vertical;\n        var validCellsCounter = 0;\n\n        if (orientation === _Enums_js__WEBPACK_IMPORTED_MODULE_2__[\"Enums\"].ShipOrientationEnum.Horizontal) {\n          for (var i = 0; i < shipLength; i++) {\n            if (this.cells[x][y + i]) {\n              if (this.cells[x][y + i].status === _Enums_js__WEBPACK_IMPORTED_MODULE_2__[\"Enums\"].CellStatusEnum.free) {\n                validCellsCounter++;\n              }\n            }\n          }\n\n          if (validCellsCounter === shipLength) {\n            var cellsArray = [];\n\n            for (var _i2 = 0; _i2 < shipLength; _i2++) {\n              cellsArray.push(this.cells[x][y + _i2]);\n            }\n\n            return {\n              cellsArray: cellsArray,\n              orientation: orientation\n            };\n          } else {\n            continue;\n          }\n        } else {\n          for (var _i3 = 0; _i3 < shipLength; _i3++) {\n            if (x + _i3 < this.cells.length) {\n              if (this.cells[x + _i3][y].status === _Enums_js__WEBPACK_IMPORTED_MODULE_2__[\"Enums\"].CellStatusEnum.free) {\n                validCellsCounter++;\n              }\n            }\n          }\n\n          if (validCellsCounter === shipLength) {\n            var _cellsArray = [];\n\n            for (var _i4 = 0; _i4 < shipLength; _i4++) {\n              _cellsArray.push(this.cells[x + _i4][y]);\n            }\n\n            return {\n              cellsArray: _cellsArray,\n              orientation: orientation\n            };\n          } else {\n            continue;\n          }\n        }\n      }\n    }\n  }, {\n    key: \"occupyBorderCells\",\n    value: function occupyBorderCells(ship) {\n      if (ship.orientation === _Enums_js__WEBPACK_IMPORTED_MODULE_2__[\"Enums\"].ShipOrientationEnum.Horizontal) {\n        for (var i = 0; i < 3; i++) {\n          for (var j = 0; j < ship.takenCells.length + 2; j++) {\n            if (ship.takenCells[0].x - 1 + i < this.cells.length && ship.takenCells[0].x - 1 + i >= 0 && ship.takenCells[0].y - 1 + j < this.cells[0].length && ship.takenCells[0].y - 1 + j >= 0) {\n              if (this.cells[ship.takenCells[0].x - 1 + i][ship.takenCells[0].y - 1 + j].status === _Enums_js__WEBPACK_IMPORTED_MODULE_2__[\"Enums\"].CellStatusEnum.free) {\n                this.cells[ship.takenCells[0].x - 1 + i][ship.takenCells[0].y - 1 + j].status = _Enums_js__WEBPACK_IMPORTED_MODULE_2__[\"Enums\"].CellStatusEnum.occupied;\n              }\n            }\n          }\n        }\n      } else {\n        for (var _i5 = 0; _i5 < ship.takenCells.length + 2; _i5++) {\n          for (var _j = 0; _j < 3; _j++) {\n            if (ship.takenCells[0].x - 1 + _i5 < this.cells.length && ship.takenCells[0].x - 1 + _i5 >= 0 && ship.takenCells[0].y - 1 + _j < this.cells[0].length && ship.takenCells[0].y - 1 + _j >= 0) {\n              if (this.cells[ship.takenCells[0].x - 1 + _i5][ship.takenCells[0].y - 1 + _j].status === _Enums_js__WEBPACK_IMPORTED_MODULE_2__[\"Enums\"].CellStatusEnum.free) {\n                this.cells[ship.takenCells[0].x - 1 + _i5][ship.takenCells[0].y - 1 + _j].status = _Enums_js__WEBPACK_IMPORTED_MODULE_2__[\"Enums\"].CellStatusEnum.occupied;\n              }\n            }\n          }\n        }\n      }\n    }\n  }]);\n\n  return Board;\n}();\n\n//# sourceURL=webpack:///./src/Board.js?");

/***/ }),

/***/ "./src/Cell.js":
/*!*********************!*\
  !*** ./src/Cell.js ***!
  \*********************/
/*! exports provided: Cell */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Cell\", function() { return Cell; });\n/* harmony import */ var _Enums_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Enums.js */ \"./src/Enums.js\");\n\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n //Класс клетки игровой доски\n\nvar Cell = /*#__PURE__*/function () {\n  function Cell(x, y, game, owner) {\n    _classCallCheck(this, Cell);\n\n    this.container = null;\n    this.x = x;\n    this.y = y;\n    this.ship = null;\n    this.status = _Enums_js__WEBPACK_IMPORTED_MODULE_0__[\"Enums\"].CellStatusEnum.free;\n    this.hitResut = null;\n    this.game = game;\n    this.owner = owner;\n  }\n\n  _createClass(Cell, [{\n    key: \"insertCellToDOM\",\n    value: function insertCellToDOM(parent) {\n      this.container = document.createElement(\"div\");\n      this.container.className = \"cell\";\n      this.container.onclick = this.handleClick.bind(this);\n      parent.appendChild(this.container);\n    }\n  }, {\n    key: \"handleClick\",\n    value: function handleClick() {\n      window.cellClick(this);\n    }\n  }, {\n    key: \"hit\",\n    value: function hit() {\n      var _this = this;\n\n      if (this.ship) {\n        //Если попали по кораблю\n        this.ship.dealDamage();\n        this.hitResut = _Enums_js__WEBPACK_IMPORTED_MODULE_0__[\"Enums\"].CellHitResultEnum.damaged;\n        var cross = document.createElement(\"div\");\n        cross.classList.add(\"cross\");\n        this.container.appendChild(cross);\n\n        if (this.game.turnOwner === _Enums_js__WEBPACK_IMPORTED_MODULE_0__[\"Enums\"].BoardOwnerEnum.ai) {\n          setTimeout(function () {\n            _this.game.ai.makeTurn();\n          }, 500);\n        }\n      } else {\n        if (!this.hitResut) {\n          //Если клетка пуста, ставим в ней точку\n          this.hitResut = _Enums_js__WEBPACK_IMPORTED_MODULE_0__[\"Enums\"].CellHitResultEnum.miss;\n          var dot = document.createElement(\"div\");\n          dot.classList.add(\"dot\");\n          this.container.appendChild(dot);\n          this.game.changeTurnOwner();\n        }\n      }\n    }\n  }]);\n\n  return Cell;\n}();\n\n//# sourceURL=webpack:///./src/Cell.js?");

/***/ }),

/***/ "./src/Enums.js":
/*!**********************!*\
  !*** ./src/Enums.js ***!
  \**********************/
/*! exports provided: Enums */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Enums\", function() { return Enums; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nvar Enums = function Enums() {\n  _classCallCheck(this, Enums);\n};\n\n_defineProperty(Enums, \"CellStatusEnum\", {\n  occupied: \"occupied\",\n  free: \"free\"\n});\n\n_defineProperty(Enums, \"ShipOrientationEnum\", {\n  Horizontal: \"Horizontal\",\n  Vertical: \"Vertical\"\n});\n\n_defineProperty(Enums, \"BoardOwnerEnum\", {\n  player: \"player\",\n  ai: \"ai\"\n});\n\n_defineProperty(Enums, \"CellHitResultEnum\", {\n  damaged: \"damaged\",\n  miss: \"miss\"\n});\n\n_defineProperty(Enums, \"ShipStatusEnum\", {\n  alive: \"alive\",\n  dead: \"dead\"\n});\n\n//# sourceURL=webpack:///./src/Enums.js?");

/***/ }),

/***/ "./src/NumberGenerator.js":
/*!********************************!*\
  !*** ./src/NumberGenerator.js ***!
  \********************************/
/*! exports provided: NumberGenerator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"NumberGenerator\", function() { return NumberGenerator; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n//Класс с функцией генерации случайного числа\nvar NumberGenerator = /*#__PURE__*/function () {\n  function NumberGenerator() {\n    _classCallCheck(this, NumberGenerator);\n  }\n\n  _createClass(NumberGenerator, null, [{\n    key: \"randomInteger\",\n    value: function randomInteger(min, max) {\n      return Math.floor(min + Math.random() * (max + 1 - min));\n    }\n  }]);\n\n  return NumberGenerator;\n}();\n\n//# sourceURL=webpack:///./src/NumberGenerator.js?");

/***/ }),

/***/ "./src/Ship.js":
/*!*********************!*\
  !*** ./src/Ship.js ***!
  \*********************/
/*! exports provided: Ship */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Ship\", function() { return Ship; });\n/* harmony import */ var _Enums_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Enums.js */ \"./src/Enums.js\");\n\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n // Класс корабля\n\nvar Ship = /*#__PURE__*/function () {\n  function Ship(props) {\n    _classCallCheck(this, Ship);\n\n    this.container = null;\n    this.size = 0;\n    this.takenCells = props.takenCells;\n    this.board = props.board;\n    this.orientation = props.orientation;\n    this.hp = this.takenCells.length;\n    this.status = _Enums_js__WEBPACK_IMPORTED_MODULE_0__[\"Enums\"].ShipStatusEnum.alive;\n  }\n\n  _createClass(Ship, [{\n    key: \"insertShipToDOM\",\n    value: function insertShipToDOM() {\n      this.container = document.createElement(\"div\");\n      this.container.className = \"ship\";\n      this.container.style.top = this.takenCells[0].container.getBoundingClientRect().top + \"px\";\n      ;\n      this.container.style.left = this.takenCells[0].container.getBoundingClientRect().left + \"px\";\n      this.container.classList.add(\"ship\".concat(this.takenCells.length, \"Cells\").concat(this.orientation));\n      this.board.container.appendChild(this.container);\n    }\n  }, {\n    key: \"dealDamage\",\n    value: function dealDamage() {\n      this.hp--;\n\n      if (this.hp === 0) {\n        this.destroy();\n      }\n    }\n  }, {\n    key: \"destroy\",\n    value: function destroy() {\n      this.status = _Enums_js__WEBPACK_IMPORTED_MODULE_0__[\"Enums\"].ShipStatusEnum.dead;\n\n      if (!this.container) {\n        this.insertShipToDOM();\n      }\n\n      this.container.classList.add(\"deadShip\");\n      this.markBorderCells();\n      this.board.decreaseShipCount();\n    }\n  }, {\n    key: \"markBorderCells\",\n    value: function markBorderCells() {\n      //Пометить граничные с кораблем клетки при уничтожении корабля\n      if (this.orientation === _Enums_js__WEBPACK_IMPORTED_MODULE_0__[\"Enums\"].ShipOrientationEnum.Horizontal) {\n        for (var i = 0; i < 3; i++) {\n          for (var j = 0; j < this.takenCells.length + 2; j++) {\n            if (this.takenCells[0].x - 1 + i < this.board.cells.length && this.takenCells[0].x - 1 + i >= 0 && this.takenCells[0].y - 1 + j < this.board.cells[0].length && this.takenCells[0].y - 1 + j >= 0) {\n              if (this.board.cells[this.takenCells[0].x - 1 + i][this.takenCells[0].y - 1 + j].hitResut !== _Enums_js__WEBPACK_IMPORTED_MODULE_0__[\"Enums\"].CellHitResultEnum.miss && !this.board.cells[this.takenCells[0].x - 1 + i][this.takenCells[0].y - 1 + j].ship) {\n                var dot = document.createElement(\"div\");\n                dot.classList.add(\"dot\");\n                this.board.cells[this.takenCells[0].x - 1 + i][this.takenCells[0].y - 1 + j].container.appendChild(dot);\n                this.board.cells[this.takenCells[0].x - 1 + i][this.takenCells[0].y - 1 + j].hitResut = _Enums_js__WEBPACK_IMPORTED_MODULE_0__[\"Enums\"].CellHitResultEnum.miss;\n              }\n            }\n          }\n        }\n      } else {\n        for (var _i = 0; _i < this.takenCells.length + 2; _i++) {\n          for (var _j = 0; _j < 3; _j++) {\n            if (this.takenCells[0].x - 1 + _i < this.board.cells.length && this.takenCells[0].x - 1 + _i >= 0 && this.takenCells[0].y - 1 + _j < this.board.cells[0].length && this.takenCells[0].y - 1 + _j >= 0) {\n              if (this.board.cells[this.takenCells[0].x - 1 + _i][this.takenCells[0].y - 1 + _j].hitResut !== _Enums_js__WEBPACK_IMPORTED_MODULE_0__[\"Enums\"].CellHitResultEnum.miss && !this.board.cells[this.takenCells[0].x - 1 + _i][this.takenCells[0].y - 1 + _j].ship) {\n                var _dot = document.createElement(\"div\");\n\n                _dot.classList.add(\"dot\");\n\n                this.board.cells[this.takenCells[0].x - 1 + _i][this.takenCells[0].y - 1 + _j].container.appendChild(_dot);\n\n                this.board.cells[this.takenCells[0].x - 1 + _i][this.takenCells[0].y - 1 + _j].hitResut = _Enums_js__WEBPACK_IMPORTED_MODULE_0__[\"Enums\"].CellHitResultEnum.miss;\n              }\n            }\n          }\n        }\n      }\n    }\n  }]);\n\n  return Ship;\n}();\n\n//# sourceURL=webpack:///./src/Ship.js?");

/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Enums_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Enums.js */ \"./src/Enums.js\");\n/* harmony import */ var _BattleshipsGame_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BattleshipsGame.js */ \"./src/BattleshipsGame.js\");\n\n\n\n\nvar game;\n\nwindow.cellClick = function (cell) {\n  if (!cell.hitResut && game.turnOwner === _Enums_js__WEBPACK_IMPORTED_MODULE_0__[\"Enums\"].BoardOwnerEnum.player && cell.owner !== _Enums_js__WEBPACK_IMPORTED_MODULE_0__[\"Enums\"].BoardOwnerEnum.player) {\n    cell.hit();\n  }\n};\n\nwindow.startGameButton = function () {\n  if (game) {\n    //Есть не первая игра, удаляем сыгранное поле\n    if (game.playerBoard.container && game.aiBoard.container) {\n      document.querySelectorAll('.playField').forEach(function (element) {\n        element.remove();\n      });\n      document.querySelectorAll('.status').forEach(function (element) {\n        element.remove();\n      });\n      document.querySelectorAll('.gameoverScreen').forEach(function (element) {\n        element.remove();\n      });\n    }\n  }\n\n  var playerTurn = document.querySelector('input[name=\"turn\"]:checked').value;\n  var firstTurnOwner = playerTurn === \"first\" ? _Enums_js__WEBPACK_IMPORTED_MODULE_0__[\"Enums\"].BoardOwnerEnum.player : _Enums_js__WEBPACK_IMPORTED_MODULE_0__[\"Enums\"].BoardOwnerEnum.ai;\n  var playerName = document.querySelector('input[name=\"playerName\"]').value;\n  game = new _BattleshipsGame_js__WEBPACK_IMPORTED_MODULE_1__[\"BattleshipsGame\"]({\n    playerName: playerName,\n    firstTurnOwner: firstTurnOwner\n  });\n  game.init();\n};\n\n//# sourceURL=webpack:///./src/app.js?");

/***/ })

/******/ });