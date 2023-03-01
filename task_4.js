function findMostFrequent(arr) {
    let frequency = {};
    let maxFrequency = 0;
    let maxElement;
  
    // Підрахунок кількості повторень кожного елементу в масиві
    for (let i = 0; i < arr.length; i++) {
      let element = arr[i];
      if (element in frequency) {
        frequency[element]++;
      } else {
        frequency[element] = 1;
      }
  
      // Перевірка, чи цей елемент має найбільшу частоту повторень на даний момент
      if (frequency[element] > maxFrequency) {
        maxFrequency = frequency[element];
        maxElement = element;
      }
    }
  
    return maxElement;
  }
  
  // Приклад використання
  let arr = [1, 2, 3, 2, 1, 3, 3, 2, 2];
  let mostFrequentElement = findMostFrequent(arr);
  console.log(mostFrequentElement); // виведе 2