import fs from "fs"
import { readInput } from "../src/input.js";

jest.mock("fs");

describe("readInput function", () => {
  const pathToFile = "../input.txt";

  it("reads and parses valid input file correctly", () => {
    const mockData = "8\n6 6\n......\n...x..\n..xx..\n..xx..\n...x..\n......";
    fs.readFileSync.mockReturnValueOnce(mockData);

    const result = readInput(pathToFile);
    expect(result).toEqual({
      rows: 6,
      columns: 6,
      generations: 8,
      matrix: ["......", "...x..", "..xx..", "..xx..", "...x..","......"],
    });
  })

  it("throws an error for invalid input(columns)", () => {
    const mockData = "3 4 2\n....\n....\n";
    fs.readFileSync.mockReturnValueOnce(mockData);

    expect(() => {
      readInput("invalidInput.txt");
    }).toThrow("invalid input");
  });

  it("throws an error for invalid input(rows)", () => {
    const mockData = "3 4 2\n......\n......\n";
    fs.readFileSync.mockReturnValueOnce(mockData);

    expect(() => {
      readInput("invalidInput.txt");
    }).toThrow("invalid input");
  });

});