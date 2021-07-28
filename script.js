// let emptyArray = []
// console.log(emptyArray.length)
//
// let students = ["Samat","Vika","Vitya","Aigerim","Dilshat",]
// students[4] = "Aika"
// students[3] = "Misha" // тут искать по индексу
// // students[students.length] что бы не искать по индексу, он будет прибавляться автоматическ
// console.log(students)
// console.log(students.length)


// let array1 = [32,45,43,21]
// let array2 = [100,200,300]
// let sum = array1.concat(array2)
// //SPREAD SYNTAX
// let sum2 = [...array1, ...array2]
// console.log(sum)
// console.log(sum2)


// let first = [44]
// let second = [44]
// console.log(first === second)

//Правильно
// let a = 5
// a = 10
// console.log( a )

//Неправильно
//const a = 5
//a = 10
// console.log( a )

//

// const array = [33,44,55]
// array[3] = 100
// console.log(array)


//Function Declaration
// function sum(a,b){
//     return a + b
// }
// console.log(sum(5,10))

//Стрелочная функция
// const sum = (a,b) => a + b
// console.log(sum(5,10))

// const example = (num) => {
//     if ( num % 2 === 0) {
//         return `Even`
//     }
//     return `Odd`
// }
// console.log(example(5) )
// console.log(example(8) )

// const example = (num) => {
//     return num % 2 === 0 ? `Even` : `Odd`
// }
// console.log(example(5) )
// console.log(example(8) )

// const example = (num) =>  num % 2 === 0 ? `Even` : `Odd`

// console.log(example(5) )
// console.log(example(8) )

// task1
// const task1 = a => a===10 ? `Verno` : `Neverno`
// console.log(task1(10))

// task2
// const task2 = (a,b) =>  a > b ? `${a} больше ${b}` : `${a} меньше ${b}`
// console.log(task2(3,4))


// task4
// const task4 = a => a % 2 === 0 ? `Chetnoe` : `Nechotnoe`
// console.log(task4(4))

// task5
// const task5 = (a, b) => a % b === 0 ? `Dtlitsya` : `Ne delitsya`
// console.log(task5(10,6))

// task6
// const task6 = s => typeof s
// console.log(task6(true))


// task7
// const task7 = a => a >= 1 && a < 99 ? `Верно` : `Неверно`
// console.log(task7(0))

// task8
// const task8 = a => a === 3 || a === 7 ? a + 7 : a % 10
// console.log(task8(10))

// task9
// const task9 = (a, b) =>  a <= 0 && b >= 5 ? a + b : a - b
// console.log(task9(1,4))

// task10
// const task10 = (a, b) => a > 7 && a < 12 || b >= 7 && b < 27 ? 'Verno' : `Neverno`
// console.log(task10(8,17))

// task11
// const task11 = month => {
//     if (month === 1 || month === 2 || month === 12) {
//         return "Зима"
//     } else if (month >= 3 && month <= 5) {
//         return "Весна"
//     } else if (month >= 6 && month <= 8) {
//         return "Лето"
//     } else if (month >= 9 && month <= 11) {
//         return "Осень"
//     }
//     return "Не сезон"
// }
// console.log(task11(4))


// task12
// const task12 = day => {
//     if (day >= 1 && day <= 10) {
//         return "Первая"
//     } else if (day >= 11 && day <= 20) {
//          return "Вторая"
//     }
//     return "Третья"
// }
// console.log(task12(24))

// task13
// const task13 = a => a.toString()[0] === `1` || a.toString()[0] === `2` || a.toString()[0] === `3` ? "Yes" : "No"
// console.log(task13(134))


// task14
// const task14 = age => {
//     if (age >= 10 && age <= 20) {
//         return `Мне ${age} лет`
//     } else if (age % 10 === 1) {
//         return `Мне ${age} год`
//     } else if (age % 10 >= 2 && age % 10 <= 4) {
//         return `Мне ${age} года`
//     }
//         return `Мне ${age} лет`
// }
// console.log(task14(36))


// task15
// const task15 = time =>{
//         if (time >= 1 && time <= 15) {
//         return `Первая`
//     } else if (time >= 16 && time <= 30) {
//         return `Вторая`
//     } else if (time >= 31 && time <= 45) {
//         return `Третья`
//     } else if (time >= 31 && time <= 45) {
//         return `Четвертая`
//     }
//     return `Неверное число`
// }
// console.log(task15(99))

// task16
// const task16 = str => str.split(" ")[0].length
// console.log(task16("Salam aleykum"))

// task17
// const task17 = str => str.split(" ")[1].toLowerCase()
// console.log(task17(`Salam aleiKUm`))


// task18
// const task18 = str => str.split(" ")[0].toUpperCase()
// console.log(task18(`Salam aleikum`))

// task19
// const task19 = str => str.split("")
// console.log(task19(`Salam aleikum`))

// task20
// const task20 = str => str.split(" ")
// console.log(task20(`Salam aleikum ukom`))


// task21
// const task21 = str => str.slice(2,6)
// console.log(task21("Salamaleykum"))

// task22
// const task22 = str => str.charAt(str.length-1)
// console.log(task22("Salam aleykum"))

// task23
// const task23 = (str1,str2) => str1.concat(str2)
// console.log(task23("stroka","banan"))

// task24
// const task24 = str => str["aleykum"]
// console.log(task24("Salam aleykum"))

// task25
