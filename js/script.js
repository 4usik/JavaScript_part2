"use strict"


//hw1
/*const goods = [
  { title: 'Shirt', price: 150 },
  { title: 'Socks', price: 50 },
  { title: 'Jacket', price: 350 },
  { title: 'Shoes', price: 250 },
];


const renderGoodsItem = (title, price) => {
  return `<div class="goods-item"><h3>${title}</h3><p>${price}</p></div>`;
};



const renderGoodsList = (list = goods) => { //ДОБАВЛЕНО ЗНАЧЕНИЕ ПО УМОЛЧАНИЮ
  let goodsList = list.map(item => renderGoodsItem(item.title, item.price));
  document.querySelector('.goods-list').innerHTML = goodsList.join(''); //по умолчанию элементы массива разделяются запятой, с помощью метода join преобразуем элементы массива в строку, а в качестве разделителя используем указанный в скобках параметр
}

renderGoodsList();*/


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
  }
};

const list = new GoodsList();
list.fetchGoods();
list.render();

//Добавьте пустые классы для корзины товаров и элемента корзины товаров. Продумайте, какие методы понадобятся для работы с этими сущностями.

class BasketGoodsList {
	orderNumber() {//метод для формирования номера заказа
		return 'number';
	}; 
	render() {}; //отправка списка товаров из корзины на заказ и оплату
	clear() {}; //удаление всех товаров из корзины
	sum() {//Добавьте для GoodsList метод, определяющий суммарную стоимость всех товаров
		
	};
};
//const a = new BasketGoodsList();
//console.log(a.orderNumber());

class BasketGoodsItem extends GoodsItem {
	del() {}; //метод для удаления выбранного товара из корзины
	add() {}; //метод для добавления товара в корзину(обработчик должен создавать копию ссылки на объект из GoodsList при нажатии кнопки "добавить")
};


//Добавьте для GoodsList метод, определяющий суммарную стоимость всех товаров.




/*Некая сеть фастфуда предлагает несколько видов гамбургеров:
### Маленький (50 рублей, 20 калорий).
### Большой (100 рублей, 40 калорий). ### Гамбургер может быть с одним из нескольких видов начинок (обязательно):
### С сыром (+10 рублей, +20 калорий).
### С салатом (+20 рублей, +5 калорий).
### С картофелем (+15 рублей, +10 калорий). ### Дополнительно гамбургер можно посыпать приправой (+15 рублей, +0 калорий) и полить майонезом (+20 рублей, +5 калорий). ### 3Напишите программу, рассчитывающую стоимость и калорийность гамбургера. Можно использовать примерную архитектуру класса из методички, но можно использовать и свою*/
