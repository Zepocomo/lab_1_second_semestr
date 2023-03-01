function insertString(originalString, stringToInsert, index) {
    if (index > originalString.length) {
      return originalString + stringToInsert;
    } else {
      return originalString.slice(0, index) + stringToInsert + originalString.slice(index);
    }
  }

result1 = insertString("Люблю політех ", "але не вставати на 1 пару", 17); 
result2 = insertString("Hello, world!", "beautiful ", 7); 

console.log(result1);
console.log(result2);

