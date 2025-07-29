import { Gameboard } from "./gameboard.js";

class Player {
    constructor() {
        this.gameboard = Gameboard();
        this.shipLengths = [5, 4, 3, 2, 1];
    }
}
