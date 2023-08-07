"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CliTable = require('cli-table');
class Table {
    constructor(moves, rules) {
        this.results = ['Draw!', 'Win!', 'Lose!'];
        this.moves = moves;
        this.rules = rules;
        this.table = this.getDesc();
    }
    getDesc() {
        const table = new CliTable();
        table.push(['Moves', ...this.moves]);
        this.moves.forEach((userMove) => {
            const row = this.getRow(userMove);
            table.push(row);
        });
        return table;
    }
    getRow(userMove) {
        const row = [userMove];
        const cells = this.moves.map((pcMove) => this.getCell(userMove, pcMove));
        row.push(...cells);
        return row;
    }
    getCell(userMove, pcMove) {const winner = this.rules.getWinner(userMove, pcMove);return this.results[winner];}
    printTable() {console.log(this.table.toString());}
}
exports.default = Table;
