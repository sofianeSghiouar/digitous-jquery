// $(function(){
//     $(".btn-success").click(function() {
//         $('#square').css("background-color", "red")
//     })
// })

// 


let btn = document.querySelector('.btn-success');
let square = document.querySelector('#square');
btn.addEventListener("click" , function() {
    square.style.backgroundColor = 'red';
})