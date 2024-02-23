const { merge } = require("../src/merge");

describe("merge", () => {
  it("merges three sorted collections correctly", () => {
    const collection1 = [1, 3, 5];
    const collection2 = [2, 4, 6];
    const collection3 = [6, 4, 2];
    const merged = merge(collection1, collection2, collection3);
    expect(merged).toEqual([1, 2, 2, 3, 4, 4, 5, 6, 6]);
  });

  it("merges three sorted collections correctly including negative elements", () => {
    const collection1 = [-4, -3, -2, -1];
    const collection2 = [-512, -256, -128];
    const collection3 = [256, 128];
    const merged = merge(collection1, collection2, collection3);
    expect(merged).toEqual([-512, -256, -128, -4, -3, -2, -1, 128, 256]);
  });
  
});
