import Vue from 'vue'
import App from './App'
import {store} from "./store/store";

new Vue({
    store: store,
    el: '#app',
    render: h => h(App),
})
