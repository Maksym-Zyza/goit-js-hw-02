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

// ЗАДАЧА 3
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

// ЗАДАЧА 4
// Написать скрипт поиска логина
// const logins = ["sdfasdf", "sdfsreh", "hgfd45", "h224fdsd", "bnvnv"];
// const loginYes = "hgfd45";
// let message = `Логин ${loginYes} не найден`;

// for (const login of logins) {
//   if (login === loginYes) {
//     message = `Логин ${login} найден`;
//     break;
//   }
//   // message = "Логин не найден";
// }
// console.log(message);

// ТЕРНАРНЫЙ ОПЕРАТОР
// const a = 15 < 10 ? `Да` : `Нет`;
// console.log(a);

// Через .includes() и Тернарный оператор
// const logins = ["sdfasdf", "sdfsreh", "hgfd45", "h224fdsd", "bnvnv"];
// const loginYes = "hgfd45";
// const message = logins.includes(loginYes)
//   ? `Логин ${loginYes} найден`
//   : `Логин ${loginYes} не найден`;
// console.log(message);

// ЗАДАЧА 5
// Написать скрипт поиска самого малинького числа в массиве, при условии что числа уникальные.
// const numbers = [51, 18, 13, 24, 7, 85, 19];
// let minNumber = numbers[0];

// for (const number of numbers) {
//   console.log(number);
//   if (number < minNumber) {
//     minNumber = number;
//   }
// }
// console.log(`Самое малинькое число: ${minNumber}`);

// ЗАДАЧА 6
// Написать скрипт который объединяет все элементы массива в однострочное значение, элементи сделать розделены ","
// const friends = [`Mango`, `Apple`, `Poly`, `Kiwi`, `Ajax`];
// let string = "";

// for (const frind of friends) {
//   string += frind + ",";
// }
// string = string.slice(0, string.length - 1);
// console.log(string);

// Метод join()
// const friends = [`Mango`, `Apple`, `Poly`, `Kiwi`, `Ajax`];
// const string = friends.join(", ");
// console.log(string);

// ЗАДАЧА 7
// Написать скрипт который заменит регистр каждоого символа в строке противоположным
// const string = "JavaScript";
// const letters = string.split("");
// let invertedString = "";

// console.log(letters);
// for (const letter of letters) {
//   console.log(letter);

//   // if (letter === letter.toLowerCase()) {
//   //   console.log("Эта буква в нижнем регистре");
//   //   invertedString += letter.toUpperCase();
//   // } else {
//   //   invertedString += letter.toLowerCase();
//   // }

//   // ТЕРНАРНИК
//   invertedString +=
//     letter === letter.toLowerCase()
//       ? letter.toUpperCase()
//       : letter.toLowerCase();
// }
// console.log(invertedString);

// ЗАДАЧА 8
// Написать slag в URL из  названия статти (нижний регистр с сшиванием)
// 1) Нормализируем строку
// 2) Разбиваем по словам
// 3) Сшиваем в строку с разделителями
// const title = "Top 10 benefits of React framework";
// const normalizrdTitle = title.toLowerCase();
// console.log(normalizrdTitle);

// const words = normalizrdTitle.split(" ");
// console.log(words);

// const slug = words.join("-");
// console.log(slug);

// Запись последовательных методов в одну строку:
// const title = "Top 10 benefits of React framework";
// const slug = title.toLowerCase().split(" ").join("-");
// console.log(slug);

// ЗАДАЧА 9
// Написать скрипт который считает сумму двух масивов
// const array1 = [5, 10, 15, 20];
// const array2 = [10, 20, 30];
// let total = 0;

// for (const ar1 of array1) {
//   total += ar1;
// }
// for (const ar2 of array2) {
//   total += ar2;
// }
// console.log(`Total:`, total);

// Метод .concat()
// const array1 = [5, 10, 15, 20];
// const array2 = [10, 20, 30];
// let total = 0;

// const array = array1.concat(array2);
// console.log(array);
// for (const ar of array) {
//   total += ar;
// }
// console.log(`Total:`, total);

// ЗАДАЧА 10
// Метод .splice() (удалить, добавить, обновить)

const cards = [
  "Карточка-1",
  "Карточка-2",
  "Карточка-3",
  "Карточка-4",
  "Карточка-5",
];
console.table(cards);

// const csrdToRemove = "Карточка-3";
// const index = cards.indexOf(csrdToRemove);
// console.log(index);

// Удалить карточку 3, 4 (по индексу)
// cards.splice(2, 2);
// console.table(cards);

// Добачить "Карточку-6", "Карточку-7" между карточкой 2 и 3 (по индексу)
cards.splice(2, 0, "Карточка-6", "Карточка-7");
console.table(cards);

// Обновить: "Карточку-4" заменить на "Карточку-101"  (по индексу)
cards.splice(5, 1, "Карточку-101");
console.table(cards);
