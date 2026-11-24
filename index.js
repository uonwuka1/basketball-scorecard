const homeScoreEl = document.getElementById("home-score")
const guestScoreEl = document.getElementById("guest-score")

let homeScore = 0
let guestScore = 0

function render() {
    homeScoreEl.textContent = homeScore
    guestScoreEl.textContent = guestScore
    homeScoreEl.parentElement.classList.toggle("leader", homeScore > guestScore)
    guestScoreEl.parentElement.classList.toggle("leader", guestScore > homeScore)
}

for (const points of [1, 2, 3]) {
    document.getElementById(`home-btn-${points}`)
        .addEventListener("click", () => { homeScore += points; render() })
    document.getElementById(`guest-btn-${points}`)
        .addEventListener("click", () => { guestScore += points; render() })
}

document.getElementById("home-reset").addEventListener("click", () => { homeScore = 0; render() })
document.getElementById("guest-reset").addEventListener("click", () => { guestScore = 0; render() })

render()
