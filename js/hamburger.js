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
		{ size: 'Большой', price: 100, calories: 40 },
      	{ size: 'Маленький', price: 50, calories: 20 },
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

let [big, small] = burgers;
let [cheese, salad, potato] = stuffings;
let [spice, mayonaise] = toppings;
//console.log(big);

class Hamburger {
	constructor(size, stuffing) {
		this.size = size;
		this.stuffing = stuffing;
  	};

	getSize() {
		console.log('Выбран размер гамбургера: ' + this.size.size);
	};// Узнать размер гамбургера
	
	getStuffing() {
		console.log('Выбрана начинка гамбургера: ' + this.stuffing.stuffing);
	};  // Узнать начинку гамбургера
	
  	getToppings() {
		if (this.topping !== undefined) {
			console.log('Добавлен топпинг: ' + this.topping.topping);
		} else {
			console.log('Топпинг не добавлен');
		}
	} // Получить список добавок

	addTopping(topping) {
		this.topping = topping;
	}// Добавить добавку
	
  	removeTopping() {
		delete this.topping;
	}// Убрать добавку
	
	calculatePrice() {
		let cost;
		if (this.topping !== undefined) {
			cost = this.size.price+this.stuffing.price+this.topping.price;
			//console.log(this.size.price, this.stuffing.price, this.topping.price);
			} else {
				cost = this.size.price+this.stuffing.price
			}
		console.log('Итоговая стоимость гамбургера: ' + cost);
	}// Узнать цену
	
  	calculateCalories() {
		let cal;
		if (this.topping !== undefined) {
			cal = this.size.calories+this.stuffing.calories+this.topping.calories;
			//console.log(this.size.calories, this.stuffing.calories, this.topping.calories);
			} else {
				cal = this.size.calories+this.stuffing.calories
			}
		console.log('Итоговая калорийность гамбургера: '  + cal)
	}// Узнать калорийность
};

let burger = new Hamburger(big, salad);
burger.getSize();
burger.getStuffing();
burger.addTopping(mayonaise);
burger.getToppings();
burger.calculatePrice();
burger.calculateCalories();
burger.removeTopping();
burger.getToppings();
burger.calculatePrice();
burger.calculateCalories();
