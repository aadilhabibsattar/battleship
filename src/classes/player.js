import { Gameboard } from "./gameboard.js";

export class Player {
    constructor() {
        this.gameboard = new Gameboard();
        this.shipLengths = [5, 4, 3, 2, 1];
    }

    placeShips() {
        for (const length of this.shipLengths) {
            let placed = false;
            while (!placed) {
                try {
                    const position = [
                        [
                            Math.floor(Math.random() * 10),
                            Math.floor(Math.random() * 10),
                        ],
                        Math.random() < 0.5 ? "horizontal" : "vertical",
                    ];
                    this.gameboard.placeShip(position[0], length, position[1]);
                    placed = true;
                } catch {}
            }
        }
    }
}

export class Computer extends Player {
    constructor() {
        super();
        this.previousAttacks = new Set();
    }

    generateShipPosition() {
        let x = Math.floor(10 * Math.random());
        let y = Math.floor(10 * Math.random());
        let orientation = Math.random() < 0.5 ? "horizontal" : "vertical";

        return [[x, y], orientation];
    }

    placeShips() {
        for (const length of this.shipLengths) {
            let placed = false;
            while (!placed) {
                try {
                    const position = this.generateShipPosition();
                    this.gameboard.placeShip(position[0], length, position[1]);
                    placed = true;
                } catch {}
            }
        }
    }

    attack() {
        let key, x, y;

        do {
            x = Math.floor(Math.random() * 10);
            y = Math.floor(Math.random() * 10);
            key = `${x},${y}`;
        } while (this.previousAttacks.has(key));

        this.previousAttacks.add(key);
        return [x, y];
    }
}
