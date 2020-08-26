// const mass = [22, 33, 44, 55, 66, 77];
// console.log(mass[2]); //44    - обращение к ел. мас. - вывод елемента
// console.log(mass.length); //6 - узанть длину масива (количество елементов)

// const lastIndex = mass.length - 1;
// console.table(lastIndex); //6   - вывод последнего индекса

// mass[2] = "wqwq"; //перезапись елемента массива
// console.table(mass);

// ПРИСВОЕГИЕ ПО ССЫЛКЕ И ЗНАЧЕНИЮ
// let a = 5;
// let b = 5;

// b = a;
// a = 10;
// console.log(a);
// console.log(b);

// let a = [1, 2, 3];
// let b = 5;

// b = a;
// a = 10;
// a = b;
// console.log(a);
// console.log(b);

// ПЕРЕБОР МАССИВА
// let friends = [11, 22, 33, 44, 55, 101, 202];

// for (let i = 0; i < friends.length; i += 1) {
//   friends[i] += `${i + 1}`; //изменение елемента
//   // console.log(`Индекс - `, i); // вывод индекса
//   // console.log("Елемент - ", friends[i]); // вывод елемента
// }
// console.table(friends);

// Если не нужен индекс или изменение елементов используем for...of
// for (const friend of friends) {
//   console.table(friend);
// }

// ЗАДАЧА 1
// Посчитать сумму покупок:
// const cart = [54, 28, 105, 70, 92, 17, 120];
// let total = 0;

// for (let i = 0; i < cart.length; i += 1) {
//   total += cart[i];
//   console.log(cart[i]);
// }
// console.log(`Total:`, total);

// Чеерез For...of
// for (const value of cart) {
//   total += cart[i];
// }
// console.log(`Total:`, total);

// ЗАДАЧА 2
// Увеличить сумму покупок на 20%
// const cart = [54, 28, 105, 70, 92, 17, 120];
// let total = 0;
// for (let value of cart) {
//   value = Math.round(value * 1.2); // с округлением значений
//   console.log(value);
// }

// ЗАДАЧА 2
// Подсчитать сумму всех четных чисел в массиве
// const numbers = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 11];
// let total = 0;

// for (let i = 0; i < numbers.length; i += 1) {
//   if (numbers[i] % 2 === 0) {
//     //Проверка на четность
//     console.log("Четное", numbers[i]);
//     total += numbers[i]; //Сложение четныъ чисел
//   }
// }
// console.log(`Total:`, total);

// 2.1 Чеерез For...of
// const numbers = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 11];
// let total = 0;
// for (const number of numbers) {
//   if (number % 2 === 0) {
//     console.log("Четное", number);
//     total += number;
//   }
// }
// console.log(`Total:`, total);

// 2.2 Логика от обратного
// const numbers = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 11];
// let total = 0;
// for (const number of numbers) {
//   if (number % 2 !== 0) {
//     continue;
//   }
//   console.log("Четное", number);
//   total += number;
// }
// console.log(`Total:`, total);

// ЗАДАЧА 3
// Написать скрипт поиска логина
const logins = ["sdfasdf", "sdfsreh", "hgfd45", "h224fdsd", "bnvnv"];
const loginYes = "hgfd45";
let message = `Логин ${loginYes} не найден`;

for (const login of logins) {
  if (login === loginYes) {
    message = `Логин ${login} найден`;
    break;
  }
  // message = "Логин не найден";
}
console.log(message);

// Через .includes()
console.log(logins.includes(loginYes));
