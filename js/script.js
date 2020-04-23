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
			sum+=sumItem.price;
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
console.log('Номер заказа: ' + listBasket.num(3));

class GoodsItemBasket extends GoodsItem {
	//метод для изменения количества данного типа товара
	setAmountItem() {};
	
	//метод для удаления выбранного товара из корзины
	delItem() {};
};




