const mass = [22, 33, 44, 55, 66, 77];
console.log(mass[2]); //44    - обращение к ел. мас. - вывод елемента
console.log(mass.length); //6 - узанть длину масива (количество елементов)

const lastIndex = mass.length - 1;
console.table(lastIndex); //6   - вывод последнего индекса

mass[2] = "wqwq"; //перезапись елемента массива
console.table(mass);

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
let friends = [11, 22, 33, 44, 55, 101, 202];

for (let i = 0; i <= friends.length - 1; i += 1) {
  console.log(i); // вывод индекса
  console.log(friends[i]); // вывод елемента
}
