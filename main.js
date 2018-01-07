const {
    app,
    BrowserWindow,
} = require('electron');
const path = require('path');
const electronLocalshortcut = require('electron-localshortcut');
const url = require('url');
require('dotenv').config();

let win;

function createWindow () {
    win = new BrowserWindow({
        width: 800,
        height: 600,
    });

    win.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file:',
        slashes: true,
    }));

    if (process.env.ENV === 'development') {
        electronLocalshortcut.register(win, 'F12', () => {
            win.webContents.openDevTools();
        });

        if (process.env.DEVTOOLS) win.webContents.openDevTools();
    }

    win.on('closed', () => {
        win = null;
    });
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit();
});

app.on('activate', () => {
    if (win === null) createWindow();
});



console.log('                 _                        _');
console.log('                | |                      | |');
console.log(' _ __   ___   __| | ___    ___ ___  _ __ | |_ ___ _ __');
console.log('| \'_ \\ / _ \\ / _` |/ _ \\  / __/ _ \\| \'_ \\| __/ _ \\ \'__|');
console.log('| | | | (_) | (_| |  __/ | (_| (_) | |_) | ||  __/ |');
console.log('|_| |_|\\___/ \\__,_|\\___|  \\___\\___/| .__/ \\__\\___|_|');
console.log('               | |           | | || |');
console.log(' ___ ___  _ __ | |_ _ __ ___ | | ||_|_ _ __');
console.log('/ __/ _ \\| \'_ \\| __| \'__/ _ \\| | |/ _ \\ \'__|');
console.log('| (_|(_) | | | | |_| | | (_) | | |  __/ |');
console.log('\\___\\___/|_| |_|\\__|_|  \\___/|_|_|\\___|_|');
console.log('By Ashleigh Simonelli');

