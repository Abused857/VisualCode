var button = document.getElementById('button');
var message = document.getElementById('p1');
if (button && message) {
    button.addEventListener('click', function () {
        message.style.color = 'red';
        message.textContent = 'El párrafo ha sido modificado por DOM';
    });
}
else {
    console.error('El valor de button o message es null');
}
