import { Computer } from "../src/classes/player.js";

describe("Computer class", () => {
    let computer;

    beforeEach(() => {
        computer = new Computer();
    });

    test("initializes with empty previousAttacks, previousHits, possibleTargets, and null orientation", () => {
        expect(computer.previousAttacks.size).toBe(0);
        expect(computer.previousHits).toEqual([]);
        expect(computer.possibleTargets).toEqual([]);
        expect(computer.orientation).toBeNull();
    });

    test("generateShipPosition returns valid coordinates and orientation", () => {
        const [pos, orient] = computer.generateShipPosition();
        expect(pos[0]).toBeGreaterThanOrEqual(0);
        expect(pos[0]).toBeLessThan(10);
        expect(pos[1]).toBeGreaterThanOrEqual(0);
        expect(pos[1]).toBeLessThan(10);
        expect(["horizontal", "vertical"]).toContain(orient);
    });

    test("places all ships without error", () => {
        expect(() => computer.placeShips()).not.toThrow();
        expect(computer.gameboard.ships.length).toBe(
            computer.shipLengths.length
        );
    });

    test("attack returns coordinates not previously attacked", () => {
        // Simulate previous attacks to fill some coordinates
        computer.previousAttacks.add("0,0");
        computer.previousAttacks.add("1,1");

        const attackPos = computer.attack();
        const key = `${attackPos[0]},${attackPos[1]}`;
        expect(computer.previousAttacks.has(key)).toBe(true);
        expect(key).not.toBe("0,0");
        expect(key).not.toBe("1,1");
    });

    test("processAttackResult adds adjacent targets when hit and not sunk", () => {
        // Initially no orientation or targets
        computer.processAttackResult([5, 5], true, false);
        expect(computer.previousHits).toContainEqual([5, 5]);
        expect(computer.possibleTargets.length).toBeGreaterThan(0);
    });

    test("processAttackResult resets hits and targets on ship sunk", () => {
        computer.previousHits = [
            [5, 5],
            [5, 6],
        ];
        computer.possibleTargets = [
            [5, 7],
            [5, 8],
        ];
        computer.orientation = "vertical";

        computer.processAttackResult([5, 6], true, true);

        expect(computer.previousHits).toEqual([]);
        expect(computer.possibleTargets).toEqual([]);
        expect(computer.orientation).toBeNull();
    });

    test("addAdjacentTargets only adds valid targets and avoids duplicates", () => {
        computer.previousAttacks.add("4,5");
        computer.addAdjacentTargets(5, 5);

        // Should add adjacent cells except for 4,5
        expect(computer.possibleTargets).toEqual(
            expect.arrayContaining([
                [5, 6],
                [5, 4],
                [6, 5],
                // [-1, 0] from 5,5 is out of bounds so not included
            ])
        );
        expect(computer.possibleTargets).not.toContainEqual([4, 5]);
    });
});
