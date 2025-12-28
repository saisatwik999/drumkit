var noOfDrums = document.querySelectorAll(".drum").length;

for (var i = 0; i < noOfDrums; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click", function () {

    var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);

  });
}

document.addEventListener("keypress", function (event) {
  makeSound(event.key);
  buttonAnimation(event.key);
});

function makeSound(key) {
  switch (key) {
    case "w":
      new Audio("sounds/mixkit-deep-dark-horror-drum-557.wav").play();
      break;
    case "a":
      new Audio("sounds/mixkit-futuristic-bass-hit-2303.wav").play();
      break;
    case "s":
      new Audio("sounds/mixkit-losing-drums-2023.wav").play();
      break;
    case "d":
      new Audio("sounds/mixkit-ominous-drums-appear-228.wav").play();
      break;
    case "j":
      new Audio("sounds/mixkit-ominous-drums-227.wav").play();
      break;
    case "k":
      new Audio("sounds/mixkit-spring-metal-hit-2302.wav").play();
      break;
    case "l":
      new Audio("sounds/mixkit-tribal-deep-drum-echoes-575.wav").play();
      break;
    default:
      console.log(key);
  }
}

function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);

  if (activeButton) {
    activeButton.classList.add("pressed");

    setTimeout(function () {
      activeButton.classList.remove("pressed");
    }, 100);
  }
}
