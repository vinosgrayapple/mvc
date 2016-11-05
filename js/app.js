requirejs.config({
    paths:{
        'jquery': 'libs/jquery',
        'tmpl': 'libs/tmpl',
        'View': 'modules/view',
				'Controller':'modules/controller',
				'Model': 'modules/model'

    },
    shim: {
        'jquery': {
            exports: 'jQuery',
        },
        'tmpl': {
            exports: 'tmpl',
        },
        'Controller': {
        	exports: 'Controller'
        },
        'View': {
        	exports: 'View'
        }
    }
});



require(
[
'View',
'Controller',
'Model',
'tmpl',
'jquery'
], 
function(View, Controller, Model, tmpl, $) {
	var firstToDoList = ['Хлеб','Бананы','Кофе','Картошка','Купить наушники'];
	var model = new Model(firstToDoList);
	var view = new View(model);
	var controller = new Controller(model, view);

});
