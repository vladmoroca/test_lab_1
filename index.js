import { Game } from "./src/game.js";
import { writeOutput } from "./src/output.js";

(() => {
    const pathToFile = "./input.txt";
    const game = new Game(pathToFile);
    game.run()
    writeOutput(game.map.map)
  })();