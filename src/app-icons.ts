// icon src, associated js, window 1 or 2
// clicking again removes the window since window is child of split-vertical div

import {replaceWin} from "./window.js" 

function app_icon(img_src: string, module: string, window_position: string) {
    const icon_div = document.createElement("button")
    icon_div.classList.add("blank-button")
    icon_div.style.width =  "50px"

    const icon_img = document.createElement("img")
    icon_img.src = img_src
    icon_img.width = 32

    icon_div?.appendChild(icon_img)

    icon_div.addEventListener('click', async () => {
        const app = await import(`./apps/${module}`)
        const html = app.get_html()
        replaceWin(window_position, html)
    })

    const split = document.getElementById("app-icons")
    split?.appendChild(icon_div)
}

app_icon("img/ie.png", "calendar.js", "win1")
app_icon("img/aero.png", "chat.js", "win2")
app_icon("img/timer.png", "timer.js", "win1")