import fs from "fs";

export const readInput = (filePath) => {
    const data = fs.readFileSync(filePath, "utf8");
    const [generations, columns, rows] = data.match(/\d+/g).map(Number);
    const matrix = data.split("\n").slice(2).map((line) => line.replace(/\r/g, ''));
    let valid = matrix.length == rows
    matrix.map((row) => {
      if(row.length != columns) valid = false
    })
    if(!valid) throw new Error("invalid input")

    return {
      rows,
      columns,
      matrix,
      generations,
    };
  };