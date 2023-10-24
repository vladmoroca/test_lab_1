import { Map } from "../src/map";

describe("Map", () => {
    let map;
    const testConfig = {
      rows: 5,
      columns: 8,
      matrix: [ '........', '..x.....', '..x.....', '..x.....', '........' ],
      generations: 5
    }

    beforeEach(() => {
      map = new Map(testConfig);
    });

    test("Map parser work", () => {
      expect(map.map).toEqual([
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 1, 0, 0, 0, 0, 0],
        [0, 0, 1, 0, 0, 0, 0, 0],
        [0, 0, 1, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0]
      ])
    })

    test("correct initialization", () => {
        expect(map.rows).toEqual(5);
        expect(map.columns).toEqual(8);
      });

    test("neighbor check", () => {
      expect(map.neighborCheck(1, 1)).toEqual(2);
      expect(map.neighborCheck(4, 4)).toEqual(0);
    });

    test("Next generation", () => {
      map.nextGeneration()
      expect(map.map).toEqual([
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 1, 1, 1, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0]
      ]);
    });


    
})