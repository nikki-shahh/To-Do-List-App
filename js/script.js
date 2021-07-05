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

