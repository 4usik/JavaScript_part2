"use strict"

const API_URL = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

const app = new Vue({
	el: '#app',
	data: {
		goods: [],
		filteredGoods:[],
		searchLine:'',
		isVisibleCart:[],
		/*computed: {
			sumBasket() {
				
			}
		}*/
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

		clickBtnCloseBasket() {
			basket.style.display = "none";
		},

		addToBasket() {
			this.isVisibleCart.push(" "); //добавлять в массив карточку
			//console.log(this.isVisibleCart.length);
		},

		filterGoods() { 
			let filter = document.getElementsByClassName("goods-item");

			for (let i = 0; i<filter.length; i++) {
				if (this.goods[i].product_name.toUpperCase() !== this.searchLine.toUpperCase()) {
					filter[i].style.display = "none";
				}
			}
		},

	},

	mounted() {
		this.makeGETRequest(`${API_URL}/catalogData.json`, (goods) => {
			this.goods = JSON.parse(goods);
			this.filteredGoods = JSON.parse(goods);
		})	
	}
});

/*
Vue.component ('goods-list', {
	props: ['goods'],
  	template: `
    	<div class="goods-list">
      		<goods-item v-for="good in goods" :good="good"></goods-item>
    	</div>
  		`
});

Vue.component ('good-item', {
	  props: ['good'],
  template: `
    <div class="goods-item">
      <h3>{{ good.product_name }}</h3>
      <p>{{ good.price }}</p>
    </div>
  `
});*/

Vue.component('some-component', {
	template: '<h1><slot></slot></h1>'
  });

