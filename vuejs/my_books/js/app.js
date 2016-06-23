var app = new Vue({
	el: '#app',
	data: {
            books: []                
	},
	methods: {
		
	},
        ready: function () {
            var that = this;
            that.$http.get('dataServer.json').then(function (response) {
                that.books = response.data;
            });
        }
});