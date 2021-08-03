// $(document).ready(function(){
// $('.btn-success').click(function(){
//     displaySecretText();
    
// })
    
// })


document.addEventListener("DOMContentLoaded",function() {
    console.log('ok')
    let btn = document.querySelector('.btn-success');
    btn.addEventListener("click", function(){
        displaySecretText();
    })
})