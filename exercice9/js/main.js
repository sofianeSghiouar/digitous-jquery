// $(document).ready(function(){
//     $("#exercise button.btn.btn-success").click(function() {
//         revelarse();
//     })
// })

// function revelarse() {
//     $("#text").css("display", "block");
// }

document.addEventListener("DOMContentLoaded", function () { 
    let btn = document.querySelector("#exercise button.btn.btn-success");
    let text = document.querySelector("#text");

    btn.addEventListener("click", function() {
        text.style.display = "block";
    })
});