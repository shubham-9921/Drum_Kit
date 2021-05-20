// Detecting the Key
var noOfButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < noOfButtons; i++) {

    document.querySelectorAll(".drum")[i].addEventListener("click", function () {

        var buttonInnerhtml = this.innerHTML;

        makeSound(buttonInnerhtml);

        buttonAnimation(buttonInnerhtml);

    });
}

//detercting the keyboard

document.addEventListener("keypress", function(event){
    makeSound(event.key);

    buttonAnimation(event.key);
});



function makeSound(key){

    switch (key) {

        case "w":
            var tom1 = new Audio("sounds/tom1.mp3");
            tom1.play();
            break;

        case "a":
            var tom2 = new Audio("sounds/tom2.mp3");
            tom2.play();
            break;

        case "s":
            var tom3 = new Audio("sounds/tom3.mp3");
            tom3.play();
            break;

        case "d":
            var tom4 = new Audio("sounds/tom4.mp3");
            tom4.play();
            break;

        case "j":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;

        case "k":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;

        case "l":
            var kick = new Audio("sounds/kick.mp3");
            kick.play();
            break;

        default:console.log(buttonInnerhtml);
    };

}


function buttonAnimation(currentKey){

    var activeButton = document.querySelector("." + currentKey);

    activeButton.classList.add(".pressed");


    setTimeout(function(){
        activeButton.classList.remove(".pressed")}, 100
    );

}