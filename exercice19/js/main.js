// $(function() {
//     $(".btn-success").click(function(){
//         $("input[type='text']").removeAttr("disabled")
//     })
// })

let btn = document.querySelector('.btn-success');
let input = document.querySelector("input[type='text']");
btn.addEventListener("click" , function() {
    input.removeAttribute('disabled');
})