$(function () {
    $(".btn-success").click(function () {
        $("#bg").animate({
            left: "100px",
            top: "20px"
        
        });
    });

});

// let btn = document.querySelector('.btn-success');
// let Bg = document.querySelector('#bg');
// let parentBg = document.querySelector('#exercise'); 

// let parentBgHeight = 0;
// let parentBgWidth = 0;
// let BgPositionX = 0;
// let BgPositionY = 0;
// let parentBgOffset = 0;

// parentBg.addEventListener('click', function(parentBg){       
     
//     parentBgOffset = parentBg.target.offsetLeft;

//     parentBgHeight = parentBg.path[1].offsetHeight - Bg.offsetHeight - parentBgOffset  ;

//     parentBgWidth = parentBg.path[1].offsetWidth -  Bg.offsetWidth - parentBgOffset ;
    
    
// })

// Bg.addEventListener("click", function (Bg) {
//     BgPositionX = Bg.target.offsetLeft;
//     BgPositionY = Bg.target.offsetTop;
    
// })

// btn.addEventListener("click", function () {
    
//     transform(Bg);

// })


// function transform(elem) {

//     let left = BgPositionX;
//     let top = BgPositionY;
    
//     function size() {
//         left+= (parentBgWidth / parentBgHeight);
//         top++;

//         elem.style.top = top + 'px';
//         elem.style.left = left + 'px';
//         console.log("top: ", elem.style.top)
//         console.log("left: ", elem.style.left)

//         if (left == parentBgWidth && top == parentBgHeight) {
//             clearInterval(Interval);
//         }
        
//     }
    
//     let Interval = setInterval(size, 10);
// // }
