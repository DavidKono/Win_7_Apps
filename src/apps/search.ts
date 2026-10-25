import {createWindow} from "../window.js" 

export function get_html() {

    const window = createWindow("Internet Explorer")

    const window_body = window.element.querySelector<HTMLElement>(".window-body")

    if (window_body) window_body.innerHTML = `
        <webview src="https://www.google.com"
        style="width: 100%; height: 100%; border: none;">
        </webview>
    `

    return window.element
}