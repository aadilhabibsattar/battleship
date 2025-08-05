import { Gameboard } from "../src/classes/gameboard.js";

describe("Gameboard class", () => {
    let board;

    beforeEach(() => {
        board = new Gameboard();
    });

    test("places a ship at valid coordinates", () => {
        board.placeShip([0, 0], 2, "horizontal");
        expect(board.ships.length).toBe(1);
        expect(board.ships[0].coordinates).toEqual([
            [0, 0],
            [1, 0],
        ]);
    });

    test("throws error for invalid ship placement (out of bounds)", () => {
        expect(() => board.placeShip([9, 0], 3, "horizontal")).toThrow(
            "Invalid ship placement"
        );
    });

    test("throws error for overlapping ship placement", () => {
        board.placeShip([0, 0], 2, "horizontal");
        expect(() => board.placeShip([1, 0], 2, "vertical")).toThrow(
            "Invalid ship placement"
        );
    });

    test("registers a hit on a ship", () => {
        board.placeShip([0, 0], 2, "horizontal");
        board.receiveAttack([0, 0]);
        expect(board.ships[0].ship.hits).toBe(1);
    });

    test("registers a missed shot", () => {
        board.placeShip([0, 0], 2, "horizontal");
        board.receiveAttack([5, 5]);
        expect(board.missedShotCoordinates).toContainEqual([5, 5]);
    });

    test("detects when all ships are sunk", () => {
        board.placeShip([0, 0], 2, "horizontal");
        board.receiveAttack([0, 0]);
        board.receiveAttack([1, 0]);
        expect(board.areAllShipsSunk()).toBe(true);
    });

    test("detects when not all ships are sunk", () => {
        board.placeShip([0, 0], 2, "horizontal");
        board.receiveAttack([0, 0]);
        expect(board.areAllShipsSunk()).toBe(false);
    });
});
