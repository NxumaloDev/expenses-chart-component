let div1 = document.querySelectorAll(".graph button")[0]
let div2 = document.querySelectorAll(".graph button")[1]
let div3 = document.querySelectorAll(".graph button")[2]
let div4 = document.querySelectorAll(".graph button")[3]
let div5 = document.querySelectorAll(".graph button")[4]
let div6 = document.querySelectorAll(".graph button")[5]
let div7 = document.querySelectorAll(".graph button")[6]

let mon = document.querySelector(".monday button")
let monb = document.querySelectorAll('.graph div > div')[0]

let tue = document.querySelector(".tuesday button")
let tueb = document.querySelectorAll('.graph div > div')[1]

let wed = document.querySelector(".wednesday button")
let wedb = document.querySelectorAll('.graph div > div')[2]

let thur = document.querySelector(".thursday button")
let thurb = document.querySelectorAll('.graph div > div')[3]

let fri = document.querySelector(".friday button")
let frib = document.querySelectorAll('.graph div > div')[4]

let sat = document.querySelector(".saturday button")
let satb = document.querySelectorAll('.graph div > div')[5]

let sun = document.querySelector(".sunday button")
let sunb = document.querySelectorAll('.graph div > div')[6]

let monTxt = document.querySelectorAll('.graph div p')[0]
let tueTxt = document.querySelectorAll('.graph div p')[1]
let wedTxt = document.querySelectorAll('.graph div p')[2]
let thurTxt = document.querySelectorAll('.graph div p')[3]
let friTxt = document.querySelectorAll('.graph div p')[4]
let satTxt = document.querySelectorAll('.graph div p')[5]
let sunTxt = document.querySelectorAll('.graph div p')[6]

fetch('data.json')
.then(function (response) {
    return response.json()
})
.then(function (data) {
    monb.textContent = '$' + data[0].amount
    tueb.textContent = '$' + data[1].amount
    wedb.textContent = '$' + data[2].amount
    thurb.textContent = '$' + data[3].amount
    frib.textContent = '$' + data[4].amount
    satb.textContent = '$' + data[5].amount
    sunb.textContent = '$' + data[6].amount

    div1.style.height = ((data[0].amount) / 30 * 100) + 'px'
    div2.style.height = ((data[1].amount) / 30 * 100) + 'px'
    div3.style.height = ((data[2].amount) / 30 * 100) + 'px'
    div4.style.height = ((data[3].amount) / 30 * 100) + 'px'
    div5.style.height = ((data[4].amount) / 30 * 100) + 'px'
    div6.style.height = ((data[5].amount) / 30 * 100) + 'px'
    div7.style.height = ((data[6].amount) / 30 * 100) + 'px'

    console.log((data[0].amount)+(data[1].amount)+
    (data[2].amount)+(data[3].amount)+(data[4].amount)+(data[5].amount)
    +(data[6].amount));

    mon.addEventListener('click', ()=> {
        monb.style.opacity = "1"


        tueb.style.opacity = "0"
        wedb.style.opacity = "0"
        thurb.style.opacity = "0"
        frib.style.opacity = "0"
        satb.style.opacity = "0"
        sunb.style.opacity = "0"
    })
    
    tue.addEventListener('click', ()=> {
        tueb.style.opacity = "1"

        wedb.style.opacity = "0"
        thurb.style.opacity = "0"
        frib.style.opacity = "0"
        satb.style.opacity = "0"
        sunb.style.opacity = "0"
        monb.style.opacity = "0"
    })

    wed.addEventListener('click', ()=> {
        wedb.style.opacity = "1"

        thurb.style.opacity = "0"
        frib.style.opacity = "0"
        satb.style.opacity = "0"
        sunb.style.opacity = "0"
        monb.style.opacity = "0"
        tueb.style.opacity = "0"
    })

    thur.addEventListener('click', ()=> {
        thurb.style.opacity = "1"

        frib.style.opacity = "0"
        satb.style.opacity = "0"
        sunb.style.opacity = "0"
        monb.style.opacity = "0"
        tueb.style.opacity = "0"
        wedb.style.opacity = "0"
    })
    
    fri.addEventListener('click', ()=> {
        frib.style.opacity = "1"

        satb.style.opacity = "0"
        sunb.style.opacity = "0"
        monb.style.opacity = "0"
        tueb.style.opacity = "0"
        wedb.style.opacity = "0"
        thurb.style.opacity = "0"
    })

    sat.addEventListener('click', ()=> {
        satb.style.opacity = "1"

        sunb.style.opacity = "0"
        monb.style.opacity = "0"
        tueb.style.opacity = "0"
        wedb.style.opacity = "0"
        thurb.style.opacity = "0"
        frib.style.opacity = "0"
    })

    sun.addEventListener('click', ()=> {
        sunb.style.opacity = "1"

        monb.style.opacity = "0"
        tueb.style.opacity = "0"
        wedb.style.opacity = "0"
        thurb.style.opacity = "0"
        frib.style.opacity = "0"
        satb.style.opacity = "0"
    })

    monTxt.textContent = data[0].day
    tueTxt.textContent = data[1].day
    wedTxt.textContent = data[2].day
    thurTxt.textContent = data[3].day
    friTxt.textContent = data[4].day
    satTxt.textContent = data[5].day
    sunTxt.textContent = data[6].day
})