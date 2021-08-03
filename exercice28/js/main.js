// $(function() {
//     $(".btn-success").click(function() {
//         console.log($(".form-control").val())
//     })
// })


let btn = document.querySelector(".btn-success");
let formInput = document.querySelector(".form-control");

btn.addEventListener("click", function() {
    console.log(formInput.value);
})