// $(function() {
//     $(".btn-success").click(function(){
//         $("#text").css("font-size", "50px");
//     })
// })

document.addEventListener("DOMContentLoaded", function () {
    let btn = document.querySelector("#exercise button.btn.btn-success");
    let text = document.querySelector('#text');
    btn.addEventListener("click", function () {
        text.style.fontSize = '50px';
    })
});