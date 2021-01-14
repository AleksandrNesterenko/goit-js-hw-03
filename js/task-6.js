'use strict';

// Напиши скрипт со следующим функционалом:
// При загрузке страницы пользователю предлагается в prompt ввести число.
// Ввод сохраняется в переменную input и добавляется в массив чисел numbers.
// Операция ввода числа пользователем и сохранение в массив продолжается до тех пор,
// пока пользователь не нажмет Cancel в prompt.
// После того как пользователь прекратил ввод нажав Cancel,
// если массив не пустой, необходимо посчитать сумму всех элементов массива и записать ее в переменную total.
// Используй цикл for или for...of.После чего в консоль выведи строку 'Общая сумма чисел равна [сумма]'.

// let input;
// const numbers = [];
// let total = 0;

// do {
//   input = prompt('Введите Ваши цифры');
//   if (input === null) {
//     break;
//   }

//   input = Number(input);
//   total = total + input;
// } while (true);

// console.log(`Общая сумма чисел равна ${total}`);

let input;
const numbers = [];
let total = 0; 


while (input !== null) {

    input = prompt('ввидите цифру');

    if (Number.isNaN(Number(input))) {
        alert('Было введено не число, попробуйте еще раз');
        continue;
    } 

    if (input === null) {
        console.log(`Общая сумма чисел равна ${total}`);
        continue;
    } 
    numbers.push(Number(input));
    console.log(numbers);

    for(const number of numbers) {
        total = total + number;
        }
    
}