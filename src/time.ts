const clock_time = document.getElementById('clock_time')
const clock_date = document.getElementById('clock_date')

clock_time.textContent = new Date().toLocaleTimeString().slice(0,5)
clock_date.textContent = new Date().toLocaleDateString('en-GB')