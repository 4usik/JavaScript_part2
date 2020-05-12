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
		
		},
		filterGoods() {
			console.log('Клик');
		},
	
	},
	mounted() {
		this.makeGETRequest(`${API_URL}/catalogData.json`, (goods) => {
			this.goods = goods;
			this.filteredGoods = goods;
		})	
	}
});

class GoodsItem {
  constructor(product_name, price) {
    this.product_name = product_name;
    this.price = price;
  };
  render() {
    return `<div class="goods-item"><h3>${this.product_name}</h3><p>${this.price}</p><button class="add">Добавить</button></div>`;
  }

};





