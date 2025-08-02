import "./styles/style.css";

import { Player, Computer } from "./classes/player";

const human = new Player();
const computer = new Computer();

human.gameboard.renderGrid(".player-1-gameboard");
computer.gameboard.renderGrid(".player-2-gameboard");

human.placeShips();
computer.placeShips();

human.gameboard.renderShips(".player-1-gameboard");

const player2Cells = document.querySelectorAll(".player-2-gameboard > .cell");
player2Cells.forEach((cell) => {
    cell.addEventListener("click", () => {
        const x = parseInt(cell.dataset.x);
        const y = parseInt(cell.dataset.y);
        const wasHit = computer.gameboard.receiveAttack([x, y]);

        if (wasHit) {
            cell.classList.add("hit");
        } else {
            cell.classList.add("miss");
        }

        cell.style.pointerEvents = "none";
        computerAttack();
    });
});

function computerAttack() {
    const [compX, compY] = computer.attack();
    const attackedCell = document.querySelector(
        `.player-1-gameboard .cell[data-x="${compX}"][data-y="${compY}"]`
    );
    const wasHit = human.gameboard.receiveAttack([compX, compY]);

    if (wasHit) {
        attackedCell.classList.add("hit");
    } else {
        attackedCell.classList.add("miss");
    }
}

const randomizeButton = document.querySelector(".randomize-button");
randomizeButton.addEventListener("click", () => {
    human.gameboard.clearShips(".player-1-gameboard");
    human.placeShips();
    human.gameboard.renderShips(".player-1-gameboard");
});

human.renderShipStatus(document.querySelector(".player-1-ship-list"));
computer.renderShipStatus(document.querySelector(".player-2-ship-list"));
