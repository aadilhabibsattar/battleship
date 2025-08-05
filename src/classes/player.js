import { Gameboard } from "./gameboard.js";

export class Player {
    constructor() {
        this.gameboard = new Gameboard();
        this.shipLengths = [5, 4, 4, 3, 3, 2, 2];
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

    renderShipStatus(container) {
        container.innerHTML = "";

        for (const length of this.shipLengths) {
            const shipDiv = document.createElement("div");

            for (let i = 0; i < length; i++) {
                const shipSegment = document.createElement("div");
                shipDiv.append(shipSegment);
            }
            container.append(shipDiv);
        }
    }
}

export class Computer extends Player {
    constructor() {
        super();
        this.previousAttacks = new Set();
        this.previousHits = [];
        this.possibleTargets = [];
        this.orientation = null;
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
        if (this.possibleTargets.length > 0) {
            return this.possibleTargets.pop();
        }

        let key, x, y;

        do {
            x = Math.floor(Math.random() * 10);
            y = Math.floor(Math.random() * 10);
            key = `${x},${y}`;
        } while (this.previousAttacks.has(key));

        this.previousAttacks.add(key);
        return [x, y];
    }

    processAttackResult([x, y], wasHit, wasSunk) {
        if (wasHit) {
            this.previousHits.push([x, y]);

            if (this.previousHits.length >= 2) {
                const [first, second] = this.previousHits;
                if (first[0] === second[0]) {
                    this.orientation = "vertical";
                } else if (first[1] === second[1]) {
                    this.orientation = "horizontal";
                }
            }

            if (!wasSunk) {
                this.addAdjacentTargets(x, y);
            } else {
                this.previousHits = [];
                this.possibleTargets = [];
                this.orientation = null;
            }
        }
    }

    addAdjacentTargets(x, y) {
        let directions;
        if (this.orientation === "horizontal") {
            directions = [
                [1, 0],
                [-1, 0],
            ];
        } else if (this.orientation === "vertical") {
            directions = [
                [0, 1],
                [0, -1],
            ];
        } else {
            directions = [
                [1, 0],
                [-1, 0],
                [0, 1],
                [0, -1],
            ];
        }

        for (const [dx, dy] of directions) {
            const newX = x + dx;
            const newY = y + dy;

            if (newX >= 0 && newX < 10 && newY >= 0 && newY < 10) {
                const key = `${newX},${newY}`;
                if (!this.previousAttacks.has(key)) {
                    this.possibleTargets.push([newX, newY]);
                    this.previousAttacks.add(key);
                }
            }
        }
    }
}
