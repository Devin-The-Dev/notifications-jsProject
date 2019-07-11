var notify = document.querySelector('.notify');
var albums = document.querySelector('.album');
var itemsTotal = document.querySelector('.items-total');
var saveBtn = document.querySelector('.button');

var albumsSelected = [];
var i = 0;

while (i < albums.length) {
    albums[i].onclick = function (e) {
        console.log('clicked on album');
    };
    console.log(i);
    i++;
}

console.log('empty');