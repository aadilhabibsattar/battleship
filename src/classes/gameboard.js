import { Ship } from "./ship.js";

export class Gameboard {
    constructor() {
        this.size = [10, 10];
        this.ships = [];
        this.missedShotCoordinates = [];
    }

    isWithinBounds(x, y) {
        return x >= 0 && y >= 0 && x < this.size[0] && y < this.size[1];
    }

    isOccupied(x, y) {
        return this.ships.some(({ coordinates }) =>
            coordinates.some(([cx, cy]) => cx === x && cy === y)
        );
    }

    placeShip(startCoord, length, orientation = "horizontal") {
        const [startX, startY] = startCoord;
        const coordinates = [];

        for (let i = 0; i < length; i++) {
            const x = orientation === "horizontal" ? startX + i : startX;
            const y = orientation === "vertical" ? startY + i : startY;

            if (!this.isWithinBounds(x, y) || this.isOccupied(x, y)) {
                throw new Error("Invalid ship placement");
            }

            coordinates.push([x, y]);
        }

        const ship = new Ship(length);
        const hitCoordinates = [];
        this.ships.push({ ship, coordinates, hitCoordinates });
    }

    receiveAttack([x, y]) {
        let hit = false;
        for (const shipData of this.ships) {
            const { ship, coordinates, hitCoordinates } = shipData;
            for (const [cx, cy] of coordinates) {
                if (cx === x && cy === y) {
                    ship.hit();
                    hitCoordinates.push([x, y]);
                    hit = true;
                    break;
                }
            }
            if (hit) break;
        }

        if (!hit) {
            this.missedShotCoordinates.push([x, y]);
        }

        return hit;
    }

    areAllShipsSunk() {
        return this.ships.every(({ ship }) => ship.isSunk());
    }

    renderGrid(containerSelector) {
        const container = document.querySelector(containerSelector);
        container.innerHTML = "";
        for (let y = 0; y < 10; y++) {
            for (let x = 0; x < 10; x++) {
                const cell = document.createElement("div");
                cell.classList.add("cell");
                cell.dataset.x = x;
                cell.dataset.y = y;
                container.appendChild(cell);
            }
        }
    }

    renderShips(containerSelector) {
        const container = document.querySelector(containerSelector);
        container
            .querySelectorAll(".cell")
            .forEach((cell) => cell.classList.remove("ship"));

        this.ships.forEach(({ coordinates }) => {
            coordinates.forEach(([x, y]) => {
                const cell = container.querySelector(
                    `.cell[data-x="${x}"][data-y="${y}"]`
                );
                if (cell) {
                    cell.classList.add("ship");
                }
            });
        });
    }
}
