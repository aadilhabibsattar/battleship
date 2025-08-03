import "./styles/style.css";

import { Player, Computer } from "./classes/player";

const human = new Player();
const computer = new Computer();

human.gameboard.renderGrid(".player-1-gameboard");
computer.gameboard.renderGrid(".player-2-gameboard");

human.placeShips();

human.gameboard.renderShips(".player-1-gameboard");

const winnerMsg = document.querySelector(".winner-message");

const player2Cells = document.querySelectorAll(".player-2-gameboard > .cell");

function startGame() {
    computer.gameboard.renderShips(".player-2-gameboard");
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

            if (human.gameboard.areAllShipsSunk()) {
                displayGameOver();
                winnerMsg.textContent = "Computer Won!";
                computer.gameboard.renderShips(".player-2-gameboard");
            } else if (computer.gameboard.areAllShipsSunk()) {
                displayGameOver();
                winnerMsg.textContent = "You won!";
            }

            cell.style.pointerEvents = "none";
            computerAttack();
        });
    });
}

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

const gameOverScreen = document.querySelector(".game-over-screen");

function displayGameOver() {
    gameOverScreen.classList.remove("hidden");
}

const startButton = document.querySelector(".start-button");
startButton.addEventListener("click", () => {
    randomizeButton.classList.add("invisible");
    startButton.classList.add("invisible");

    computer.placeShips();
    startGame();
});

const newGameButton = document.querySelector(".new-game-button");
newGameButton.addEventListener("click", () => {
    randomizeButton.classList.remove("invisible");
    startButton.classList.remove("invisible");
    gameOverScreen.classList.add("hidden");

    human.gameboard.clearShips(".player-1-gameboard");
    computer.gameboard.clearShips(".player-2-gameboard");
    human.placeShips();
    human.gameboard.renderShips(".player-1-gameboard");
});
