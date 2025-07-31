import "./styles/style.css";

import { Player, Computer } from "./classes/player";

const human = new Player();
const computer = new Computer();

human.placeShips();
computer.placeShips();

function createGrid(containerSelector) {
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

createGrid(".player-1-gameboard");
createGrid(".player-2-gameboard");

function renderShips(gameboard, containerSelector) {
    const container = document.querySelector(containerSelector);
    container
        .querySelectorAll(".cell")
        .forEach((cell) => cell.classList.remove("ship"));

    gameboard.ships.forEach(({ coordinates }) => {
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

renderShips(human.gameboard, ".player-1-gameboard");
