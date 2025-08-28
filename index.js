let homeScore = document.getElementById("home-score")
let guestScore = document.getElementById("guest-score")
let count = 0

function addHome1() {
    console.log("button pressed")
    count += 1
    homeScore.textContent = count
    count = 0
}

function addHome2() {
    count += 2
    homeScore.textContent = count
    count = 0
}

function addHome3() {
    count += 3
    homeScore.textContent = count
    count = 0
}

function addGuest1() {
    count += 1
    guestScore.textContent = count
    count = 0
}

function addGuest2() {
    count += 2
    guestScore.textContent = count
    count = 0
}

function addGuest3() {
    count += 3
    guestScore.textContent = count
    count = 0
}




























function addHome2() {
    homeScore += 2 
}

function addHome3() {
    homeScore += 3    
}

function addGuest1() {
    guestScore += 1    
}

function addGuest2() {
    guestScore += 2    
}

function addGuest3() {
    guestScore += 3    
}

