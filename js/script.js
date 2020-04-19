"use strict"

const goods = [
  { title: 'Shirt', price: 150 },
  { title: 'Socks', price: 50 },
  { title: 'Jacket', price: 350 },
  { title: 'Shoes', price: 250 },
];


const renderGoodsItem = (title, price) => {
  return `<div class="goods-item"><h3>${title}</h3><p>${price}</p></div>`;
};

const renderGoodsList = (list = goods) => { //добавлено значение по умолчанию
  let goodsList = list.map(item => renderGoodsItem(item.title, item.price));
  document.querySelector('.goods-list').innerHTML = goodsList.join(''); //по умолчанию элементы массива разделяются запятой, с помощью метода join преобразуем элементы массива в строку, а в качестве разделителя используем указанный в скобках параметр
}

renderGoodsList();