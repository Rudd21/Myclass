let blockImgs = document.querySelectorAll(".text-about")
let openImg = document.querySelector(".open-img")
for (let blockImg of blockImgs) {
    let photo = blockImg.querySelector(".photo")
    photo.addEventListener('click', function() {
        openImg.style.opacity = "1"
        openImg.style.zIndex = "6"
        document.querySelector(".imgIn-open-img").src = photo.src
        alert(imgInOpenImg)
    })
}
let closeImg = document.querySelector(".close-img");
closeImg.addEventListener('click', function() {
    openImg.style.opacity = "0"
    openImg.style.zIndex = "-1"
})
let buttonEng = document.querySelector(".buttonEng")
let buttonUkr = document.querySelector(".buttonUkr")
let setBack = document.querySelector(".set-background");
let setMain = document.querySelector(".main")
let changeMain = 0;
let mainCont = document.querySelector(".mainn")
let namedParts = document.querySelectorAll(".name-part-main")
let navOriginal = document.querySelector(".navOriginal")
let navFooter = document.querySelector(".navFooter");
let choosenPage = document.querySelector(".choosen-page")
let setBackButton = document.querySelector(".set-background");
let liNavs = document.querySelectorAll(".li-nav")
let backNavs = document.querySelectorAll(".background-li")
let firstS = document.querySelector(".firstS")
let secondS = document.querySelector(".secondS")
let citatas = document.querySelectorAll(".citata");
let slesh = document.querySelector(".slesh")
let developerP = document.querySelector(".developerP")
let telegramP = document.querySelector(".telegramP")
let developerA = document.querySelector(".developerA")
let telegramA = document.querySelector(".telegramA")

let textIndex1 = document.querySelector(".textIndex1")
let textIndex2 = document.querySelector(".textIndex2")
buttonUkr.addEventListener("click", function() {
    buttonUkr.style.color = "#083530"
    buttonUkr.style.background = "radial-gradient(circle, rgba(44, 107, 98, 1) 0%, rgba(44, 107, 98, 0) 100%)"
    buttonEng.style.color = "#2c6b62"
    buttonEng.style.background = "none"
    textIndex1.innerHTML = "Привіт всім гостям сайту, оновлення про новий склад учнів в класі буде ближче до зими, більше нічого змінювати не буду, на все добре! :)"
    textIndex1.style.fontFamily = "'Roboto Mono', monospace"
    textIndex1.style.fontSize = "15px"
    textIndex2.innerHTML = "Всі картинки ви можете завантажити в Телеграмі"
    textIndex2.style.fontFamily = "'Roboto Mono', monospace"
    textIndex2.style.fontSize = "15px"
})
buttonEng.addEventListener("click", function() {
    buttonEng.style.color = "#083530"
    buttonEng.style.background = "radial-gradient(circle, rgba(44, 107, 98, 1) 0%, rgba(44, 107, 98, 0) 100%)"
    buttonUkr.style.color = "#2c6b62"
    buttonUkr.style.background = "none"
    textIndex1.innerHTML = "Hello to all guests of the site, the update about the new composition of students in the classroom will be closer to winter, I will not change anything else, everything is fine! :)"
    textIndex1.style.fontFamily = "'Agdasima', sans-serif"
    textIndex1.style.fontSize = "20px"
    textIndex2.innerHTML = "All pictures you can download in Telegram"
    textIndex2.style.fontFamily = "'Roboto Mono', monospace"
    textIndex2.style.fontSize = "15px"
})
setBack.addEventListener("click", function() {
    console.log(changeMain)
    setTheme()
})

