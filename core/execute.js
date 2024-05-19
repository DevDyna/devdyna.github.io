//stackoverflow save life
function loadScript(e) {
  var t = document.getElementsByTagName("head")[0],
    n = document.createElement("script");
  (n.type = "text/javascript"), (n.src = e), t.appendChild(n);
}

loadScript("./core/var.js");

function load() {
  for (let i = 0; i < global.section.length; i++) {
    const section = document.createElement("button");
    section.className = global.name;
    section.innerText = global.section[i].name;
    section.addEventListener("click", function () {
      window.location.href = global.section[i].url;
    });
    document.getElementById("base_div").appendChild(section);
  }
}
