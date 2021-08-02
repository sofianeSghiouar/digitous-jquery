// $(function() {
//     $(".btn-success").click(function(){
//         $("#square").css("width", "500px");
//     })
// })

let btn = document.querySelector('.btn-success');
let square = document.querySelector('#square');
btn.addEventListener("click" , function() {
    square.style.width = '500px';
})