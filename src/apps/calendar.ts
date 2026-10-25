import {createWindow} from "../window.js" 

export function get_html() {
    const calendar = createWindow("Calendar")
    
    const calendar_body = calendar.element.querySelector<HTMLElement>(".window-body")
    
    if (calendar_body) calendar_body.innerHTML = `CALENDAR`

    return calendar.element
}