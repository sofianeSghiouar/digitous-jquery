$(document).ready(function(){
    $(".btn-success").click(function() {
        revelarse();
    })
})

function revelarse() {
    $("#text").css("display", "block");
}