const mass = [22, 33, 44, 55, 66, 77];
console.log(mass[2]); //44    - обращение к ел. мас. - вывод елемента
console.log(mass.length); //6 - узанть длину масива (количество елементов)

const lastIndex = mass.length - 1;
console.table(lastIndex); //6   - вывод последнего индекса

mass[2] = "wqwq"; //перезапись елемента массива
console.table(mass);
