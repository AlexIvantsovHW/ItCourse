"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Generator = require("./class/Generator");
const Rules = require("./class/Rules");
const Table = require("./class/Table");
const Game = require("./class/Game");
const Validate = require("./Validate.js");
const argv = require("process.argv");
const args = process.argv.slice(2);
function main(args) {
    if ((0, Validate.getValid)(args)) {
        const moves = args;
        const generator = new Generator.default();
        const rules = new Rules.default(moves);
        const table = new Table.default(moves, rules);
        const game = new Game.default(moves, generator, rules, table);
        game.getResult();
    }
}
main(args);
