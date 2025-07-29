import { Ship } from "../src/ship.js";

describe("Ship class", () => {
    test("ship tracks hits correctly", () => {
        const ship = new Ship(3);
        ship.hit();
        expect(ship.hits).toBe(1);
        ship.hit();
        expect(ship.hits).toBe(2);
    });

    test("Ship is not sunk until enough hits", () => {
        const ship = new Ship(2);
        ship.hit();
        expect(ship.isSunk()).toBe(false);
        ship.hit();
        expect(ship.isSunk()).toBe(true);
    });

    test("Ship of length 1 sinks after one hit", () => {
        const ship = new Ship(1);
        ship.hit();
        expect(ship.isSunk()).toBe(true);
    });
});
