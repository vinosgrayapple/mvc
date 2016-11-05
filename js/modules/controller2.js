function Controller(model, view) {
    var self = this;
  view.elements.listContainer.on('dblclick','.itemN',editItem);
 view.elements.addBtn.on('click', addItem);
 view.elements.input.on('keyup', inputEnter);
 // view.elements.itemEdit.on('keyup', inputEnter);
 view.elements.listContainer.on('click','.item__delete',function(){ 
        var item = $(this).attr('data-value');
            model.removeItem(item);
            view.renderList(model.data);

    });

    function inputEnter(event) {
        if(event.keyCode == 13){
        event.preventDefault();
            addItem();

    }
    }
    function editItem() {
        var item = $(this).find('span').attr('data-value');
        if (item === undefined) {
            view.renderList(model.data);
            return;}
        $(this).html('<input type="text" value="' + item + '" class="edit__item" autofocus>');

         view.elements.listContainer.on('keyup','.edit__item',edIt);

         function edIt(event) {
            if(event.keyCode == 13){
                // event.preventDefault();
                var newItem = $('.edit__item').val();
         if (newItem === undefined || newItem === '') {
            // view.renderList(model.data);
            return;}
         // if (!newItem.length) {view.renderList(model.data);}
                 var index = model.data.indexOf(item);
                if (index === -1) {return;}
                 model.data.splice(index,0,newItem);
                 model.removeItem(item);
                 view.renderList(model.data);
    }
         }

    }

    function addItem(){
    var newItem = view.elements.input.val();
    model.addItem(newItem);
    view.renderList(model.data);
    view.elements.input.val('');
    }
}
   
   