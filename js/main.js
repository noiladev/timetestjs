var  elKm = document.querySelector('.masofa')
var elP = document.querySelector('.when__p')
var elV = document.querySelector('.when__v')
var elM = document.querySelector('.when__m')
var elS = document.querySelector('.when__s')
var elPiyoda = 4
var elVelosiped = 20
var elMawina = 100
var elSamlyot = 800


function fn() {
    elP.textContent = elKm.value / elPiyoda +'soat'
    elV.textContent = elKm.value / elVelosiped +'soat'
    elM.textContent = elKm.value / elMawina + 'soat'
    elS.textContent = elKm.value / elSamlyot + 'soat'

}