// $(function() {
//     $(".btn-success").click(function(){
//         $("input[type='text']").removeAttr("disabled")
//     })
// })

document.addEventListener("DOMContentLoaded", function () {
    let btn = document.querySelector("#exercise button.btn.btn-success");
    let input = document.querySelector("input[type='text']");
    btn.addEventListener("click", function () {
        input.removeAttribute('disabled');
    })
});