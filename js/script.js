"use strict"

//hw2
function makeGETRequest(url, callback) {
  var xhr;

  if (window.XMLHttpRequest) {//Chrome, Mozilla, Opera, Safari
    xhr = new XMLHttpRequest();
  } else if (window.ActiveXObject) {//Internet Explorer
    xhr = new ActiveXObject("Microsoft.XMLHTTP");
  };

  xhr.onreadystatechange = function () {//ловим момент, когда ответ сервиса получен
    if (xhr.readyState === 4) {
      callback(xhr.responseText);//выполнится после получения ответа
    };
  };

  xhr.open('GET', url, true);//тип запроса, адрес ресурса, указатель асинхронности
  xhr.send();//метод для отправки запроса
};

const API_URL = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

class GoodsItem {
  constructor(product_name, price) {
    this.product_name = product_name;
    this.price = price;
  };
  render() {
    return `<div class="goods-item"><h3>${this.product_name}</h3><p>${this.price}</p><button class="add">Добавить</button></div>`;
  }

};

class GoodsList {
	constructor() {
		this.goods = [];
  	};
	fetchGoods(cb) {
    	makeGETRequest(`${API_URL}/catalogData.json`, (goods) => {
      		this.goods = JSON.parse(goods);
      		cb();
    	});
  };

  	/*fetchGoods() {
    	this.goods = [
      		{ title: 'Shirt', price: 150 },
      		{ title: 'Socks', price: 50 },
      		{ title: 'Jacket', price: 350 },
      		{ title: 'Shoes', price: 250 },
    	];
		
	  	this.goods.forEach(good => {
	  		const goodItem = new GoodsItem(good.title, good.price);
	  		console.log(goodItem);
			listHtml += goodItem.render();
			sum+=good.price;
	  	});
  	};*/
  	render() {
		let listHtml = '';
		this.goods.forEach(good => {
	  		const goodItem = new GoodsItem(good.product_name, good.price);
	  		console.log(goodItem);
			listHtml += goodItem.render();
			sum +=good.price;
	  	});
    	document.querySelector('.goods-list').innerHTML = listHtml;
  	};
	
//Добавьте для GoodsList метод, определяющий суммарную стоимость всех товаров.
	cost() {
		//sum+=this.price;
		console.log ('общая стоимость товаров составляет: ' + sum);
	}
};


let sum = 0;

const list = new GoodsList();
list.fetchGoods(() => {
  	list.render();
	list.cost();
});

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




