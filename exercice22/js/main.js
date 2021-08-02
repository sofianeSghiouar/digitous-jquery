// $(function() {
//     $(".btn-success").click(function(){
//         $("#text").animate(
//             {
//                 fontSize: '50px'
//             }
//         );
//     })
// })

let btn = document.querySelector('.btn-success');
let text = document.querySelector('#text');
btn.addEventListener("click", function () {
    transform(text);
})

function transform(elem) {
    let fontSize = 10;
    function size() {
        fontSize++;
        elem.style.fontSize = fontSize + 'px';
        if (fontSize == 50) {
            clearInterval(Interval);
        }
    }
    let Interval = setInterval(size, 5);
}