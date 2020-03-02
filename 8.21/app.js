new Vue({
    el: '#app',
    data: {
        currencies: {}
    },

    mounted() {
        axios.get('https://free.currconv.com/api/v7/currencies?apiKey=do-not-use-this-key')
        .then(response => {
            this.currencies = response.data.results;
        })
    }
})