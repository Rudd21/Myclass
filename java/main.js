// const cursorRounded = document.querySelector('.rounded');
// const cursorPointed = document.querySelector('.pointed');


// const moveCursor = (e) => {
//     const mouseY = e.clientY;
//     const mouseX = e.clientX;

//     cursorRounded.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;

//     cursorPointed.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;

// }

// window.addEventListener('mousemove', moveCursor)
let blockImgs = document.querySelectorAll(".donbas-block")
let openImg = document.querySelector(".open-img")
for (let blockImg of blockImgs) {
    let photo = blockImg.querySelector(".photo")
    photo.addEventListener('click', function() {
        openImg.style.opacity = "1"
        openImg.style.zIndex = "6"
        document.querySelector(".imgIn-open-img").src = photo.src
    })
}
let closeImg = document.querySelector(".close-img");
closeImg.addEventListener('click', function() {
        openImg.style.opacity = "0"
        openImg.style.zIndex = "-1"
    })
    // window.onscroll = function() {
    //     console.log(window.pageYOffset)
    //     if (window.pageYOffset < 50) {
    //         console.log("◯")
    //     } else {
    //         console.log("＋")
    //     }
    // }

// function myFunction() {
//     if (document.pageYOffset > 1) {
//         alert("a")
//     } else {}
// }
// let randomTop = Math.floor(Math.random() * 90) + 10;
// let randomLeft = Math.floor(Math.random() * 80) + 20;
// // console.log(Math.round(randomTop) + " " + "TOP")
// // console.log(Math.round(randomLeft) + " " + "LEFT")
// let symbolsBack = document.querySelectorAll(".back-symbol-main");
// for (let symbolBack of symbolsBack) {
//     symbolBack.style.marginTop = randomTop + "%";
//     symbolBack.style.marginLeft = randomLeft + "%";

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
let textIndex3 = document.querySelector(".textIndex3")
let textIndex4 = document.querySelector(".textIndex4")
let textIndex5 = document.querySelector(".textIndex5")
let textIndex6 = document.querySelector(".textIndex6")


buttonUkr.addEventListener("click", function() {
    buttonUkr.style.color = "#083530"
    buttonUkr.style.background = "radial-gradient(circle, rgba(44, 107, 98, 1) 0%, rgba(44, 107, 98, 0) 100%)"
    buttonEng.style.color = "#2c6b62"
    buttonEng.style.background = "none"
    textIndex1.innerHTML = "Це сайт про 9-Б клас, який навчається в ліцеї No18 з 2014 року. Навчатиметься до травня 2025 року. Після цього клас розпадеться, залишивши тільки контакти один з одним. Сайт зміниться після прибуття/виїзду учасників. Але, швидше за все, це остаточний дизайн сайту. Сайт був перероблений з липня 2022 року по серпень 2023 року."
    textIndex1.style.fontFamily = "'Roboto Mono', monospace"
    textIndex1.style.fontSize = "15px"
    textIndex2.innerHTML = "1-Ви встигли помітити новий дизайн і розташування блоків з інформацією на сайті."
    textIndex2.style.fontFamily = "'Roboto Mono', monospace"
    textIndex2.style.fontSize = "15px"
    textIndex3.innerHTML = "2-Додана вкладка Галерея"
    textIndex3.style.fontFamily = "'Roboto Mono', monospace"
    textIndex3.style.fontSize = "15px"
    textIndex4.innerHTML = "3-Додання способу огляду фото"
    textIndex4.style.fontFamily = "'Roboto Mono', monospace"
    textIndex4.style.fontSize = "15px"
    textIndex5.innerHTML = "Привіт! Я розробник цього сайту, перша версія сайту створена більше року тому, це вже четверте оновлення сайту. Є також інші мої розробки, які ви можете побачити на моєму"
    textIndex5.style.fontFamily = "'Roboto Mono', monospace"
    textIndex5.style.fontSize = "15px"
    textIndex6.innerHTML = '"Лисина - це галявина, витоптана думками"'
    textIndex6.style.fontFamily = "'Roboto Mono', monospace"
    textIndex6.style.fontSize = "15px"
})
buttonEng.addEventListener("click", function() {
    buttonEng.style.color = "#083530"
    buttonEng.style.background = "radial-gradient(circle, rgba(44, 107, 98, 1) 0%, rgba(44, 107, 98, 0) 100%)"
    buttonUkr.style.color = "#2c6b62"
    buttonUkr.style.background = "none"
    textIndex1.innerHTML = "This is a site about grade 9B, which has been studying at Lyceum No18 since 2014. He will study until May 2025. After that, the class will break up, leaving only contacts with each other. The site will change upon arrival/departure of participants.But most likely this is the final design of the site.The site was redesigned from July 2022 to August 2023. "
    textIndex1.style.fontFamily = "'Agdasima', sans-serif"
    textIndex1.style.fontSize = "20px"
    textIndex2.innerHTML = "1-You managed to notice the new design and arrangement of blocks with information on the site."
    textIndex2.style.fontFamily = "'Agdasima', sans-serif"
    textIndex2.style.fontSize = "20px"
    textIndex3.innerHTML = "2-Added Gallery tab"
    textIndex3.style.fontFamily = "'Agdasima', sans-serif"
    textIndex3.style.fontSize = "20px"
    textIndex4.innerHTML = "3-Adding a way to view photos"
    textIndex4.style.fontFamily = "'Agdasima', sans-serif"
    textIndex4.style.fontSize = "20px"
    textIndex5.innerHTML = "Hello! I am the developer of this site, the first version of the site was created more than a year ago, this is the fourth update of the site. There are also my other developments that you can see on my"
    textIndex5.style.fontFamily = "'Agdasima', sans-serif"
    textIndex5.style.fontSize = "20px"
    textIndex6.innerHTML = '"A bald spot is a glade trampled by thoughts"'
    textIndex6.style.fontFamily = "'Agdasima', sans-serif"
    textIndex6.style.fontSize = "20px"
})
setBack.addEventListener("click", function() {
    console.log(changeMain)
    setTheme()
})
let backSize;

let nav = document.querySelector(".nav")
let burgerMenu = document.querySelector(".burger")

function myFunction(x) {
    if (x.matches) { // If media query matches
        let backSea = document.querySelector(".boxes-back")
        let pixels = 39;
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
        let pixels = 100;
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