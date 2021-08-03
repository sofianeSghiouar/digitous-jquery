$(function() {
    $(".btn-success").click(function(){
        console.log($("#form-control").val());
        let value = $(".form-control").val();
        $.ajax({
            url: "https://restcountries.eu/rest/v2/name/" + value,
            success: function(data, status, response) {
                $("#country").html(data[0].name);
                $("#capital").html(data[0].capital);
            }
        });
        
    })
})