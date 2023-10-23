import fs from "fs";

export const readInput = (filePath) => {
    const data = fs.readFileSync(filePath, "utf8");
    const [generations, columns, rows] = data.match(/\d+/g).map(Number);
    const matrix = data.split("\n").slice(2);
    return {
      rows,
      columns,
      matrix,
      generations,
    };
  };