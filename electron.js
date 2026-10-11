import {app, BrowserWindow} from 'electron'
import fs from 'fs'
import path from 'path'

let win = null

function createWindow() {
    win = new BrowserWindow({
        fullscreen: true,
        // x:60,
        // y:60,
        // width:1800,
        // height:1000,
        webPreferences:{
            nodeIntegration: true,
            contextIsolation: false
        }
    })

    // win.webContents.openDevTools({mode:'detach'})

    win.loadFile("static/index.html")

}

app.whenReady().then(createWindow)

const build_path = path.join(process.cwd(), './build')
const static_path = path.join(process.cwd(), './static')

// watch src folder
fs.watch(build_path, {recursive: true}, () => {
    win.reload()
})
// watch static folder
fs.watch(static_path, {recursive: true}, () => {
    win.reload()
})