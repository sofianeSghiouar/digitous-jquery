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


let btn = document.querySelector(".btn-success");
btn.addEventListener("click", function() {
    fetch("https://restcountries.eu/rest/v2/name/france").then(function(err,res) {
    if(err){
        console.log("error", err);
    }
        console.log(JSON.parse(res)[0].name)
        
        
        // console.log(JSON.parse(body)[0].name);
        // console.log(JSON.parse(body)[0].capital);
    })
})