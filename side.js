let open = 1;
let tutorial = document.getElementById('tutorial');

function toggleSide() {
  if (open == 0) {
	tutorial.style.width = '0%';
	tutorial.style.minWidth = '0px';
	document.getElementById('open-icon').innerText = 'Tutorial';
	open = 1;
  } else if (open == 1) {
	tutorial.style.width = '50%';
	tutorial.style.minWidth = '500px';
	document.getElementById('open-icon').innerText = 'Full';
	open = 2;
  } else if (open == 2) {
	tutorial.style.width = '100%';
	tutorial.style.minWidth = '500px';
	document.getElementById('open-icon').innerText = 'Hide';
	open = 0;
  }
}

// Make the DIV element draggable:
dragElement(document.getElementById('open'));

function dragElement(elmnt) {
  var pos1 = 0,
    pos2 = 0,
    pos3 = 0,
    pos4 = 0;
  if (document.getElementById(elmnt.id)) {
    // if present, the header is where you move the DIV from:
    document.getElementById(elmnt.id).onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV:
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = elmnt.offsetTop - pos2 + 'px';
    elmnt.style.left = elmnt.offsetLeft - pos1 + 'px';
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}
