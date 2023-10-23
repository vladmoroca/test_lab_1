import fs from "fs";

export const writeOutput = (map) =>{
    const matrix = map.map((row) => row.map((element) => (element === 1 ? "x" : ".")));
    const data = matrix.map((row) => row.join("")).join("\n") + "\n";
    fs.writeFileSync("output.txt", data, "utf-8");
}