function setTheme() {
    if (changeMain == 0) {
        setMain.style.background = "url(img/backk2.png)"
        setMain.style.backgroundSize = backSize + "%"
        mainCont.style.color = "rgb(225, 174, 201)"
        changeMain = changeMain + 1;
        mainCont.style.background = "linear-gradient(90deg, rgba(25, 60, 55, 0) 5%, rgba(226, 64, 163, 0.6) 15%, rgba(226, 64, 163, 0.6) 85%, rgba(44, 107, 98, 0) 95%)"
        navOriginal.style.background = "linear-gradient(180deg, rgba(44, 107, 98, 0) 25%, rgba(226, 64, 163, 0.2) 35%, rgba(226, 64, 163, 0.2) 65%, rgba(44, 107, 98, 0) 75%)"
        navFooter.style.background = "linear-gradient(180deg, rgba(44, 107, 98, 0) 25%, rgba(226, 64, 163, 0.2) 35%, rgba(226, 64, 163, 0.2) 65%, rgba(44, 107, 98, 0) 75%)"
        choosenPage.style.background = "linear-gradient(0deg, rgb(133, 38, 96) 30%, rgba(226, 64, 163, 1) 70%)";
        choosenPage.style.color = "rgb(225, 174, 201)"
        setBackButton.style.color = "rgb(225, 174, 201)"
        firstS.style.animation = "2s barbieLogoAnim1 ease infinite"
        secondS.style.animation = "2s barbieLogoAnim2 ease infinite"
        for (let citata of citatas) {
            citata.style.color = "rgb(133, 38, 96)"
        }
        buttonEng.style.background = "radial-gradient(circle, rgba(226, 64, 163, 1) 0%, rgba(44, 107, 98, 0) 100%)"
        buttonEng.style.color = "rgb(225, 174, 201)"
        buttonUkr.style.color = "rgba(226, 64, 163, 1)"
        slesh.style.color = "rgba(226, 64, 163, 1)"
        developerA.style.background = "radial-gradient(circle, rgba(226, 64, 163, 1) 0%, rgba(44, 107, 98, 0) 100%)"
        telegramA.style.background = "radial-gradient(circle, rgba(226, 64, 163, 1) 0%, rgba(44, 107, 98, 0) 100%)"
        developerA.style.color = "rgb(225, 174, 201)"
        telegramA.style.color = "rgb(225, 174, 201)"
        developerP.style.color = "rgba(226, 64, 163, 1)"
        telegramP.style.color = "rgba(226, 64, 163, 1)"
        for (let namedPart of namedParts) {
            namedPart.style.background = "url(img/animated-text-fill-barbie.png) repeat-y"
            namedPart.style.WebkitBackgroundClip = "text";
        }
        for (let liNav of liNavs) {
            liNav.style.background = "rgba(226, 64, 163, 0.2)"
            liNav.addEventListener("mouseover", function() {
                liNav.style.color = "rgb(225, 174, 201)"
            })
            liNav.addEventListener("mouseout", function() {
                liNav.style.color = "white"
            })
        }
        for (let backNav of backNavs) {
            backNav.style.background = "linear-gradient(0deg, rgb(133, 38, 96) 30%, rgba(226, 64, 163, 1) 70%)"
        }
        buttonUkr.addEventListener("click", function() {
            buttonUkr.style.color = "rgb(225, 174, 201)"
            buttonUkr.style.background = "radial-gradient(circle, rgb(226, 64, 163) 0%, rgba(44, 107, 98, 0) 100%)"
            buttonEng.style.color = "rgb(226, 64, 163)"
            buttonEng.style.background = "none"
        })
        buttonEng.addEventListener("click", function() {
            buttonEng.style.color = "rgb(225, 174, 201)"
            buttonEng.style.background = "radial-gradient(circle, rgb(226, 64, 163) 0%, rgba(44, 107, 98, 0) 100%)"
            buttonUkr.style.color = "rgb(226, 64, 163)"
            buttonUkr.style.background = "none"
        })
    } else if (changeMain == 1) {
        setMain.style.background = "url(img/backk.png)"
        setMain.style.backgroundSize = backSize + "%"
        changeMain = 0;
        mainCont.style.color = "#2c6b62"
        mainCont.style.background = "linear-gradient(90deg, rgba(25, 60, 55, 0) 5%, #083630b3 15%, #083630b3 85%, rgba(44, 107, 98, 0) 95%)"
        navOriginal.style.background = "linear-gradient(180deg, rgba(44, 107, 98, 0) 25%, rgba(44, 107, 98, 0.2) 35%, rgba(44, 107, 98, 0.2) 65%, rgba(44, 107, 98, 0) 75%)"
        navFooter.style.background = "linear-gradient(180deg, rgba(44, 107, 98, 0) 25%, rgba(44, 107, 98, 0.2) 35%, rgba(44, 107, 98, 0.2) 65%, rgba(44, 107, 98, 0) 75%)"
        for (let namedPart of namedParts) {
            namedPart.style.background = "url(img/animated-text-fill.png) repeat-y"
            namedPart.style.WebkitBackgroundClip = "text";
        }
        choosenPage.style.background = "linear-gradient(0deg, rgba(143, 85, 11, 1) 30%, rgba(231, 132, 2, 1) 70%)";
        choosenPage.style.color = "#083530"
        setBackButton.style.color = "#2c6b62"
        firstS.style.animation = "2s logoAnim1 ease infinite"
        secondS.style.animation = "2s logoAnim2 ease infinite"
        for (let citata of citatas) {
            citata.style.color = "#e78402"
        }
        buttonEng.style.background = "radial-gradient(circle, rgba(44, 107, 98, 1) 0%, rgba(44, 107, 98, 0) 100%)"
        slesh.style.color = "#2c6b62"
        developerA.style.background = "radial-gradient(circle, #2c6b62 0%, rgba(44, 107, 98, 0) 100%)"
        telegramA.style.background = "radial-gradient(circle, #2c6b62 0%, rgba(44, 107, 98, 0) 100%)"
        developerA.style.color = "#083530"
        telegramA.style.color = "#083530"
        developerP.style.color = "#2c6b62"
        telegramP.style.color = "#2c6b62"
        for (let liNav of liNavs) {
            liNav.style.background = "rgba(44, 107, 98, 0.2)"
            liNav.addEventListener("mouseover", function() {
                liNav.style.color = "rgb(8, 53, 48)"
            })
            liNav.addEventListener("mouseout", function() {
                liNav.style.color = "white"
            })
        }
        for (let backNav of backNavs) {
            backNav.style.background = "linear-gradient(0deg, rgba(143, 85, 11, 1) 30%, rgba(231, 132, 2, 1) 70%)"
        }
        buttonUkr.addEventListener("click", function() {
            buttonUkr.style.color = "#083530"
            buttonUkr.style.background = "radial-gradient(circle, rgba(44, 107, 98, 1) 0%, rgba(44, 107, 98, 0) 100%)"
            buttonEng.style.color = "#2c6b62"
            buttonEng.style.background = "none"
        })
        buttonEng.addEventListener("click", function() {
            buttonEng.style.color = "#083530"
            buttonEng.style.background = "radial-gradient(circle, rgba(44, 107, 98, 1) 0%, rgba(44, 107, 98, 0) 100%)"
            buttonUkr.style.color = "#2c6b62"
            buttonUkr.style.background = "none"
        })
    }
}
let backSize;


