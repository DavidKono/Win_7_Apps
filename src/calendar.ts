import {createWindow} from "./window.js" 

const calendar = createWindow("Calendar")

const calendar_body = calendar.element.querySelector<HTMLElement>(".window-body")

if (calendar_body) calendar_body.innerHTML = `CALENDAR`

const split = document.getElementById("split-vertical")
split.appendChild(calendar.element)