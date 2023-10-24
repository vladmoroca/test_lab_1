import { writeOutput } from "../src/output";
import fs from "fs"

jest.mock('fs');

describe("writeOutput function", () => {
    it('should write the expected data to a file', () => {
        const test_map = [
            [1, 0, 1],
            [0, 1, 0],
            [1, 0, 1],
          ]
        const expectedData = 'x.x\n.x.\nx.x\n';

        writeOutput(test_map);
        expect(fs.writeFileSync).toHaveBeenCalledWith('output.txt', expectedData, 'utf-8');
      });
  });