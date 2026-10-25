export function createWindow(title: string) {
    const windowEl = document.createElement("div")

    windowEl.innerHTML = `
    <div class="window glass active">
        <div class="title-bar">
            <div class="title-bar-text">${title}</div>
            
            <div class="title-bar-controls">
                <button aria-label="Minimize"></button>
                <button aria-label="Maximize"></button>
                <button aria-label="Close"></button>
            </div>
        </div>
        
        <div class="window-body"></div>
    </div
    `

    return {
        element: windowEl,
    }
}

export function replaceWin(window_name: string, element: HTMLElement) {
    const window = document.getElementById(window_name)

    window?.replaceChildren(element)
    window?.appendChild(element)
}