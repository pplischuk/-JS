"use strict";
//TODO1. Запитайте у юзера скільки йому років: «Привіт мені - “” років!».

// let a = prompt("Скільки тобі років?");
// alert(`Привіт, мені ${a} років`);

//TODO2.Запитайтесь якого року народження юзер, теперішній рік візьмемо за константу. Виведемо скільки йому років.

// const year = 2021;
// let a = prompt("Який твій рік народження?");
// alert(`Тобі ${year - a}років`)

//TODO3. Запитайтесь у юзера довжини сторін прямокутника та виведіть його периметр.

// let a = prompt('введіть довжину прямокутника');
// let b = prompt('введіть ширину прямокутника');
// alert(`периметр прямокутника = ${a * 2 + b * 2}`)

//TODO4. Запитайтесь в юзера радіус кола та виведіть його площу.(число пі)

// const pi = 3.14;
// let a = prompt('введіть радіус кола');
// alert(`площа кола = ${pi * a**2}`)

//TODO5. Водій їде з середньою швидкістю 50 км в годину. Запитайтесь у нього скільки ще йому необхідно часу їхати, та виведіть відстань.

// let midSpeed = 50;
// let time = prompt("Скільки хвилин вам ще потрібно їхати?");
// let distantion = Math.floor(midSpeed * (time/0.6/100));
// alert(`Ваша відстань = ${distantion} km`);

//TODO6. Реалізуємо конвертер кілометрів в милі і навпаки =)

// const dif = 1.609;

// let a = prompt('Введіть км');
// let b = Math.floor(a/dif);
// alert(`${a} km це ${b} миль`)

// let c = prompt('Введіть милі');
// let d = Math.floor(c*dif);
// alert(`${c} миль це ${d} km`)

//TODO7. Юзер вводить скільки коштів на його картці та ціну одного літра бензину. Виводимо скільки бензину він може купити та скільки грошей у нього залишиться.

// let a = prompt('Скільки у вас грошей?');
// let b = prompt('Яка ціна за літр бензину?');

// let c = Math.floor(a/b);

// alert (`ви можете купити ${c} літр(ів),та у вас залишиться ${a%b}грн`)