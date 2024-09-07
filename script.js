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


function longwalk() {
    document.querySelector('.title').innerText = "The long walk - Stephen King"
    document.querySelector('.review').innerText = "Against the wishes of his mother, sixteen-year-old Ray Garraty is about to compete in the annual grueling match of stamina and wits known as The Long Walk. One hundred boys must keep a steady pace of four miles per hour without ever stopping... with the winner being awarded 'The Prize'—anything he wants for the rest of his life. But, as part of this national tournament that sweeps through a dystopian America year after year, there are some harsh rules that Garraty and ninety-nine others must adhere to in order to beat out the rest. There is no finish line—the winner is the last man standing. Contestants cannot receive any outside aid whatsoever. Slow down under the speed limit and you're given a warning. Three warnings and you're out of the game—permanently...";    
    document.querySelector('.book-cover').style.backgroundImage = "url('https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1460924176i/28187217.jpg')"
    document.querySelector('.book-cover').style.backgroundSize = "cover";
    document.querySelector('.book-cover').style.backgroundPosition = "center";
}
function greenmile() {
    document.querySelector('.title').innerText = "The green mile - Stephen King"
    document.querySelector('.review').innerText = "The Green Mile is a 1996 serial novel by American writer Stephen King. It tells the story of death row supervisor Paul Edgecombe's encounter with John Coffey, an unusual inmate who displays inexplicable healing and empathetic abilities. The serial novel was originally released in six volumes before being republished as a single-volume work. The book is an example of magical realism. The subsequent film adaptation was a critical and commercial success. The Green Mile won the Bram Stoker Award for Best Novel in 1996.[1] In 1997, The Green Mile was nominated as Best Novel for the British Fantasy Award and the Locus Award.[2] In 2003 the book was listed on the BBC's The Big Read poll of the UK's 'best-loved novel'."
    document.querySelector('.book-cover').style.backgroundImage = "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbqhAN3xRiv2qrAyShACay8T12_LbD09SU5Q&s')"
    document.querySelector('.book-cover').style.backgroundSize = "cover";
    document.querySelector('.book-cover').style.backgroundPosition = "center";
}







function openEntry(entryId) {
    const entryContent = {
        'entry1': {
            title: "Dream Title 1",
            date: "Date 1",
            content: "Full content of dream entry 1..."
        },
        'entry2': {
            title: "Dream Title 2",
            date: "Date 2",
            content: "Full content of dream entry 2..."
        },
       'entry3': {
            title: "Dream Title 3",
            date: "Date 1",
            content: "Full content of dream entry 1..."
        },
        'entry4': {
            title: "Dream Title 4",
            date: "Date 2",
            content: "Full content of dream entry 2..."
        }
    };

    const { title, date, content } = entryContent[entryId];
    const entryWindow = window.open("", "", "width=600,height=400,scrollbars=yes");

    entryWindow.document.write(`
        <html>
        <head>
            <title>${title}</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    margin: 0;
                    padding: 0;
                    background-color: #2c2f36;
                    color: white;
                }
                .entry-window {
                    max-width: 600px;
                    margin: 20px auto;
                    padding: 20px;
                    background-color: #3a3f47;
                    border-radius: 8px;
                    border: 1px solid #5e6673;
                }
                .entry-title {
                    font-size: 24px;
                    margin: 0;
                }
                .entry-date {
                    font-size: 14px;
                    color: #aaa;
                    margin: 5px 0;
                }
                .entry-content {
                    font-size: 16px;
                    line-height: 1.5;
                }
                .close-btn {
                    display: block;
                    margin: 20px 0;
                    text-align: center;
                    font-size: 16px;
                    color: #e74c3c;
                    text-decoration: none;
                    background-color: #2c2f36;
                    border: 1px solid #e74c3c;
                    padding: 10px;
                    border-radius: 5px;
                }
                .close-btn:hover {
                    background-color: #e74c3c;
                    color: white;
                }
            </style>
        </head>
        <body>
            <div class="entry-window">
                <h1 class="entry-title">${title}</h1>
                <p class="entry-date">${date}</p>
                <div class="entry-content">${content}</div>
                <a href="#" class="close-btn" onclick="window.close(); return false;">Close</a>
            </div>
        </body>
        </html>
    `);
}
