export class Map {
    constructor(input) {
      this.rows = input.rows;
      this.columns = input.columns;
      this.map = this.mapParser(input.matrix);
    }

    mapParser(matrix) {
      const map = matrix.map((row) =>
        row.split("").map((cell) => {
          switch (cell) {
            case "x":
              return 1;
            case ".":
              return 0;
            default:
              return null;
          }
        }).filter((cell) => cell !== null)
      );
      return map;
    }

    neighborCheck(y, x) {
      let neighborNum = 0;
      for (let i = y - 1; i <= y + 1; i++) {
        for (let j = x - 1; j <= x + 1; j++) {
          if (i === y && j === x) continue;
          const rowIndex = (i + this.rows) % this.rows;
          const colIndex = (j + this.columns) % this.columns;
          if (this.map[rowIndex][colIndex]) {
            neighborNum++;
          }
        }
      }
      return neighborNum;
    }
    nextGeneration(){
      const nextMap = this.map.map(row => row.slice());

      for (let i = 0; i < this.rows; i++) {
        for (let j = 0; j < this.columns; j++) {
          const neighborNum = this.neighborCheck(i, j)
          if(neighborNum == 3){
            nextMap[i][j] = 1
          }
          if(neighborNum < 2 || neighborNum > 3){
            nextMap[i][j] = 0
          }
        }
      }
      this.map = nextMap
    }
  }
  