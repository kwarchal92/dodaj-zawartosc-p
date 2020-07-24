let button_dodaj = document.getElementById('dodaj');
let button_usun = document.getElementById('usun');

let tekst = document.querySelector('p');


button_dodaj.onclick = function(){
    tekst.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque qui veritatis ducimus nisi sint mollitia ratione blanditiis ipsum nulla? Rem quasi recusandae natus optio, maiores atque expedita assumenda officiis doloremque.';
}

button_usun.onclick = function(){
    tekst.textContent = '';
}