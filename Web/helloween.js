var imgs = [
    'abc.jpg',
    'haha.jpg',
    'lol.jpg'
];
var num = 0;

function next(){
    var img = document.getElementById('img');
        num++;
        if(num >= imgs.length) {
            num = 0;
        }
        img.src = imgs[num];
    }