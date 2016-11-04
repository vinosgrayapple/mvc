function Model(data) {
var self = this;
self.data = data;
self.addItem = function(item) {
	if (item.length === 0) {return;}
	self.data.unshift(item);

	return self.data;
};
self.removeItem = function(item) {
	var index = self.data.indexOf(item);
	self.data.splice(index,1);
		return self.data;
};

}
function View(model) {
	var self = this;
	function init() {
		var wrapper = tmpl($('#wrapper__template').html());
		
		$('.main').append(wrapper);
		self.elements = {
			input: $('.item__value'),
			addBtn: $('.item__add'),
			listContainer: $('.item__list'),
			removeItem: $('.item__delete'),
			itemN: $('.inemN')
		};
		self.renderList(model.data);
	};


	self.renderList = function(data) {
		
			var list = tmpl($('#list__template').html(), {data: data});
			self.elements.listContainer.html(list);
	};

	init();

}
function Controller(model, view) {
 var self = this;
  view.elements.listContainer.on('click','.itemN',function() {
 		console.log('Test');
 });
 view.elements.addBtn.on('click', addItem);
 view.elements.input.on('keyup', function(event) {
 		if(event.keyCode == 13){
        event.preventDefault();
        	addItem();

    }
 });

 view.elements.listContainer.on('click','.item__delete',function(){	
 		var item = $(this).attr('data-value');
 			//debugger
 			model.removeItem(item);
 			view.renderList(model.data);

 	});
 	
 	function addItem(){
 	var newItem = view.elements.input.val();
 	model.addItem(newItem);
 	view.renderList(model.data);
 	view.elements.input.val('');
 	}
}


$(function() {
	 var firstToDoList = ['Хлеб','Бананы','Кофе','Картошка','Купить наушники',];
	var model = new Model(firstToDoList);
	var view = new View(model);
	var controller = new Controller(model, view);
});