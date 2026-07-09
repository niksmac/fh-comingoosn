;(function () {
  function pad(n) {
    return String(n).padStart(2, '0')
  }
  const launch = new Date('2026-07-30T00:00:00')

  function update() {
    const now = new Date()
    const diff = launch - now
    const days = Math.max(0, Math.floor(diff / (1000 * 60 * 60 * 24)))
    const hours = Math.max(0, Math.floor((diff / (1000 * 60 * 60)) % 24))
    const minutes = Math.max(0, Math.floor((diff / (1000 * 60)) % 60))
    const seconds = Math.max(0, Math.floor((diff / 1000) % 60))

    document.getElementById('days').textContent = pad(days)
    document.getElementById('hours').textContent = pad(hours)
    document.getElementById('minutes').textContent = pad(minutes)
    document.getElementById('seconds').textContent = pad(seconds)
  }

  update()
  setInterval(update, 1000)
})()

