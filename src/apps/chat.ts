import {createWindow} from "../window.js" 

export function get_html() {

    const chat = createWindow("Chat")
    
    const chat_body = chat.element.querySelector<HTMLElement>(".window-body")
    
    const bonzi_div = document.createElement("div")
    bonzi_div.style.backgroundColor = "black"
    bonzi_div.style.width =  "200px"
    
    const bonzi_gif = document.createElement("img")
    // bonzi_gif.src = "img/bonzi/Greet.gif"
    bonzi_gif.src = "img/bonzi/HandsBehind.gif"
    bonzi_gif.width = 200
    
    bonzi_div.appendChild(bonzi_gif)
    
    const message_div = document.createElement("div")
    message_div.innerHTML += "heyo"
    
    chat_body?.appendChild(bonzi_div)
    chat_body?.appendChild(message_div)
    
    // replaceWin(window, chat.element)
    return chat.element
}