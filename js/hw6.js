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
    
	template: `
	  <div class="goods-item">
		<h3>{{ good.product_name }}</h3>
		<p>{{ good.price }}</p>
		<button class="add" @click="addToBasket">Добавить</button>
	  </div>
	`
});

const app = new Vue({
    el: '#app',
});