// Задание 1
// Напиши функцию logItems(array), которая получает массив и использует цикл for, который для каждого элемента массива будет выводить в консоль сообщение в формате[номер элемента]-[значение элемента].
// Нумерация должна начинаться с 1. К примеру для первого элемента массива['Mango', 'Poly', 'Ajax'] с индексом 0 будет выведено '1 - Mango', а для индекса 2 выведет '3 - Ajax'.
// const logItems = function (array) {
//   for (let i = 0; i < array.length; i += 1) {
//     console.log(`${i + 1} - `, array[i]);
//   }
// };

// // Вызовы функции для проверки работоспособности реализации
// logItems(["Mango", "Poly", "Ajax", "Lux", "Jay", "Kong"]);
// logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);
let result;
const getItemsString = function (array) {
  for (let i = 0; i < array.length; i += 1) {
    result = `${i + 1} - ${array[i]}`;
    result = array.join(", ");
    // console.log(result);
  }
  return result;
};
console.log(getItemsString(["Mango", "Poly", "Ajax", "Lux", "Jay", "Kong"]));
// Вызовы функции для проверки работоспособности реализации
// getItemsString(["Mango", "Poly", "Ajax", "Lux", "Jay", "Kong"]);
// getItemsString([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);
