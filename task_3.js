function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
      let j = i - 1;
      let temp = arr[i];
      while (j >= 0 && arr[j] > temp) {
        arr[j + 1] = arr[j];
        j--;
      }
      arr[j + 1] = temp;
    }
    return arr;
  }

const unsortedArr = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
const sortedArr = insertionSort(unsortedArr);
console.log(sortedArr); // [1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9]