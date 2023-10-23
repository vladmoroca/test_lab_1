import { Game } from "./src/game.mjs";
import { writeOutput } from "./src/output.mjs";

(() => {
    const pathToFile = "./input.txt";
    const game = new Game(pathToFile);
    game.run()
    writeOutput(game.map.map)
  })();