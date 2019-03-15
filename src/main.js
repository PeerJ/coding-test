import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
    data: {
        dataUrl: null
    },
    render (h) {
        return h(App)
    }
}).$mount('#tags-app')


