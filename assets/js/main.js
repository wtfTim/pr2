'use strict';

// задание 1

let name = 'Джон';
let admin = `${name}`;
console.log(admin)

// задание 2

let nameCity = prompt('Введите название города', 'Неизветсное Город');
let age = prompt('Введите год образования', 'Неизветсно');
let nas = prompt('Население', 'Неизветсно');
let all = 2024 - age;
let isTrue = confirm(`Городу ${nameCity} исполнилось ${all} лет с момента его образования. Население ${nas} человек`);
alert(isTrue);

// Задание 3

let r = prompt('Введите радиус');
const pi = 3.14;
console.log(2*pi*(r**2))

// Задание 4

let a = +prompt('Введите число');
let b = +prompt('Введите второе число');
console.log(a+b);
console.log(a-b);
console.log(a/b);
console.log(a*b);