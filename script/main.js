let img = document.querySelector('.IMG');
let mouseCURSOUR = document.querySelector('.CURSOUR');
// img.onmouseover = function(e){
//     let x = e.pageX - e.img.offsetLeft;
//     let y = e.pageY - e.img.offsetTop;

//     e.img.style.setProperty('--x', x + 'px');
//     e.img.style.setProperty('--y', y + 'px');
// } 
let body = document.body
body.addEventListener('mousemove', CURSOUR);

function CURSOUR(e){
    mouseCURSOUR.style.left = e.pageX + 'px';
    mouseCURSOUR.style.top = e.pageY + 'px';
    mouseCURSOUR.classList.add('CURSOUR-active');
}

body.addEventListener('mouseenter', () =>{
    mouseCURSOUR.classList.add('CURSOUR-active');
} )

// img.addEventListener('mouseleave', () =>{
//     mouseCURSOUR.classList.remove('CURSOUR-active');
// } )

