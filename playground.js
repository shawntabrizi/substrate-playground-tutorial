let playground = document.getElementById("playground");

playground.addEventListener("change", urlChanged);

function urlChanged() {
	console.log(playground.contentWindow.location);
}
