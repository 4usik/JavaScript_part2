"use strict"

const API_URL = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

const app = new Vue({
	el: '#app',
	data: {
		goods: [],
		filteredGoods:[],
		searchLine:''
	},
	methods: {
		makeGETRequest(url, callback){
			const API_URL = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

			var xhr;
			
			if (window.XMLHttpRequest) {
				xhr = new XMLHttpRequest();
			} else if (window.ActiveXObject) { 
				xhr = new ActiveXObject("Microsoft.XMLHTTP");
			}
		
			xhr.onreadystatechange = function () {
				if (xhr.readyState === 4) {
					callback(xhr.responseText);
				}
			}
		
			xhr.open('GET', url, true);
			xhr.send();
		
		}
	},
	mounted() {
		this.makeGETRequest(`${API_URL}/catalogData.json`, (goods) => {
			this.goods = goods;
			this.filteredGoods = goods;
			resolve(this.goods)
		})	
	}
});


//hw2
/*
function makeGETRequest(url, callback) {
  var xhr;

  	if (window.XMLHttpRequest) {//Chrome, Mozilla, Opera, Safari
    	xhr = new XMLHttpRequest();
	} else if (window.ActiveXObject) {//Internet Explorer
    	xhr = new ActiveXObject("Microsoft.XMLHTTP");
  	};

	  let p = new Promise(function (resolve) {
		resolve(xhr.onreadystatechange = () => {
			if (xhr.readyState === 4) {
				callback(xhr.responseText);
			}
		});
	  })
	  p.then(function() {
		xhr.open('GET', url, true);
		xhr.send()
	  });

//	  xhr.onreadystatechange = function () {//ловим момент, когда ответ сервиса получен
//    	if (xhr.readyState === 4) {
//      	callback(xhr.responseText);//возвращает текст ответа от сервера на отправленный запрос
//    	};
//    };
};

const API_URL = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';
*/



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
		this.goods = []
	  };
	  	/*
	fetchGoods() {
		let pr = new Promise( (resolve) => {
			app.methods(`${API_URL}/catalogData.json`, (goods) => {
				this.goods = JSON.parse(goods);
				resolve(this.goods)
		  	})
		  
		})
		pr.then (() => {
			let listHtml = '';
			this.goods.forEach(good => {
				const goodItem = new GoodsItem(good.product_name, good.price);
				console.log(goodItem);
				listHtml += goodItem.render();
				sum +=good.price;
			});
			document.querySelector('.goods-list').innerHTML = listHtml;
		})	
	  };
	  */
	
};


let sum = 0;

const list = new GoodsList();
//list.fetchGoods();

//Добавьте пустые классы для корзины товаров и элемента корзины товаров. Продумайте, какие методы понадобятся для работы с этими сущностями.

class GoodsListBasket {
	//метод для формирования номера заказа
	num (number = 1) {
		return number;
	};
/*	
	//получение списка товаров в корзине
	getBasket(cb) {
		makeGETRequest(`${API_URL}/getBasket.json`, (goods) => {
      		this.goods = JSON.parse(goods);
      		cb();
			console.log(this.goods);
			this.goods.contents.forEach(good => {
	  			const goodItem = new GoodsItem(good.product_name, good.price);
	  			console.log(goodItem.product_name);
	  		});
    	});
	};
	*/
	//метод для добавления товара в корзину
	/*addItemToBasket(product_name, price) {		
    	makeGETRequest(`${API_URL}/addToBasket.json`, (addItem) => {
      		this.goods.contents.push(new GoodsItem(product_name, price));
			console.log(this.goods);
			console.log(this.goods.contents.length);
    	});
	};
	*/
 
	//метод, определяющий суммарную стоимость всех товаров в корзине
	amount() {};
	
	//метод, определяющий количество товаров в корзине
	countGoods(cb) {
		/*cb();
		let count = this.goods.contents.length;
		console.log('В корзине ' + count + ' товара');*/
	};
	
	//метод для оформления заказа
	put() {}; 
	
	//метод для удаления всех товаров из корзины
	clearBasket() {
		makeGETRequest(`${API_URL}/deleteFromBasket.json`, (del) => {
      		this.goods.contents.splice(0, this.goods.contents.length);
			console.log(this.goods.contents);
    	});
	};
	
};

class GoodsItemBasket extends GoodsItem {};


const basket = new GoodsListBasket();
/*basket.getBasket(() => {
	basket.amount();
	//basket.countGoods(() => {
		basket.addItemToBasket('клавиатура', 1000);
		basket.addItemToBasket('колонки', 10000);
	//});

	basket.clearBasket();
  	//basket.render();
	//basket.cost();
	
});*/




