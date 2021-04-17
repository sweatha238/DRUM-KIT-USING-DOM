
for(var i=0;i<document.querySelectorAll('.drum').length;i++){
  document.querySelectorAll('.drum')[i].addEventListener('click',function(){
          var innerHtml = this.innerHTML;
          makesound(innerHtml);
          Animation(innerHtml);
  });
}

document.addEventListener('keydown',function(event){
  var keyPressed = event.key;
  makesound(keyPressed);
Animation(keyPressed);
});

function makesound(key){
  switch (key) {
  case "s":
  var audio = new Audio('crash.mp3');
  audio.play();
  break;
  case "w":
  var audio = new Audio('kick-bass.mp3');
  audio.play();
  break;
  case "e":
  var audio = new Audio('snare.mp3');
  audio.play();
  break;
  case "a":
  var audio = new Audio('tom-1.mp3');
  audio.play();
  break;
  case "t":
  var audio = new Audio('tom-2.mp3');
  audio.play();
  break;
  case "h":
  var audio = new Audio('tom-3.mp3');
  audio.play();
  break;
  case "a":
  var audio = new Audio('tom-4.mp3');
  audio.play();
  break;

default: console.log(key);
}
}
function Animation(pressedKey){
var activeButton =  document.querySelector("."+pressedKey);
activeButton.classList.add('pressed');
setTimeout(function() {
  activeButton.classList.remove('pressed');
},100);
}
