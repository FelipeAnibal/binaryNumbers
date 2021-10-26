caixas = document.getElementsByClassName("caixa");

var Box = function (typeOfbox = "X", checked = false) {
  this.checked = !checked;
  this.typeOfbox = typeOfbox;
  this.el = caixas[caixas.length - boxArray.length - 1];
  this.value = $(".valor-p")[caixas.length - boxArray.length - 1].innerHTML * 1;
}

Box.prototype.check = function () {
  this.checked = !this.checked;

  switch (this.typeOfbox) {
    case '01':
      marked = '1'
      empty = '0'
      break;
    case 'X':
      marked = 'X'
      empty = ''
      break;
    default:
      console.log("This type of box does not exist");
  }

  if (this.checked) {
    this.el.innerHTML = '<p>' + marked + '</p>';
  } else {
    this.el.innerHTML = '<p>' + empty + '</p>';
  }
};

for (var i = 0; i < 9; i++) {
  var box = new Box("01");
  boxArray.push(box);
  boxArray[i].check();
}
for (var i = 9; i < 18; i++) {
  var box = new Box("X");
  boxArray.push(box);
  boxArray[i].check();
}
