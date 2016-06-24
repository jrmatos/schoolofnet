var app = new Vue({
	el: '#app',
	data: {
            books: [],
            MySearch: '',
            orderCol: 'id',
            orderInverse: 1
	},
	methods: {
		filterOrderBy: function (event, col) {
                    this.orderCol = col;
                    this.orderInverse = this.orderInverse * -1;
                    event.preventDefault();
                }
	},
        ready: function () {
            var that = this;
            that.$http.get('dataServer.json').then(function (response) {
                that.books = response.data;
            });
        }
});