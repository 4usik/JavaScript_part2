"use strict"

const API_URL = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

Vue.component('goods-list', {
	props: ['goods'],
	
	template: `
	  <div class="goods-list">
		<goods-item v-for="good in goods" :good="good"></goods-item>
	  </div>
	`
});

Vue.component('goods-item', {
	props: ['good'],

	methods: {
	},

	template: `
	  <div class="goods-item">
		<h3>{{ good.product_name }}</h3>
		<p>{{ good.price }}</p>
		<button class="add" >Добавить</button>
	  </div>
	`
	//@click="addToBasket"
});

Vue.component('basket', {
	props: [],

	data() {
		return {
			isVisibleCart:[],
		}
	},

	methods: {
		addToBasket() {
			this.isVisibleCart.push(" "); //добавлять в массив карточку
			console.log(this.isVisibleCart);
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

	},

	template: `
		<div id="basket" class="basket">
			<div class="basket_content">
				<span class="close_basket" @click="clickBtnCloseBasket">×</span>
				<div>
					<p>Заказ:{{ this.isVisibleCart }}</p>
					<p>Сумма заказа:<!--{{ }}--></p>
				</div>
				<form class="field">
					<fieldset class="info">
						<legend>Личные данные</legend>
							<label for="name">Ваше имя</label>
							<input type="text" class="name" autofocus>
		
							<label for="tel">Ваш телефон</label>
							<input type="text" class="tel">
					</fieldset>
					
					<fieldset class="address">
						<legend>Адрес доставки</legend>
							<label for="street">Улица</label>
							<input type="text" class="street">
		
							<label for="build">Дом</label>
							<input type="text" class="build">

							<label for="flat">Квартира</label>
							<input type="text"class="flat">

							<label for="comment">Комментарий к заказу:</label>
							<textarea class="text"></textarea>
						<div>
							<button class="button">Заказать</button>
						</div>
					</fieldset>
				</form>
			</div>
		</div>
	`
});

Vue.component('search', {
	props: [],

	methods: {
		filterGoods() { 
			let filter = document.getElementsByClassName("goods-item");

			for (let i = 0; i<filter.length; i++) {
				if (this.goods[i].product_name.toUpperCase() !== this.searchLine.toUpperCase()) {
					filter[i].style.display = "none";
				}
			}
		}
	},

	//v-model= "searchLine"
	template: `
		<div>
			<input type="text" class="goods-search" />
			<button class="search-button" type="button">Искать</button>
		</div>
	`// @click="filterGoods"
});

const app = new Vue({
	el: '#app',
	data: {
		goods: [],
		filteredGoods:[],
		searchLine:'',
		isVisibleCart:[],
		//computed: {
		//	sumBasket() {		
		//	}
		
	},
	methods: {
		makeGETRequest(url, callback){

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

	},

	mounted() {
		this.makeGETRequest(`${API_URL}/catalogData.json`, (goods) => {
			this.goods = JSON.parse(goods);
			this.filteredGoods = JSON.parse(goods);
		})	
	}
});


