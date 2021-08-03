// $(document).ready(function(){
// $('#exercise button.btn.btn-success').click(function(){
//     displaySecretText();
    
// })
    
// })


document.addEventListener("DOMContentLoaded",function() {
    console.log('ok')
    let btn = document.querySelector("#exercise button.btn.btn-success");
    btn.addEventListener("click", function(){
        displaySecretText();
    })
})