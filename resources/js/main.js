// This is just a sample app. You can structure your Neutralinojs app code as you wish.
// This example app is written with vanilla JavaScript and HTML.
// Feel free to use any frontend framework you like :)
// See more details: https://neutralino.js.org/docs/how-to/use-a-frontend-library

const stybtn = document.getElementById("stybtn");
const wbtn = document.getElementById("wbtn");
const funbtn = document.getElementById("funbtn");

function setTray() {
    if(NL_MODE != "window") {
        console.log("INFO: Tray menu is only available in the window mode.");
        return;
    }
    let tray = {
        icon: "/resources/icons/trayIcon.png",
        menuItems: [
            {id: "VERSION", text: "Get version"},
            {id: "SEP", text: "-"},
            {id: "QUIT", text: "Quit"}
        ]
    };
    Neutralino.os.setTray(tray);
}

function onTrayMenuItemClicked(event) {
    switch(event.detail.id) {
        case "VERSION":
            Neutralino.os.showMessageBox("Version information",
                `Neutralinojs server: v${NL_VERSION} | Neutralinojs client: v${NL_CVERSION}`);
            break;
        case "QUIT":
            Neutralino.app.exit();
            break;
    }
}

function onWindowClose() {
    Neutralino.app.exit();
}

Neutralino.init();

Neutralino.events.on("trayMenuItemClicked", onTrayMenuItemClicked);
Neutralino.events.on("windowClose", onWindowClose);

if(NL_OS != "Darwin") { // TODO: Fix https://github.com/neutralinojs/neutralinojs/issues/615
    setTray();
}

var bg_stat = new Boolean(false);

function test(){
    if(bg_stat == false){
        console.log("Loging....") 
        document.body.style.background = "#232526","-webkit-linear-gradient(to right, #414345, #232526)","linear-gradient(to right, #414345, #232526)";
        bg_stat = true;
        document.getElementById("welcome").style.color = "white";
    }
    else{
        console.log("Loging....") 
        document.body.style.background = "#B993D6","-webkit-linear-gradient(to right, #8CA6DB, #B993D6)","linear-gradient(to right, #8CA6DB, #B993D6)";
        bg_stat = false;
        document.getElementById("welcome").style.color = "black";
    }
}

function openyt(){
    Neutralino.os.open("https://www.youtube.com/");
    console.log("Opening youtube");
}

function openvscode(){
    Neutralino.os.runCommand("chromium");
    console.log("Opening vscode");
}
