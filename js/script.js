var $cont = document.querySelector(".cont");
var $elsArr = [].slice.call(document.querySelectorAll(".el"));
var $closeBtnsArr = [].slice.call(document.querySelectorAll(".el__close-btn"));

setTimeout(function () {
  $cont.classList.remove("s--inactive");
}, 200);

$elsArr.forEach(function ($el) {
  $el.addEventListener("click", function () {
    if (this.classList.contains("s--active")) return;
    $cont.classList.add("s--el-active");
    this.classList.add("s--active");
  });
});

$closeBtnsArr.forEach(function ($btn) {
  $btn.addEventListener("click", function (e) {
    e.stopPropagation();
    $cont.classList.remove("s--el-active");
    document.querySelector(".el.s--active").classList.remove("s--active");
  });
});



// varios casos en la funcion opa para que nos rediriga a una determinada pagina 
function opa($nom) {
  document.body.classList.add("transparent"); // Aplica la clase 'transparent' para hacer todos los elementos transparentes
  setTimeout(function () {
    switch ($nom) {
      case "che":
        window.location.href = "html/che.html";
        break;
      case "che2":
        window.location.href = "che.html";
        break;
      case "cheW":
        window.location.href = "https://es.wikipedia.org/wiki/Che_Guevara";
        break;

      case "tomas":
        window.location.href = "html/tomas.html";
        break;
      case "tomas2":
        window.location.href = "tomas.html";
        break;
      case "tomW":
        window.location.href = "https://es.wikipedia.org/wiki/Thomas_Sankara";
        break;

      case "ho":
        window.location.href = "html/ho.html";
        break;
      case "ho2":
        window.location.href = "ho.html";
        break;
      case "hoW":
        window.location.href = "https://es.wikipedia.org/wiki/Ho_Chi_Minh";
        break;

      case "fred":
        window.location.href = "html/fred.html";
        break;
      case "fred2":
        window.location.href = "fred.html";
        break;
      case "fredW":
        window.location.href = "https://es.wikipedia.org/wiki/Fred_Hampton";
        break;

      case "raul":
        window.location.href = "html/raul.html";
        break;
      case "raul2":
        window.location.href = "raul.html";
        break;
      case "raulW":
        window.location.href = "https://es.wikipedia.org/wiki/Ra%C3%BAl_Castro";
        break;
      default:
        window.location.href = "../index.html";
    }

    // Redirige a la nueva página después de 2 segundos
  }, 2000); // 2000 milisegundos = 2 segundos
}
