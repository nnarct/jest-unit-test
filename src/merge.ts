export const merge = ( collection1: number[], collection2: number[], collection3: number[]): number[] => {
  
  let mergedCollection: number[] = [];
  // concat three collections together
  mergedCollection = mergedCollection.concat(collection1).concat(collection2).concat(collection3);

  // define required variables
  const n: number = mergedCollection.length;
  let key: number;
  let j: number;

  // implement insertion sort
  for (let i = 1; i < n; i++) {
    key = mergedCollection[i];
    j = i - 1;
    while (j >= 0 && mergedCollection[j] > key) {
      mergedCollection[j + 1] = mergedCollection[j];
      j--;
    }
    mergedCollection[j + 1] = key;
  }

  return mergedCollection;
};
