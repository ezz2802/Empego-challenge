import { calculateTotalPrice } from "../src/gardenGroups";

function test(input: string[], expected: number) {
  const grid = input.map(line => line.split(""));
  const result = calculateTotalPrice(grid);
  console.log(`Result: ${result}, Expected: ${expected}`);
  console.assert(result === expected, "❌ Test failed");
}

test([
  "AAAA",
  "BBCD",
  "BBCC",
  "EEEC"
], 140);

test([
  "OOOOO",
  "OXOXO",
  "OOOOO",
  "OXOXO",
  "OOOOO"
], 772);

test([
  "RRRRIICCFF",
  "RRRRIICCCF",
  "VVRRRCCFFF",
  "VVRCCCJFFF",
  "VVVVCJJCFE",
  "VVIVCCJJEE",
  "VVIIICJJEE",
  "MIIIIIJJEE",
  "MIIISIJEEE",
  "MMMISSJEEE"
], 1930);