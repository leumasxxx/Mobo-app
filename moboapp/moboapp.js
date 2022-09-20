var com = document.querySelector(".com");
com.addEventListener('click', function (event) {
    var first = document.getElementById("data");
    var get = document.getElementById("none");
    data.style.display = "initial";
    none.style.display = "none"
    no.style.display = "none";
    non.style.display = "none"

}

);
var shed = document.querySelector(".schedule");
shed.addEventListener('click', function (event) {
    var first = document.getElementById("data");
    var get = document.getElementById("none");
    none.style.display = "initial";
    data.style.display = "none";
    non.style.display = "none";
    no.style.display = "none";

});

var mess = document.querySelector(".mess");
mess.addEventListener('click', function (event) {
    var second = document.getElementById("data");
    var getin = document.getElementById("non");
    non.style.display = "initial";
    data.style.display = "none";
    none.style.display = "none"
    no.style.display = "none";
});

var live = document.querySelector(".live")
live.addEventListener('click', function (event) {
    var no = document.getElementById("no");
    no.style.display = "initial";
    non.style.display = "none";
    data.style.display = "none";
    none.style.display = "none";
}

)
var close = document.getElementById("close")
close.addEventListener('click', function (event) {
    var grid = document.querySelector(".grid")
    grid.style.transform = "translateY(-120%)"
}
)

var nav = document.querySelector(".navbar")
  nav.addEventListener('click', function (event) {
    var grid = document.querySelector(".grid")
    grid.style.transform = "translateY(0%)"
  }

  )
  