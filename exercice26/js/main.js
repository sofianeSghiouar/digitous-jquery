// $(function(){
//     $(".btn-success").click(function(){
//         $(".form-control").addClass("is-invalid")
//     })
// })

document.addEventListener("DOMContentLoaded", function () {
    let btn = document.querySelector("#exercise button.btn.btn-success");
    let formInput = document.querySelector(".form-control");

    btn.addEventListener('click', function () {
        formInput.classList.add('is-invalid');
    })
});