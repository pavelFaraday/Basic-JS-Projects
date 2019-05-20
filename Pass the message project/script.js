var sendBtn = document.querySelector('#sendBtn');
var messageIn = document.querySelector('#messageIn');
var messageOut = document.querySelector('#messageOut');

sendBtn.addEventListener('click', sendMsg);

function sendMsg () {
    var content = messageIn.value;
    //console.log(content);

    if(content==='') {
        alert('Please, enter valid value')
    }
    else {
    messageOut.innerHTML = content;
    messageIn.value = '';
    }
}
