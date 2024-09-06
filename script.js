// Function to open the window
function openWindow(windowId) {
    document.getElementById(windowId).style.display = 'block';
}

// Function to close the window
function closeWindow(windowId) {
    document.getElementById(windowId).style.display = 'none';
}

// Dragging functionality
dragElement(document.getElementById("window1"));
dragElement(document.getElementById("window2"));

function dragElement(el) {
    let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    const header = el.querySelector(".window-header");
    if (header) {
        // If present, the header is where you move the window
        header.onmousedown = dragMouseDown;
    } else {
        // Otherwise, move the element from anywhere inside the window
        el.onmousedown = dragMouseDown;
    }

    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        // Get the mouse cursor position at startup
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        // Calculate the new cursor position
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        // Set the window's new position
        el.style.top = (el.offsetTop - pos2) + "px";
        el.style.left = (el.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {
        // Stop moving when mouse is released
        document.onmouseup = null;
        document.onmousemove = null;
    }
}

