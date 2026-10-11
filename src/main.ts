export async function handleKeyPress(e: KeyboardEvent) {
    if (e.key == 'Ecape') {
        window.close()
    }
}

window.addEventListener('keydown', handleKeyPress)