import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        products: [
            {name: '红楼梦', price: 200},
            {name: '西游记', price: 140},
            {name: '三国演义', price: 120},
            {name: '水浒传', price: 100},
        ]
    },
    mutations: {
        reducePrice: (state, payload) => {
            state.products.forEach(product => {
                product.price -= payload;
            })
        }
    },
    actions: {
        reducePrice: (context, payload) => {
            setTimeout(function () {
                context.commit('reducePrice', payload);
            }, 500);
        }
    }
})