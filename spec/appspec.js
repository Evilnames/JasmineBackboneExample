describe("Hello world", function() {
	it("says hello", function() {
		expect(helloWorld()).toEqual("Hello");
	});
});

describe("Test Widget", function() {
	var view;
	beforeEach(function() {
		view = new testWidget({
			el: $("#testHolder")
		});
	});

	afterEach(function() {
		$("#testHolder").html('');
	});

	it("Add two numbers together", function() {
		expect(view.addTwoNumbers(1, 1)).toBe(2);
	});

	it("Exists on the dom", function() {
		view.render(4, []);
		expect(view.$el).toBeInDOM();
	});

	it("Outputs 4 when 4 is sent into it", function() {
		view.render(4, []);
		expect(view.$el.find('.test').html()).toBe('4');
	});

	it("Outputs 2 todo list items", function() {
		view.render(4, [{
			value: 'test'
		}, {
			value: 'bob'
		}]);

		//Make sure there are two items on the page.
		var count = view.$el.find('.listItem');
		//We need two items on the page.
		expect(count.length).toBe(2);

		//Expect the first item to equal test
		expect($(count[0]).find('.innerValue').html()).toBe('test');
	});

	it("Hides the checkbox if permissions are off", function() {
		view.render(4, [{
			value: 'bob',
			showCheckBox: 0
		}]);

		//There should be no checkbox on the page.
		expect(view.$el.find('.listItem').first().find('.checkbox--user').length).toBe(0);
	});

	it("Shows a checkbox if permissions are turned on", function() {
		view.render(4, [{
			value: 'bob',
			showCheckBox: 1
		}]);

		expect(view.$el.find('.listItem').first().find('.checkbox--user')).toBeInDOM();

	})
})