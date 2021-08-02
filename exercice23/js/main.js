$(function () {
    $(".btn-success").click(function () {
        $("#square").animate(
            {
                bottom: '-10px' , 
                right: '-10px'

            }
        );
    })
})



// let btn = document.querySelector('.btn-success');
// let square = document.querySelector('#square');
// let parent = document.querySelector('#exercise'); 
// let parentHeight = 0;
// let parentWidth = 0;
// let squarePositionX = 0;
// let squarePositionY = 0;

// parent.addEventListener('click', function(event){    
//     parentHeight += event.target.offsetHeight;
//     parentWidth += event.target.offsetWidth;
// })

// square.addEventListener("click", function (event) {
    
//     console.log(event)

// })

// btn.addEventListener("click", function () {
    
//     transform(square);

// })


// function transform(elem) {

//     let left = 0;
//     let top = 0;
//     function size() {
//         left++;
//         top++;
//         elem.style.left = left + 'px';
//         elem.style.top = top + 'px';
//         if (left == parentWidth) {
//             clearInterval(Interval);
//         }
//     }
//     let Interval = setInterval(size, 5);
// }