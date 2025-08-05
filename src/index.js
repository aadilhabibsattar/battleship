import "./styles/style.css";
import { Player, Computer } from "./classes/player";
import { DOM } from "./classes/dom";

const human = new Player();
const computer = new Computer();

const player1ShipList = document.querySelector(".player-1-ship-list");
const player2ShipList = document.querySelector(".player-2-ship-list");

function initialSetup() {
    human.gameboard.renderGrid(".player-1-gameboard");
    computer.gameboard.renderGrid(".player-2-gameboard");

    human.placeShips();
    human.gameboard.renderShips(".player-1-gameboard");

    dom.renderShipStatus(player1ShipList, human);
    dom.renderShipStatus(player2ShipList, computer);
}

function cellClickHandler(event) {
    playTurn(event.currentTarget);
}
function addPlayer2Listeners() {
    document.querySelectorAll(".player-2-gameboard > .cell").forEach((cell) => {
        cell.removeEventListener("click", cellClickHandler);
        cell.addEventListener("click", cellClickHandler);
    });
}

function removePlayer2Listeners() {
    document
        .querySelectorAll(".player-2-gameboard > .cell")
        .forEach((cell) => cell.removeEventListener("click", cellClickHandler));
}

function playTurn(cell) {
    const winnerMsg = document.querySelector(".winner-message");

    humanAttack(cell);
    if (computer.gameboard.areAllShipsSunk()) {
        dom.displayGameOver();
        winnerMsg.textContent = "You won!";
        removePlayer2Listeners();
        return;
    }

    computerAttack();
    if (human.gameboard.areAllShipsSunk()) {
        dom.displayGameOver();
        winnerMsg.textContent = "Computer Won!";
        computer.gameboard.renderShips(".player-2-gameboard");
        removePlayer2Listeners();
        return;
    }
}

function startGame() {
    removePlayer2Listeners();

    computer.gameboard = new Computer().gameboard;
    computer.previousAttacks.clear();
    computer.previousHits = [];
    computer.possibleTargets = [];
    computer.orientation = null;

    computer.placeShips();
    addPlayer2Listeners();
}

function computerAttack() {
    const [compX, compY] = computer.attack();
    const attackedCell = document.querySelector(
        `.player-1-gameboard .cell[data-x="${compX}"][data-y="${compY}"]`
    );
    const wasHit = human.gameboard.receiveAttack([compX, compY]);
    const wasSunk = wasHit && human.gameboard.wasShipSunkAt([compX, compY]);

    if (wasHit) {
        attackedCell.classList.add("hit");
    } else {
        attackedCell.classList.add("miss");
    }

    computer.processAttackResult([compX, compY], wasHit, wasSunk);
    dom.renderShipStatus(player1ShipList, human);
}

function humanAttack(cell) {
    const x = parseInt(cell.dataset.x);
    const y = parseInt(cell.dataset.y);
    const wasHit = computer.gameboard.receiveAttack([x, y]);

    if (wasHit === null) return;

    if (wasHit) {
        cell.classList.add("hit");
    } else {
        cell.classList.add("miss");
    }

    dom.renderShipStatus(player2ShipList, computer);
}

const dom = new DOM(human, computer, startGame, removePlayer2Listeners);
initialSetup();
dom.addPageEventListeners();
