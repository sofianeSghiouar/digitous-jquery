// $(function() {
//     $(".btn-success").click(function(){
//         $("#text").attr("class", "float-right");
//     })
// })

document.addEventListener("DOMContentLoaded", function () {
    let btn = document.querySelector("#exercise button.btn.btn-success");
    let text = document.querySelector('#text');
    btn.addEventListener("click", function () {
        text.style.float = 'right';
    })
});