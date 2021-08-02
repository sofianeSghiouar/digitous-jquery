// $(function () {
//     $(".btn-success").click(function () {
//         $("#square").animate(
//             {
//                 bottom: '-10px' , 
//                 right: '-10px'

//             }
//         );
//     })
// })



let btn = document.querySelector('.btn-success');
let square = document.querySelector('#square');
let parentSquare = document.querySelector('#exercise'); 

let parentSquareHeight = 0;
let parentSquareWidth = 0;
let squarePositionX = 0;
let squarePositionY = 0;
let parentSquareOffset = 0;

parentSquare.addEventListener('click', function(parentSquare){       
     
    parentSquareOffset = parentSquare.target.offsetLeft;

    parentSquareHeight = parentSquare.path[1].offsetHeight - square.offsetHeight - parentSquareOffset  ;

    parentSquareWidth = parentSquare.path[1].offsetWidth -  square.offsetWidth - parentSquareOffset ;
    
    
})

square.addEventListener("click", function (square) {
    squarePositionX = square.target.offsetLeft;
    squarePositionY = square.target.offsetTop;
    
})

btn.addEventListener("click", function () {
    
    transform(square);

})


function transform(elem) {

    let left = squarePositionX;
    let top = squarePositionY;
    
    function size() {
        left+= (parentSquareWidth / parentSquareHeight);
        top++;

        elem.style.top = top + 'px';
        elem.style.left = left + 'px';
        console.log("top: ", elem.style.top)
        console.log("left: ", elem.style.left)

        if (left == parentSquareWidth && top == parentSquareHeight) {
            clearInterval(Interval);
        }
    }
    
    let Interval = setInterval(size, 10);
}
