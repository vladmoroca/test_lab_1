import { Game } from "../src/game";
import fs from "fs"

jest.mock("fs");

describe("Game test", () => {
    const pathToFile = "../input.txt";
    it('should call Map.nextGeneration `generations` times', () => {
        const mockData = "5\n6 4\nx.....\n..x...\n..xx..\n.x....";
        fs.readFileSync.mockReturnValueOnce(mockData);
        const game = new Game(pathToFile)
        game.run()
        expect(game.map.map).toEqual([
            [0, 0, 1, 1, 1, 0],
            [0, 0, 1, 1, 1, 0],
            [0, 0, 1, 0, 1, 0],
            [0, 0, 1, 1, 1, 0]
          ])
      });
  });