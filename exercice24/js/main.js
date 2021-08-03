// $(function () {
//     $(".btn-success").click(function () {
//         $("#bg").css("position","relative").animate({
//             left: "100px",
//         });
//     });

// });


document.addEventListener("DOMContentLoaded", function () {
    let btn = document.querySelector("#exercise button.btn.btn-success");
    let Img = document.querySelector('#bg'); 
    let  ImgPositionX = 0;
    
    Img.setAttribute("style","position:relative;")    
    Img.addEventListener("click", function (Img) {
        ImgPositionX = Img.target.offsetLeft;        
    });
    btn.addEventListener("click", function () {
        transform(Img);
    });

    function transform(elem) {
        let left = ImgPositionX;        
        function size() {
            left ++;                        
            elem.style.left = left + 'px';            
            console.log("left: ", elem.style.left)
            if (left == 100) {
                clearInterval(Interval);
            }
        }
        let Interval = setInterval(size, 10);
    }
});