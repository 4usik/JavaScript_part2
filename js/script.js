"use strict"

//hw2
class GoodsItem {
  constructor(title, price) {
    this.title = title;
    this.price = price;
  }
  render() {
    return `<div class="goods-item"><h3>${this.title}</h3><p>${this.price}</p><button class="add">Добавить</button></div>`;
  }
};

class GoodsList {
  constructor() {
    this.goods = [];
  };
  fetchGoods() {
    this.goods = [
      { title: 'Shirt', price: 150 },
      { title: 'Socks', price: 50 },
      { title: 'Jacket', price: 350 },
      { title: 'Shoes', price: 250 },
    ];
  };
  render() {
    let listHtml = '';
    this.goods.forEach(good => {
      const goodItem = new GoodsItem(good.title, good.price);
      listHtml += goodItem.render();
    });
    document.querySelector('.goods-list').innerHTML = listHtml;
  };
	
//Добавьте для GoodsList метод, определяющий суммарную стоимость всех товаров.
	cost() { 
		let sum = 0;
		this.goods.forEach(cost => {
			const sumItem = new GoodsItem(cost.title, cost.price);
			//console.log(cost.price);
			sum+=cost.price;
		});
		console.log ('общая стоимость товаров составляет: ' + sum);
	}
};

const list = new GoodsList();
list.fetchGoods();
list.render();
list.cost();

//Добавьте пустые классы для корзины товаров и элемента корзины товаров. Продумайте, какие методы понадобятся для работы с этими сущностями.

class GoodsListBasket extends GoodsList {
	//метод для формирования номера заказа
	//ДОБАВЛЕНО ЗНАЧЕНИЕ ПО УМОЛЧАНИЮ В ДОПОЛНЕНИЕ К ДЗ_1
	num (number = 1) {
		return number;
	};
	
	//метод для определения общего кол-ва товаров в корзине
	amount() {};
	
	//метод, определяющий суммарную стоимость всех товаров в корзине
	cost() {};
	
	//метод для оформления заказа
	put() {}; 
	
	//метод для удаления всех товаров из корзины
	clear() {};
	
};

const listBasket = new GoodsListBasket();
console.log(listBasket.num(285));

class GoodsItemBasket extends GoodsItem {
	//метод для изменения количества данного типа товара
	setAmountItem() {};
	
	//метод для удаления выбранного товара из корзины
	delItem() {};
};





/*Некая сеть фастфуда предлагает несколько видов гамбургеров:
### Маленький (50 рублей, 20 калорий).
### Большой (100 рублей, 40 калорий). ### Гамбургер может быть с одним из нескольких видов начинок (обязательно):
### С сыром (+10 рублей, +20 калорий).
### С салатом (+20 рублей, +5 калорий).
### С картофелем (+15 рублей, +10 калорий). ### Дополнительно гамбургер можно посыпать приправой (+15 рублей, +0 калорий) и полить майонезом (+20 рублей, +5 калорий). ### 3Напишите программу, рассчитывающую стоимость и калорийность гамбургера. Можно использовать примерную архитектуру класса из методички, но можно использовать и свою*/
