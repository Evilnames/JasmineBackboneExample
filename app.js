function helloWorld() {
	return 'Hello';
}

var testWidget = Backbone.View.extend({
	initialize: function() {
		return true;
	},
	addTwoNumbers: function(a, b) {
		return a + b;
	},
	render: function(inputStuff, toDoList) {
		var result = _.template($("#testTemplate").html());

		this.$el.html(result({
			displayValue: inputStuff,
			todo: toDoList
		}));
	}
});