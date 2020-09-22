// Задание 4
// Напиши функцию formatString(string) которая принимает строку и форматирует ее если необходимо.
// Если длина строки не превышает 40 символов, функция возвращает ее в исходном виде.
// Если длина больше 40 символов, то функция обрезает строку до 40 - ка символов и добавляет в конец строки троеточие '...', после чего возвращает укороченную версию.

// const formatString = function (string) {
//   const lengthString = string.split("");
//   let newString = "";

//   newString = lengthString.slice(0, 40).join("");
//   //   console.log(lengthString.length);

//   if (lengthString.length > 40) {
//     newString = `${string.slice(0, 40)}...`;
//   }

//   return newString;
// };

// /*
//  * Вызовы функции для проверки работоспособности твоей реализации.
//  */
// console.log(formatString("Curabitur ligula sapien, tincidunt non."));
// // вернется оригинальная строка

// console.log(formatString("Vestibulum facilisis, purus nec pulvinar iaculis."));
// // вернется форматированная строка

// console.log(formatString("Curabitur ligula sapien."));
// // вернется оригинальная строка

// console.log(
//   formatString(
//     "Nunc sed turpis. Curabitur a felis in nunc fringilla tristique."
//   )
// );
// вернется форматированная строка

// Задание 4/2
// function formatString(string, maxLength = 40) {
//   // Write code under this line
//   const lengthString = string.split("");
//   let newString = "";

//   newString = lengthString.slice(0, maxLength).join("");
//   //   console.log(lengthString.length);

//   if (lengthString.length > maxLength) {
//     newString = `${string.slice(0, maxLength)}...`;
//   }

//   return newString;
// }

// console.log(formatString("Curabitur ligula sapien, tincidunt non."));
// // 'Curabitur ligula sapien, tincidunt non.'

// console.log(formatString("Vestibulum facilisis, purus nec pulvinar iaculis."));
// // 'Vestibulum facilisis, purus nec pulvinar...'

// console.log(
//   formatString("Vestibulum facilisis, purus nec pulvinar iaculis.", 30)
// );
// // 'Vestibulum facilisis, purus ne...'
