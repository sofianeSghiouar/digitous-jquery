// $(function() {
//     $(".btn-success").click(function() {
//         if($(".form-control").val().length > 5 || $(".form-control").hasClass("is-invalid")) {
//             $(".form-control").addClass("is-valid");
//             console.log($(".form-control").hasClass("is-invalid"));
//         }
//     });
// });

document.addEventListener("DOMContentLoaded", function () {
    let btn = document.querySelector(".btn-success");
    let formInput = document.querySelector(".form-control");

    btn.addEventListener("click", function () {
        if (formInput.value.length > 5 || formInput.classList.contains("is-invalid")) {
            formInput.classList.add("is-valid");
        }
    })

});
