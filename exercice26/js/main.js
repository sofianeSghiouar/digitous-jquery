// $(function(){
//     $(".btn-success").click(function(){
//         $(".form-control").addClass("is-invalid")
//     })
// })


let btn = document.querySelector(".btn-success");
let formInput = document.querySelector(".form-control");

btn.addEventListener('click', function(){
    formInput.classList.add('is-invalid');
})
