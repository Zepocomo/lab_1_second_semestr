function daysSinceStartOfYear() {
    const now = new Date(); // Поточна дата та час
    const startOfYear = new Date(now.getFullYear(), 0, 1); // Початок поточного року
    const millisecondsPerDay = 24 * 60 * 60 * 1000; // Кількість мілісекунд в дні
  
    // Розрахунок кількості днів від початку року до поточної дати
    const diffMilliseconds = now.getTime() - startOfYear.getTime();
    const diffDays = Math.floor(diffMilliseconds / millisecondsPerDay);
  
    return diffDays;
  }

const days = daysSinceStartOfYear();
console.log(days); // Виведе кількість днів, яка пройшла від початку року