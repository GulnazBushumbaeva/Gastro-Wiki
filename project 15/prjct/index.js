function funcError(){
    alert("This function is not working yet :(");

    document.getElementById('sound').play();
}

function bigImg(x) {
    x.style.height = "375px";
    x.style.width = "520px";
}

function normalImg(x) {
    x.style.height = "300px";
    x.style.width = "450px";
}
function keyPress() {
    alert("To write your review, go to the feedback");
}

document.getElementById('review').addEventListener("keypress", keyPress)

$(document).ready(function(){
    $("#flip").click(function(){
        $("#panel").slideDown("slow");
    });
});

let subs = document.getElementById('subs');
subs.addEventListener("click", function() {
    alert('you have succesfully subscribed, check you e-mail')
})


function setNewImage()
{
    document.getElementById("icone").setAttribute("src", "img/shymlogo.jpg");
}
function setOldImage()
{
    document.getElementById("icone").setAttribute("src", "img/icone.jpg");
}

document.addEventListener("keyup", function(e){
    if(e.keyCode == 76){
        var audio = new Audio('sound/videoplayback1.mp3');
        audio.play();
    }
});



// Wrap every letter in a span
var textWrapper = document.querySelector('.ml1 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
    .add({
        targets: '.ml1 .letter',
        scale: [0.3,1],
        opacity: [0,1],
        translateZ: 0,
        easing: "easeOutExpo",
        duration: 600,
        delay: (el, i) => 70 * (i+1)
    }).add({
    targets: '.ml1 .line',
    scaleX: [0,1],
    opacity: [0.5,1],
    easing: "easeOutExpo",
    duration: 700,
    offset: '-=875',
    delay: (el, i, l) => 80 * (l - i)
}).add({
    targets: '.ml1',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
});