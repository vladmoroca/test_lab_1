import fs from "fs";

export const readInput = (filePath) => {
    const data = fs.readFileSync(filePath, "utf8");
    const [generations, columns, rows] = data.match(/\d+/g).map(Number);
    const matrix = data.split("\n").slice(2);
    let valid = matrix.length == rows
    console.log(matrix)
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