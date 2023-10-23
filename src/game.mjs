import { Map } from "./map.mjs"
import { readInput } from "./input.mjs"

export class Game {
    constructor(FilePath){
       this.config = readInput(FilePath)
       this.map = new Map(this.config)
    }

    run() {
        for(let i = this.config.generations; i > 0; i--){
            this.map.nextGeneration()
        }
    }
}