// Задание 2
// Напиши скрипт подсчета стоимости гравировки украшений.Для этого создай функцию calculateEngravingPrice(message, pricePerWord) принимающую строку(в строке будут только слова и пробелы) и цену гравировки одного слова, и возвращающую цену гравировки всех слов в строке.

// const calculateEngravingPrice = function (message, pricePerWord) {
//   console.log(`Цена за слово:`, pricePerWord);
//   const words = message.split(" ");

//   pricePerWord = words.length * pricePerWord;
//   const slug = words.join(" ");

//   console.log(`Строка:`, slug, `-`, words.length);
//   return `Цена гравировки всех слов в строке: ${pricePerWord}`;
// };

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
// console.log(
//   calculateEngravingPrice(
//     "Proin sociis natoque et magnis parturient montes mus",
//     10
//   )
// ); // 80

// console.log(
//   calculateEngravingPrice(
//     "Proin sociis natoque et magnis parturient montes mus",
//     20
//   )
// ); // 160

// console.log(
//   calculateEngravingPrice("Donec orci lectus aliquam est magnis", 40)
// ); // 240

// console.log(
//   calculateEngravingPrice("Donec orci lectus aliquam est magnis", 20)
// ); // 120

// Задание 2/2
// const calculateEngravingPrice = function (message = "", pricePerWord = 0) {
//   console.log(pricePerWord);
//   const words = message.split(" ");

//   pricePerWord = words.length * pricePerWord;
//   const slug = words.join(" ");

//   console.log(words.length);
//   return pricePerWord;
// };

// console.log(
//   calculateEngravingPrice(
//     "Proin sociis natoque et magnis parturient montes mus",
//     10
//   )
// ); // 80
