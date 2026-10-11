import {createWindow} from "./window.js" 

const chat = createWindow("Chat")

const chat_body = chat.element.querySelector<HTMLElement>(".window-body")

const bonzi_div = document.createElement("div")
bonzi_div.innerHTML = `
    <div">
        <img src="img/bonzi/Blink.gif" width="200px">
    </div>
    `
bonzi_div.style.backgroundColor = "black"
bonzi_div.style.width =  "200px"

const message_div = document.createElement("div")
message_div.innerHTML += "heyo"
    
if (chat_body) {
    chat_body.appendChild(bonzi_div)
    chat_body.appendChild(message_div)
}

const split = document.getElementById("split-vertical")
if (split) {
    split.appendChild(chat.element)
}