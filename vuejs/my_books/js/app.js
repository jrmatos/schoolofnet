var hello = new Vue({
	el: '#hello',
	data: {
		msg: 'Hello Vue!',
		people: [
			{ name: 'Paulo' },
			{ name: 'Maria' },
			{ name: 'Jorge' },
			{ name: 'Lucia' },
		],
		newElement: '',
		elements: []
	},
	methods: {
		addElement: function () {
			var title = this.newElement.trim();
			if(title) {
				this.elements.push({ title: title });
				this.newElement = '';
			}
		},
		removeElement: function (e, index) {
			e.preventDefault();
			this.elements.splice(index, 1);
		}
	}
});