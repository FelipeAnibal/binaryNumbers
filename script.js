boxArray = [];
sum = 0;
sumString = "Soma: ";
sumPlaceHolderEls = document.getElementsByClassName("sumPlaceholder");
numPlaceholderEls = document.getElementsByClassName("numberPlaceholder");

function generateNum() {
  randomNumber = Math.round(Math.random() * 511 + 1);

  for (var i = 0; i < numPlaceholderEls.length; i++) {
    numPlaceholderEls[i].innerHTML = randomNumber;
  }
  //uncheck all checked boxes
  for (var i = 0; i < boxArray.length; i++) {
    if (boxArray[i].checked) {
      checkBox(i);
    }
  }
}

function updateHTML() {

  for (var i = 0; i < sumPlaceHolderEls.length; i++) {
    sumPlaceHolderEls[i].innerHTML = 'Soma: ' + sum;
  }
  //change colors
  if (sum == randomNumber) {
    var color = "green";
    setTimeout(generateNum, 1000);
  }
  else {
    var color = "inherit";
  }

  for (var i = 0; i < sumPlaceHolderEls.length; i++) {
    sumPlaceHolderEls[i].style.color = color;
  }

}

generateNum();

function checkBox(indexOfBox) {
  var box = boxArray[indexOfBox];
  var box2 = boxArray[indexOfBox + 9];
  box.check();
  box2.check();
  if (box.checked) {
    sum += box.value;
  }
  else {
    sum -= box.value;
  }
  updateHTML();
}
