// $(function() {
//     $(".btn-success").click(function(){
//         $("#square").animate(
//             {
//                 width: '500px'
//             }
//         );
//     })
// })

let btn = document.querySelector('.btn-success');
let square = document.querySelector('#square');
btn.addEventListener("click", function () {
    move(square);
})

function move(elem) {
    let width = 150;
    function size() {
        width++;
        elem.style.width = width + 'px';
        if (width == 500) {
            clearInterval(Interval);
        }
    }
    let Interval = setInterval(size, 5);
}
