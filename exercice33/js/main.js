// $(function() {
//     $(".btn-success").click(function() {
//         $.ajax({
//             url: "https://restcountries.eu/rest/v2/name/france",
//             success: function(data, status, response) {
//                 $("#country").html(data[0].name);
//                 $("#capital").html(data[0].capital);
//             } 
//         })
//     })
// })



let btn = document.querySelector(".btn-success");

btn.addEventListener("click", function () {
    var request = new XMLHttpRequest();

    request.open('GET', 'https://restcountries.eu/rest/v2/name/france', true);
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








