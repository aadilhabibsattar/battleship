import { Player } from "../src/classes/player";

describe("Player class", () => {
    let player;

    beforeEach(() => {
        player = new Player();
    });

    test("places all ships without errors", () => {
        expect(() => player.placeShips()).not.toThrow();
        expect(player.gameboard.ships.length).toBe(player.shipLengths.length);
    });

    test("shipLengths array matches expected lengths", () => {
        expect(player.shipLengths).toEqual([5, 4, 4, 3, 3, 2, 2]);
    });
});
