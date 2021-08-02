// $(function() {
//     $(".btn-success").click(function(){
//         $("#text").css("font-size", "50px");
//     })
// })

let btn = document.querySelector('.btn-success');
let text = document.querySelector('#text');
btn.addEventListener("click" , function() {
    text.style.fontSize = '50px';
})