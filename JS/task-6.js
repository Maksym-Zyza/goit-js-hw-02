// Задание 6
// Напиши скрипт со следующим функционалом:
// При загрузке страницы пользователю предлагается в prompt ввести число.Ввод сохраняется в переменную input и добавляется в массив чисел numbers.
// Операция ввода числа пользователем и сохранение в массив продолжается до тех пор, пока пользователь не нажмет Cancel в prompt.
// После того как пользователь прекратил ввод нажав Cancel, если массив не пустой, необходимо посчитать сумму всех элементов массива и записать ее в переменную total.Используй цикл for или for...of.После чего в консоль выведи строку 'Общая сумма чисел равна [сумма]'.
// bell Делать проверку того, что пользователь ввел именно число, а не произвольный набор символов, не обязательно.Если хочешь, в случае некорректного ввода, показывай alert с текстом 'Было введено не число, попробуйте еще раз', при этом результат prompt записывать в массив чисел не нужно, после чего снова пользователю предлагается ввести число в prompt.

// let input;
// const numbers = [];
// let total = 0;

// for (let input = 0; input !== null; input += 0) {
//   input = prompt("Введите чило");
//   numbers.push(input);
//   console.log(numbers);

//   if (input === null) {
//     console.log(`Выход`);
//     break;
//   } else if (isNaN(input)) {
//     alert("Было введено не число, попробуйте еще раз");
//   } else {
//     console.log(`Начальное значение: ${total}`);
//     // total += Number(input);

//     let element = 0;
//     for (const number of numbers) {
//       element = Number(number);
//     }
//     total += Number(element);

//     console.log(`Введенное число: ${input}`);
//     console.log(`Сумма: ${total}`);
//   }
// }
// alert(`Общая сумма чисел равна ${total}`);
