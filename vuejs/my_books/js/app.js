var app = new Vue({
	el: '#app',
	data: {
            title: 'Books',
            books: [],
            MySearch: '',
            orderCol: 'id',
            orderInverse: 1,
            pagination: {
                maxPage: 4,
                current: 1,
                totalItems: 10,
                totalPages: 5,
                listPagination: []
            }
	},
	methods: {
		filterOrderBy: function (e, col) {
                    e.preventDefault();
                    this.orderCol = col;
                    this.orderInverse = this.orderInverse * -1;
                },
                previous: function (e) {
                    e.preventDefault();
                    
                    if(this.pagination.current === 1) {
                        return false;
                    }
                    else {
                        this.pagination.current -= 1;
                    }
                    
                    this.books = this.pagination.listPagination[this.pagination.current - 1];
                },
                pagePagination: function (e, current) {
                    e.preventDefault();
                    this.pagination.current = current + 1;
                    this.books = this.pagination.listPagination[current];
                },
                next: function (e) {
                    e.preventDefault();
                    if(this.pagination.current === this.pagination.totalPages) {
                        return false;
                    }
                    else {
                        this.pagination.current += 1;
                    }
                    
                    this.books = this.pagination.listPagination[this.pagination.current - 1];
                }
	},
        ready: function () {
            var self = this;
            self.$http.get('dataServer.json').then(function (response) {
                
                
                self.pagination.totalItems = response.data.length;
                self.pagination.totalPages = Math.ceil( response.data.length / self.pagination.maxPage );
                

                var aux = [];
                for(k in response.data) {
                    aux.push(response.data[k]);
                    if(aux.length === self.pagination.maxPage) {
                        self.pagination.listPagination.push(aux);
                        aux = [];
                    }
                }
                if(aux.length) {
                    self.pagination.listPagination.push(aux);
                }
                
                self.books = self.pagination.listPagination[0];
                
            });
        }
});