let nav = document.querySelector(".nav")
let burgerMenu = document.querySelector(".burger")

function myFunction(x) {
    if (x.matches) { // If media query matches
        let backSea = document.querySelector(".boxes-back")
        let pixels = 96;
        for (let i = 1; i <= pixels; i++) {
            let pix = document.createElement("div")
            pix.classList.add("circle")
            backSea.append(pix)
        }
        openImg.style.display = "none"
        backSize = 12;
        buttonEng.style.fontSize = "18px"
        buttonUkr.style.fontSize = "18px"
        nav.style.opacity = "0"
        nav.style.zIndex = "-4"
        burgerMenu.addEventListener('click', function() {
            nav.style.opacity = "1"
            nav.style.zIndex = "3"
            burgerMenu.style.opacity = "0"
        })
        choosenPage.addEventListener('click', function() {
            nav.style.opacity = "0"
            nav.style.zIndex = "-4"
            burgerMenu.style.opacity = "1"
        })
    } else {
        let backSea = document.querySelector(".boxes-back")
        let pixels = 230;
        for (let i = 1; i <= pixels; i++) {
            let pix = document.createElement("div")
            pix.classList.add("circle")
            backSea.append(pix)
        }
        backSize = 3.3;
        buttonEng.style.fontSize = "25px"
        buttonUkr.style.fontSize = "25px"
    }
}
var x = window.matchMedia("(max-width: 700px)")
myFunction(x)
x.addEventListener(myFunction)