let homeScoreBtnOne = document.getElementById("home-score-btn-1")
let homeStoreEl =document.getElementById("home-num")
let homeScore = 0

let guestScoreBtnOne=document.getElementById("guest-score-btn-1")
let guestStoreEl=document.getElementById("guest-num")
let guestScore = 0

function increaseHomeScoreOne(){
    homeScore += 1
    homeStoreEl.textContent = homeScore
}

function increaseHomeScoretwo(){
    homeScore += 2
    homeStoreEl.textContent = homeScore
}

function increaseHomeScorethree(){
    homeScore += 3
    homeStoreEl.textContent = homeScore
}

function increaseGuestScoreOne(){
    guestScore += 1
    guestStoreEl.textContent = guestScore
}

function increaseGuestScoretwo(){
    guestScore += 2
    guestStoreEl.textContent = guestScore
}

function increaseGuestScorethree(){
    guestScore += 3
    guestStoreEl.textContent = guestScore
}


