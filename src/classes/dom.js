export class DOM {
    constructor(human, computer, startGame, removePlayer2Listeners) {
        this.human = human;
        this.computer = computer;
        this.startGame = startGame;
        this.removePlayer2Listeners = removePlayer2Listeners;

        this.newGameButton = document.querySelector(".new-game-button");
        this.startButton = document.querySelector(".start-button");
        this.gameOverScreen = document.querySelector(".game-over-screen");
        this.randomizeButton = document.querySelector(".randomize-button");
    }
    addPageEventListeners() {
        this.randomizeButton.addEventListener("click", () => {
            this.human.gameboard.clearShips(".player-1-gameboard");
            this.human.placeShips();
            this.human.gameboard.renderShips(".player-1-gameboard");
        });

        this.startButton.addEventListener("click", () => {
            this.randomizeButton.classList.add("invisible");
            this.startButton.classList.add("invisible");

            this.startGame();
        });
        this.removePlayer2Listeners();

        this.newGameButton.addEventListener("click", () => {
            location.reload();
            this.randomizeButton.classList.remove("invisible");
            this.startButton.classList.remove("invisible");
            this.gameOverScreen.classList.add("hidden");

            this.human.gameboard.clearShips(".player-1-gameboard");
            this.computer.gameboard.clearShips(".player-2-gameboard");

            this.human.placeShips();

            this.human.gameboard.renderShips(".player-1-gameboard");

            this.computer.gameboard.renderGrid(".player-2-gameboard");
            this.computer.gameboard.renderShips(".player-2-gameboard");

            this.removePlayer2Listeners();
            this.renderShipStatus(
                document.querySelector(".player-1-ship-list"),
                this.human
            );
            this.renderShipStatus(
                document.querySelector(".player-2-ship-list"),
                this.computer
            );
        });
    }

    displayGameOver() {
        this.gameOverScreen.classList.remove("hidden");
    }

    renderShipStatus(container, player) {
        container.innerHTML = "";
        if (player.gameboard.ships.length > 0) {
            player.gameboard.ships.forEach(({ ship }) => {
                const shipDiv = document.createElement("div");
                shipDiv.classList.add("ship-div");

                for (let i = 0; i < ship.length; i++) {
                    const segment = document.createElement("div");
                    segment.classList.add("ship-segment");

                    segment.style.backgroundColor = "";

                    if (ship.isSunk()) {
                        segment.style.backgroundColor = "#cf4f59ff";
                    }

                    shipDiv.appendChild(segment);
                }

                container.appendChild(shipDiv);
            });
        } else {
            player.shipLengths.forEach((length) => {
                const shipDiv = document.createElement("div");
                shipDiv.classList.add("ship-div");

                for (let i = 0; i < length; i++) {
                    const segment = document.createElement("div");
                    segment.classList.add("ship-segment");
                    shipDiv.appendChild(segment);
                }

                container.appendChild(shipDiv);
            });
        }
    }
}
