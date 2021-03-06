const {app, BrowserWindow} = require('electron')

let logWindow

app.on('ready', () => {
    logWindow = new BrowserWindow({
        minWidth: 1200,
        minHeight: 680,
        resizable: false,
        center: true,
        show: false,
    });
    logWindow.once('ready-to-show', () => {
        logWindow.show()
    });
    logWindow.loadURL(`file://${__dirname}/dist/signInUp/login.html`);
    // logWindow.setMenu(null)
});

exports.openReg = () => {
    logWindow.loadURL(`file://${__dirname}/dist/signInUp/reg.html`)
}
exports.openLog = () => {
    logWindow.loadURL(`file://${__dirname}/dist/signInUp/login.html`)
}

exports.openWorkSpace = () => {
    logWindow.loadURL(`file://${__dirname}/dist/workSpace/index.html`)
}