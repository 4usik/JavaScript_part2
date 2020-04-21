/*Некая сеть фастфуда предлагает несколько видов гамбургеров:
### Маленький (50 рублей, 20 калорий).
### Большой (100 рублей, 40 калорий).
### Гамбургер может быть с одним из нескольких видов начинок (обязательно):
### С сыром (+10 рублей, +20 калорий).
### С салатом (+20 рублей, +5 калорий).
### С картофелем (+15 рублей, +10 калорий).
### Дополнительно гамбургер можно посыпать приправой (+15 рублей, +0 калорий) и полить майонезом (+20 рублей, +5 калорий).
### Напишите программу, рассчитывающую стоимость и калорийность гамбургера.*/

"use strict"

console.log('ЗАДАНИЕ 3*');
const burgers = [
		{ size: 'большой', price: 100, calories: 40 },
      	{ size: 'маленький', price: 50, calories: 20 },
    ];

const stuffings = [
		{ stuffing: 'Сыр', price: 10, calories: 20 },
		{ stuffing: 'Салат', price: 20, calories: 5 },
		{ stuffing: 'Картошка', price: 15, calories: 10 },
    ];
const toppings = [
		{ topping: 'Приправа', price: 15, calories: 0 },
		{ topping: 'Майонез', price: 20, calories: 5 },
    ];

console.log('Возможный размер гамбургера: ');
burgers.forEach( i => {
	console.log('    ' + i.size);
});

console.log('Возможная начинка: ');
stuffings.forEach( i => {
	console.log('    ' + i.stuffing);
});

class Hamburger {
	constructor(size, ...stuffing) {
		this.size = size;
		this.stuffing = stuffing;
  	};

	getSize() {
		return this.size;
	};// Узнать размер гамбургера
	
	getStuffing() {
		return this.stuffing;
	};  // Узнать начинку гамбургера
	
  	getToppings() {
		console.log('Список добавок: ');
		toppings.forEach( i => {
		console.log('    ' + i.topping);
		});
	} // Получить список добавок

	addTopping(topping) {  }// Добавить добавку
  	removeTopping(topping) {  }// Убрать добавку
	calculatePrice() {
		let cost = burg.price+stuff.price+topp.price;
		console.log('Итоговая стоимость гамбургера: ' + cost);
	}// Узнать цену 
  	calculateCalories() {
		let cal = burg.calories+stuff.calories+topp.calories;
		console.log('Итоговая калорийность гамбургера: '  + cal)
	}// Узнать калорийность
};

let burg = burgers[0],
	stuff = stuffings[1],
	topp = toppings[1];

let burger = new Hamburger(burg.size, stuff.stuffing, topp.topping);
console.log('Размер выбранного гамбургера: ' + burger.getSize());
console.log('Выбранная начинка: ' + (burger.getStuffing()).join('; '));
burger.calculatePrice();
burger.calculateCalories();