//stackoverflow save life
function loadScript(e) {
  var t = document.getElementsByTagName("head")[0],
    n = document.createElement("script");
  (n.type = "text/javascript"), (n.src = e), t.appendChild(n);
}
loadScript("./core/json_manipulator.js");

function load() {
  let preview, upload, space, title, down;
  down = document.createElement("h6");
  down.textContent = "Made By DevDyna";
  title = document.createElement("h2");
  title.textContent = "Kubejs Copy-Paste Editor Tool";
  space = document.createElement("br");
  preview = document.createElement("div");
  preview.id = "result_area";
  upload = document.createElement("input");
  upload.type = "file";
  upload.id = "json";
  upload.accept = "json";
  let childs = [title, space, upload, space, preview, down];

  childs.forEach((c) => {
    document.getElementById("base_div").appendChild(c);
  });

  read();

  //setInterval(tick,10)
}

function tick() {}

function launch(obj) {
  var x = new Set(obj.coord.x).size;
  var z = new Set(obj.coord.z).size;
  let area = document.getElementById("result_area");
  area.style.height = z;
  area.style.width = x;
  var container = document.getElementById("result_area");
  container.appendChild(createChessboard(x, z));
}
function createChessboard(x, z) {
  var chessboard = document.createElement("table");
  chessboard.classList.add("chessboard");

  for (var i = 0; i < x; i++) {
    var row = document.createElement("tr");
    for (var j = 0; j < z; j++) {
      var cell = document.createElement("td");
      var color = (i + j) % 2 == 0 ? "white" : "black";
      cell.classList.add(color);
      row.appendChild(cell);
    }
    chessboard.appendChild(row);
  }
  return chessboard;
}
