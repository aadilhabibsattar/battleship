/**
 * @jest-environment jsdom
 */

import { DOM } from "../src/classes/dom.js";
import { Player, Computer } from "../src/classes/player.js";

describe("DOM class", () => {
    let dom, human, computer;

    beforeEach(() => {
        document.body.innerHTML = `
            <div class="winner-message"></div>
            <div class="game-over-screen hidden"></div>
        `;

        human = new Player();
        computer = new Computer();
        dom = new DOM(human, computer, jest.fn(), jest.fn());

        document.body.innerHTML = `
      <div class="player-1-ship-list"></div>
      <div class="player-2-ship-list"></div>
      <div class="winner-message"></div>
    `;
    });

    test("renderShipStatus updates container correctly", () => {
        const container = document.querySelector(".player-1-ship-list");
        dom.renderShipStatus(container, human);
        expect(container.children.length).toBe(human.shipLengths.length);
    });
});
