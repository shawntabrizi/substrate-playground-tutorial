let tutorial = document.getElementById('tutorial');

// Start closed.
let open = 0;

function toggleSide() {
  if (open == 2) {
    tutorial.style.width = '0%';
    tutorial.style.minWidth = '0px';
    document.getElementById('open-icon').innerText = 'Tutorial';
    open = 0;
  } else if (open == 0) {
    tutorial.style.width = '50%';
    tutorial.style.minWidth = '500px';
    document.getElementById('open-icon').innerText = 'Full';
    open = 1;
  } else if (open == 1) {
    tutorial.style.width = '100%';
    tutorial.style.minWidth = '500px';
    document.getElementById('open-icon').innerText = 'Hide';
    open = 2;
  }
}

// Make the DIV element draggable:
openButton = document.getElementById('open');
dragElement(openButton);

function dragElement(elmnt) {
  var pos1 = 0,
    pos2 = 0,
    pos3 = 0,
    pos4 = 0;
  let drag = false;
  // otherwise, move the DIV from anywhere inside the DIV:
  elmnt.onmousedown = dragMouseDown;

  function dragMouseDown(e) {
    // Allow drag over iframe.
    let iframes = document.getElementsByTagName('iframe');
    Array.from(iframes).map(e => (e.style.pointerEvents = 'none'));
    // Assume this is not a drag to start
    drag = false;
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
    // Now we know this is a drag.
    drag = true;
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.bottom =
      document.body.offsetHeight -
      (elmnt.offsetTop + elmnt.offsetHeight - pos2) +
      'px';
    elmnt.style.right =
      document.body.offsetWidth -
      (elmnt.offsetLeft + elmnt.offsetWidth - pos1) +
      'px';
  }

  function closeDragElement() {
    if (!drag) {
      toggleSide();
    }
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
    // re-enable iframe pointer events
    let iframes = document.getElementsByTagName('iframe');
    Array.from(iframes).map(e => (e.style.pointerEvents = 'auto'));
  }
}
