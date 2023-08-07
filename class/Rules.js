"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Results = require("../Results.js");
class Rules {
    constructor(moves) {
        this.moves = moves;
    }
    isValidMove(move) {
        const moveIndex = parseInt(move.toString());
        return this.isNumb(moveIndex) && this.isWithinRange(moveIndex);
    }
    isNumb(value) {
        return !isNaN(value);
    }
    isWithinRange(value) {
        return value >= 1 && value <= this.moves.length;
    }
    getWinner(userMove, pcMove) {
        const userIndx = this.moves.indexOf(userMove);
        const pcIndx = this.moves.indexOf(pcMove);
        const length = this.moves.length;
        switch (pcIndx) {
            case userIndx:
                return Results.Results.Draw;
            case (userIndx + 1) % length:
            case (userIndx + ~~(length / 2)) % length:
                return Results.Results.Lose;
            default:
                return Results.Results.Win;
        }
    }
}
exports.default = Rules;
