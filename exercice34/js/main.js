// $(function() {
//     $(".btn-success").click(function(){
//         console.log($("#form-control").val());
//         let value = $(".form-control").val();
//         $.ajax({
//             url: "https://restcountries.eu/rest/v2/name/" + value,
//             success: function(data, status, response) {
//                 $("#country").html(data[0].name);
//                 $("#capital").html(data[0].capital);
//             }
//         });

//     })
// })


document.addEventListener("DOMContentLoaded", function () {

    let btn = document.querySelector(".btn-success");

    btn.addEventListener("click", function () {
        let request = new XMLHttpRequest();
        let inputValue = $(".form-control").val();


        request.open('GET', 'https://restcountries.eu/rest/v2/name/' + inputValue, true);
        request.onload = function () {
            if (this.status >= 200 && this.status < 400) {
                let data = JSON.parse(this.response)
                $("#country").html(data[0].name);
                $("#capital").html(data[0].capital);
            } else {
                console.log('error return information')
            }
        };
        request.onerror = function () {
            console.log('error connection')
        };

        request.send();
    });
});
