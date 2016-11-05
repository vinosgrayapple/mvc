define('View', ['jquery', 'Model'], function($, model) {
	

	 var View = function(model) {

		var self = this;
		
		function init() {
			var wrapper = tmpl($('#wrapper__template').html());
			
			$('.main').append(wrapper);
			self.elements = {
				input: $('.item__value'),
				addBtn: $('.item__add'),
				listContainer: $('.item__list'),
				removeItem: $('.item__delete'),
				itemN: $('.itemN'),
			};
			self.renderList(model.data);
		};


		self.renderList = function(data) {
			
				var list = tmpl($('#list__template').html(), {data: data});
				self.elements.listContainer.html(list);
		};

		init();
	}



	return View;
});


