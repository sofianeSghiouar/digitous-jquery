// $(function(){
//     $(".btn-success").click(function() {
//         $('#square').css("background-color", "red")
//     })
// })

// 

document.addEventListener("DOMContentLoaded", function () {
    let btn = document.querySelector("#exercise button.btn.btn-success");
    let square = document.querySelector('#square');
    btn.addEventListener("click", function () {
        square.style.backgroundColor = 'red';
    })
});