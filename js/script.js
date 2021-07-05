function newItem(){

//---------- adds new item------//
let li = $('<li></li>');
let inputValue = $('#input').val();
li.append(inputValue);

if (inputValue=== ''){
  alert('You must write something!');
} else {
  $('#list').append(li);
}

//------------------crosses out---------------//
li.on('dblclick', function(){
    li.toggleClass ('strike');
});

//-----------adds delete button---------------//
let crossOutButton = $('<crossOutButton></crossOutButton>');
crossOutButton.append(document.createTextNode('X'));
li.append(crossOutButton);
crossOutButton.on ('click', function(){
  li.addClass('delete');
});
$('#list').sortable();
}
