var effect_box = document.getElementsByClassName('text-effect');
    
    // 효과 함수
    function effect(object,speed) {
        
        // 해당 객체안에 들어가있는 모든 텍스트갯수를 불러옵니다.
        var object_len = object.item(0).innerText.length;
        // 해당 객체안에 들어가있는 모든 텍스트를 변수에 할당합니다.
        var object_text = object.item(0).innerText;
        
        // 기존에 있는 text모두 제거
        object.item(0).innerHTML = '';
        
        for (var i = 0; i <= object_len ; i++){
            // 텍스트를 감싸줄 'p' 태그를 생성합니다.
            n_tag = document.createElement("p");
            // 해당 div에 감싸줄 'p' 태그를 추가합니다.
            object.item(0).append(n_tag);
            // 넣은 'p' 태그 안에 텍스트를 추가합니다.
            n_tag.append(object_text.charAt(i))

            if( i >= object_len ) {
                var anima = true;
            }
        }
        if( anima === true ){
            var turn = 0;
            var opacity_txt = setInterval(function(){
                document.querySelectorAll('p').item(turn).style.opacity = '1';
                turn ++;
            
                // object_len 갯수와 turn 갯수가 동일해지면 작동 중지
                if(object_len === turn){
                    clearInterval(opacity_txt);
                }
            },speed);
        }
    }


let all = document.querySelectorAll("#img_btn")
console.log(all.length)
all[0].addEventListener('click',function(){
    window.scrollBy({left:0, top:2030, behavior:'smooth'});
})
all[1].addEventListener('click',function(){
    window.scrollBy({left:0, top:2430, behavior:'smooth'});
})
all[2].addEventListener('click',function(){
    window.scrollBy({left:0, top:2830, behavior:'smooth'});
})


var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
    setTimeout(showSlides, 2000); 
}



var modal = document.getElementById('myModal');
var btn = document.getElementById("modal_btn");
var span = document.getElementsByClassName("close")[0];                                          

btn.onclick = function() {
    modal.style.display = "block";
}
span.onclick = function() {
    modal.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

var modal1 = document.getElementById('myModal1');
var btn1 = document.getElementById("modal_btn_menu");
var span1 = document.getElementsByClassName("close")[1];                                          

btn1.onclick = function() {
    modal1.style.display = "block";
}
span1.onclick = function() {
    modal1.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == modal1) {
        modal1.style.display = "none";
    }
}

setInterval(function(){
             
    var timer = new Date();
    var h = timer.getHours();
    var m = timer.getMinutes();
    var s = timer.getSeconds();
    document.getElementById('clock').innerHTML = h + ":" + m + ":" + s;
},1000);