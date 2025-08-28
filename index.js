let homeScore = document.getElementById("home-score")
let guestScore = document.getElementById("guest-score")
let countHome = 0
let countGuest = 0

function addHome1() {
    countHome += 1
    homeScore.textContent = countHome
}

function addHome2() {
    countHome += 2
    homeScore.textContent = countHome
}

function addHome3() {
    countHome += 3
    homeScore.textContent = countHome
}

function addGuest1() {
    countGuest += 1
    guestScore.textContent = countGuest
}

function addGuest2() {
    countGuest += 2
    guestScore.textContent = countGuest
}

function addGuest3() {
    countGuest += 3
    guestScore.textContent = countGuest
}

function reset() {
    homeScore.textContent = 0
    guestScore.textContent = 0
}