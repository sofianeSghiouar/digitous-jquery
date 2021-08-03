// $(function() {
//     $(".btn-success").click(function() {
//         $.ajax({
//             url: "https://restcountries.eu/rest/v2/name/france",
//             success: function(data, status, response) {
//                 console.log(data[0].name);
//                 console.log(data[0].capital);
//             }
//         })
//     })
// })

document.addEventListener("DOMContentLoaded", function () {

    let btn = document.querySelector("#exercise button.btn.btn-success");

    btn.addEventListener("click", function () {
        var request = new XMLHttpRequest();

        request.open('GET', 'https://restcountries.eu/rest/v2/name/france', true);
        request.onload = function () {
            if (this.status >= 200 && this.status < 400) {
                let data = JSON.parse(this.response)
                console.log(data[0].name);
                console.log(data[0].capital);
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