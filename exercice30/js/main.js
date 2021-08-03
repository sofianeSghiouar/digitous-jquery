// $(function() {
//     $(".form-control").keyup(function() {
//         if($(".form-control").val().length > 5 || $(".form-control").hasClass("is-invalid") ){
//             $(".form-control").addClass("is-valid")
//         }
//     })
// })


let formInput = document.querySelector(".form-control");
formInput.addEventListener("keyup", function() {
    if(formInput.value.length > 5 || formInput.classList.contains("is-invalid")){
        formInput.classList.add("is-valid")
    }
})
