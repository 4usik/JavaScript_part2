"use strict"

const API_URL = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

const app = new Vue({
	el: '#app',
	data: {
		goods: [],
		filteredGoods:[],
		searchLine:'',
		isVisibleCart:[]
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

		clickBtnBasket() {
			let basket = document.getElementById("basket");
			
			window.onclick = function (event) {
    			if (event.target == basket) {
        		basket.style.display = "none";
    			}
			}
			basket.style.display = "block";
		},

		clickBtnCloseBasket() {
			basket.style.display = "none";
		},

		addToBasket() {
			this.isVisibleCart.push(" "); //добавлять в массив карточку
			//console.log(this.isVisibleCart.length);
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



