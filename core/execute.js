//stackoverflow save life
function loadScript(url)
{    
    var head = document.getElementsByTagName('head')[0];
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = url;
    head.appendChild(script);
}

loadScript('./core/var.js')

function load(){
for(let i=0;i<global.section.length;i++){
        const section = document.createElement("button");
        section.className = global.name
        section.innerText = global.section[i].name
		section.addEventListener("click", function () {
			window.location.href = global.section[i].url
			
			
		})
        document.getElementById("base_div").appendChild(section);
	}
}