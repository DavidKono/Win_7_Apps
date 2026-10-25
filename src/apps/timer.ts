import {createWindow} from "../window.js" 

export function get_html() {

    const timer = createWindow("Timer")

    const timer_body = timer.element.querySelector<HTMLElement>(".window-body")

    if (timer_body) timer_body.innerHTML = `Timer`

    return timer.element
}