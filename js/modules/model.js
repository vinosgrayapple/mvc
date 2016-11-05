define(
	'Model',
[

],
function() {
	var Model = function(data) {
	var self = this;
	self.data = data;

	self.addItem = function(item) {
		if (item.length === 0) {return;}
		self.data.unshift(item);

		return self.data;
	};
	
	self.removeItem = function(item) {
		var index = self.data.indexOf(item);
		// if (index) {return}
		self.data.splice(index,1);
			return self.data;
	};

	}

	return Model;
	
	
	});

