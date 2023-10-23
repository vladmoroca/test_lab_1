import fs from "fs"
import { readInput } from "../src/input.js";

jest.mock("fs");

describe("readInput function", () => {
  const pathToFile = "../input.txt";
  it("reads and parses valid input file correctly", () => {
    const mockData = "8\n6 6\n......\n...xx.\n..xx..\n..xx..\n...x..\n......";
    fs.readFileSync.mockReturnValueOnce(mockData);

    const result = readInput(pathToFile);
    expect(result).toEqual({
      rows: 6,
      columns: 6,
      generations: 8,
      matrix: ["......", "....x.", "..xx..", "..xx..", "...x..","......"],
    });
  })
});