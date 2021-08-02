// $(function() {
//     $(".btn-success").click(function(){
//         $("#text").html("Konexio!");
//     })
// })

let btn = document.querySelector('.btn-success');
let text = document.querySelector('#text');
btn.addEventListener("click" , function() {
    text.innerHTML = 'Konexio!';
})