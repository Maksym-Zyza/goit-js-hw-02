# goit-js-hw-02

1. Массивы
2. Создание
   // Пустой массив
   const arr = [];

// Массив clients с тремя элементами
const clients = ['Mango', 'Poly', 'Ajax'];

console.log(clients); // ["Mango", "Poly", "Ajax"]

3. Доступ к элементам
   const clients = ['Mango', 'Poly', 'Ajax'];

// Указывая в скобках индекс элемента мы получаем его значение
console.log(clients[0]); // Mango
console.log(clients[1]); // Poly
console.log(clients[2]); // Ajax

4. Переопределение
   const clients = ['Mango', 'Poly', 'Ajax'];

// Значение элемента можно заменить
clients[0] = 'Kiwi';
console.log(clients[0]); // Kiwi

// Или добавить
clients[3] = 'Alex';
console.log(clients[3]); // Alex

console.log(clients); // ["Kiwi", "Poly", "Ajax", "Alex"]

5. Длина массива
   const clients = ['Mango', 'Poly', 'Ajax'];

// length вернет текущую длину массива
console.log(clients.length); // 3

clients.length = 5;
console.log(clients.length); // 5
console.log(clients); // ["Mango", "Poly", "Ajax", empty × 2]
console.log(clients[4]); // undefined

clients.length = 2;
console.log(clients); // ["Mango", "Poly"]

6. Итерация по массиву
   //Переберем массив клиентов и выведем их имена.
   const clients = ['Mango', 'Ajax', 'Poly'];

for (let i = 0; i < clients.length; i += 1) {
console.log('Logging clients: ', clients[i]);
}

//С помощью цикла массив можно заполнить данными.
const numbers = [];

- for (let i = 0; i < 3; i += 1) {
  numbers.push(`label-${i}`);
  }
  console.log('numbers: ', numbers); // ['label-0', 'label-1', 'label-2']

6. 1 Цикл for...of

- for (const variable of iterable) {} - для перебoра итерируемых объектов, таких как массивы и строки. Тело цикла будет выполняться для значения каждого отдельного элемента.

6. 2 Инструкции break и continue

- for (const client of clients) {if (client === clientNameToFind) {break;}} - для поиска елемента, клиента в массиве имен, если нашли прервем цикл так как нет смысла искать дальше, имена у нас уникальные.
  Многомерные массивы:
  Массивы могут содержать другие массивы как элементы. Это можно использовать для создания матриц.
  Для того чтобы перебрать такой массив используются вложенные циклы.

const clients = ['Mango', 'Poly', 'Ajax'];
const clientNameToFind = 'Poly';
let message = 'Клиента с таким именем нету в базе данных!';
for (const client of clients) {
if (client === clientNameToFind) {
message = 'Клиент с таким именем есть в базе данных!';
break;
}
// Если не совпадает, то на этой итерации ничего не делаем
}
console.log(message); // Клиент с таким именем есть в базе данных!

//Используем цикл для вывода только чисел больше определенного значения.
const numbers = [1, 3, 14, 18, 4, 7, 29, 6, 34];
const threshold = 15;

for (let i = 0; i < numbers.length; i += 1) {
if (numbers[i] < threshold) {
continue;
}
console.log(`Число больше чем ${threshold}: ${numbers[i]}`); // 18, 29, 34
}

7. Многомерные массивы
   const matrix = [
   [1, 2, 3],
   [4, 5, 6],
   [7, 8, 9],
   ];

console.log(matrix[0][0]); // 1
console.log(matrix[1][2]); // 6
console.log(matrix[2][2]); // 9

//Для того чтобы перебрать такой массив используются вложенные циклы.
const matrix = [
[1, 2, 3],
[4, 5, 6],
[7, 8, 9],
];
let total = 0;

for (let i = 0; i < matrix.length; i += 1) {
console.log('Подмассив матрицы matrix[i]: ', matrix[i]);

for (let j = 0; j < matrix[i].length; j += 1) {
console.log('Элемент подмассива матрицы matrix[i][j]: ', matrix[i][j]);
total += matrix[i][j];
}
}
console.log(total); // 45

8. Присвоение по ссылке и по значению

- Все примитивные типы присваиваются по значению, то есть создается копия.

let a = 5;
// Присвоение по значению, в памяти будет создана еще
// одна ячейка в которую будет скопировано значение 5
let b = a;
console.log(a); // 5
console.log(b); // 5

// Изменим значение a
a = 10;
console.log(a); // 10
// Значение b не изменилось так как это отдельная копия
console.log(b); // 5

- Сложные типы - объекты, массивы, функции присваиваются по ссылке, то есть переменная просто получает ссылку на уже существующий объект.

const a = ['Mango'];
// Присвоение по ссылке.
// Так как a это массив, в b записывается ссылка на уже существующий
// массив в памяти. Теперь a и b указывают на один и тот же массив.
const b = a;
console.log(a); // ['Mango']
console.log(b); // ['Mango']

// Изменим массив, добавив еще один элемент, используя указатель из a
a.push('Poly');
console.log(a); // ['Mango', 'Poly']

// b изменилось тоже, потому что b, как и a,
// просто содержат ссылку на одино и то же место в памяти
console.log(b); // ['Mango', 'Poly']

// Результат повторяется
b.push('Ajax');
console.log(a); // ['Mango', 'Poly', 'Ajax']
console.log(b); // ['Mango', 'Poly', 'Ajax']

<!-- ЗАДАЧИ -->

// ЗАДАЧА 1
// Посчитать сумму покупок

// ЗАДАЧА 2
// Увеличить сумму покупок на 20%

// ЗАДАЧА 3
// Подсчитать сумму всех четных чисел в массиве - for...of

// ЗАДАЧА 4
// Написать скрипт поиска логина - .includes() и Тернарник

// ЗАДАЧА 5
// Написать скрипт поиска самого малинького числа в массиве, при условии что числа уникальные.

// ЗАДАЧА 6
// Написать скрипт который объединяет все элементы массива в однострочное значение, элементи сделать розделены "," - .slice()

// ЗАДАЧА 7
// Написать скрипт который заменит регистр каждоого символа в строке противоположным - .toLowerCase(), .toUpperCase()

// ЗАДАЧА 8
// Написать slag в URL из названия статти (нижний регистр с сшиванием)
// 1) Нормализируем строку
// 2) Разбиваем по словам
// 3) Сшиваем в строку с разделителями
.toLowerCase().split(" ").join("-");

/ ЗАДАЧА 9
// Написать скрипт который считает сумму двух масивов
// Сшивание масивов - .concat(масив1, масив2, ...)

// ЗАДАЧА 10
// Метод .splice() (удалить, добавить, обновить)

- Удалить карточку 3, 4 (по индексу)
  // cards.splice(2, 2);

- Добачить "Карточку-6", "Карточку-7" между карточкой 2 и 3 (по индексу)
  cards.splice(2, 0, "Карточка-6", "Карточка-7");

- Обновить: "Карточку-4" заменить на "Карточку-101" (по индексу)
  cards.splice(5, 1, "Карточку-101");
