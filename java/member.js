// const cursorRounded = document.querySelector('.rounded');
// const cursorPointed = document.querySelector('.pointed');


// const moveCursor = (e) => {
//     const mouseY = e.clientY;
//     const mouseX = e.clientX;

//     cursorRounded.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;

//     cursorPointed.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;

// }

// window.addEventListener('mousemove', moveCursor)

// let dataFoto = document.querySelector(".data-foto")
// let upscales = document.querySelectorAll(".upscale-symbol");
// for (let upscale of upscales) {
//     upscale.addEventListener('mouseover', function() {
//         upscale.style.width = "50px"
//         upscale.style.height = "50px"
//         upscale.style.marginLeft = "43%"
//         upscale.style.marginTop = "28%"
//     })
//     upscale.addEventListener('mouseout', function() {
//         upscale.style.width = "34px"
//         upscale.style.height = "34px"
//         upscale.style.marginLeft = "45%"
//         upscale.style.marginTop = "30%"
//     })
//     upscale.addEventListener('click', function() {
//         openImg.style.opacity = "1";
//         openImg.style.zIndex = "2";
//         let donbasImgs = document.querySelectorAll(".donbas-img")
//         for (let donbasImg of donbasImgs) {
//             alert(donbasImg.dataset.date)
//             dataFoto.innerText = donbasImg.dataset.date
//         }
//     })

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

// let buttonEng = document.querySelector(".buttonEng")
// let buttonUkr = document.querySelector(".buttonUkr")
let setBack = document.querySelector(".set-background");
let setMain = document.querySelector(".main")
let mainCont = document.querySelector(".mainn")
let namedParts = document.querySelector(".name-part-main")
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
    // buttonUkr.addEventListener("click", function() {
    //     buttonUkr.style.color = "#083530"
    //     buttonUkr.style.background = "radial-gradient(circle, rgba(44, 107, 98, 1) 0%, rgba(44, 107, 98, 0) 100%)"
    //     buttonEng.style.color = "#2c6b62"
    //     buttonEng.style.background = "none"
    // })
    // buttonEng.addEventListener("click", function() {
    //     buttonEng.style.color = "#083530"
    //     buttonEng.style.background = "radial-gradient(circle, rgba(44, 107, 98, 1) 0%, rgba(44, 107, 98, 0) 100%)"
    //     buttonUkr.style.color = "#2c6b62"
    //     buttonUkr.style.background = "none"
    // })

let changeMain = 0;
let clickMember = 0;
let members = document.querySelectorAll(".member")
let instMemmbers = document.querySelectorAll(".inst_member")
let closeInfos = document.querySelectorAll(".close-info")


function setTheme() {
    if (changeMain == 0) {
        changeMain = changeMain + 1;
        setMain.style.background = "url(img/backk2.png)"
        setMain.style.backgroundSize = backSize + "%"
        mainCont.style.color = "rgb(225, 174, 201)"
        mainCont.style.background = "linear-gradient(90deg, rgba(25, 60, 55, 0) 5%, rgba(226, 64, 163, 0.6) 15%, rgba(226, 64, 163, 0.6) 85%, rgba(44, 107, 98, 0) 95%)"
        navOriginal.style.background = "linear-gradient(180deg, rgba(44, 107, 98, 0) 25%, rgba(226, 64, 163, 0.2) 35%, rgba(226, 64, 163, 0.2) 65%, rgba(44, 107, 98, 0) 75%)"
        navFooter.style.background = "linear-gradient(180deg, rgba(44, 107, 98, 0) 25%, rgba(226, 64, 163, 0.2) 35%, rgba(226, 64, 163, 0.2) 65%, rgba(44, 107, 98, 0) 75%)"
        choosenPage.style.background = "linear-gradient(0deg, rgb(133, 38, 96) 30%, rgba(226, 64, 163, 1) 70%)";
        choosenPage.style.color = "rgb(225, 174, 201)"
        setBackButton.style.color = "rgb(225, 174, 201)"
        firstS.style.animation = "2s barbieLogoAnim1 ease infinite"
        secondS.style.animation = "2s barbieLogoAnim2 ease infinite"
        clickMember = clickMember + 1;
        for (let citata of citatas) {
            citata.style.color = "rgb(225, 174, 201)"
        }
        // buttonEng.style.background = "radial-gradient(circle, rgba(226, 64, 163, 1) 0%, rgba(44, 107, 98, 0) 100%)"
        // buttonEng.style.color = "rgb(225, 174, 201)"
        // buttonUkr.style.color = "rgba(226, 64, 163, 1)"
        // slesh.style.color = "rgba(226, 64, 163, 1)"
        developerA.style.background = "radial-gradient(circle, rgba(226, 64, 163, 1) 0%, rgba(44, 107, 98, 0) 100%)"
        telegramA.style.background = "radial-gradient(circle, rgba(226, 64, 163, 1) 0%, rgba(44, 107, 98, 0) 100%)"
        developerA.style.color = "rgb(225, 174, 201)"
        telegramA.style.color = "rgb(225, 174, 201)"
        developerP.style.color = "rgba(226, 64, 163, 1)"
        telegramP.style.color = "rgba(226, 64, 163, 1)"
        namedParts.style.background = "url(img/animated-text-fill-barbie.png) repeat-y"
        namedParts.style.WebkitBackgroundClip = "text";
        for (let instMember of instMemmbers) {
            instMember.style.background = "radial-gradient(circle, rgba(226, 64, 163, 1) 0%, rgba(44, 107, 98, 0) 100%)"
            instMember.style.color = "rgb(225, 174, 201)"
            instMember.style.padding = "5px"
        }
        for (let closeInfo of closeInfos) {
            closeInfo.querySelector(".firstClose").style.background = "rgb(133, 38, 96)"
            closeInfo.querySelector(".secondClose").style.background = "rgb(133, 38, 96)"
            closeInfo.querySelector(".firstClose").style.border = "2px solid rgb(225, 174, 201)"
            closeInfo.querySelector(".secondClose").style.border = "2px solid rgb(225, 174, 201)"
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
        for (let member of members) {
            member.querySelector(".text_member").style.background = "radial-gradient(circle, rgb(226, 64, 163) 0%, rgba(44, 107, 98, 0) 100%)"
        }
        setBackMember()
    } else if (changeMain == 1) {
        changeMain = 0;
        namedParts.style.background = "url(img/animated-text-fill.png) repeat-y"
        namedParts.style.WebkitBackgroundClip = "text";
        setMain.style.background = "url(img/backk.png)"
        setMain.style.backgroundSize = backSize + "%"
        mainCont.style.color = "#2c6b62"
        mainCont.style.background = "linear-gradient(90deg, rgba(25, 60, 55, 0) 5%, #083630b3 15%, #083630b3 85%, rgba(44, 107, 98, 0) 95%)"
        navOriginal.style.background = "linear-gradient(180deg, rgba(44, 107, 98, 0) 25%, rgba(44, 107, 98, 0.2) 35%, rgba(44, 107, 98, 0.2) 65%, rgba(44, 107, 98, 0) 75%)"
        navFooter.style.background = "linear-gradient(180deg, rgba(44, 107, 98, 0) 25%, rgba(44, 107, 98, 0.2) 35%, rgba(44, 107, 98, 0.2) 65%, rgba(44, 107, 98, 0) 75%)"
            // for (let namedPart of namedParts) {
            // }
        choosenPage.style.background = "linear-gradient(0deg, rgba(143, 85, 11, 1) 30%, rgba(231, 132, 2, 1) 70%)";
        choosenPage.style.color = "#083530"
        setBackButton.style.color = "#2c6b62"
        firstS.style.animation = "2s logoAnim1 ease infinite"
        secondS.style.animation = "2s logoAnim2 ease infinite"
        clickMember = 0;
        // citata.style.color = "#e78402"
        // buttonEng.style.background = "radial-gradient(circle, rgba(44, 107, 98, 1) 0%, rgba(44, 107, 98, 0) 100%)"
        // slesh.style.color = "#2c6b62"
        developerA.style.background = "radial-gradient(circle, #2c6b62 0%, rgba(44, 107, 98, 0) 100%)"
        telegramA.style.background = "radial-gradient(circle, #2c6b62 0%, rgba(44, 107, 98, 0) 100%)"
        developerA.style.color = "#083530"
        telegramA.style.color = "#083530"
        developerP.style.color = "#2c6b62"
        telegramP.style.color = "#2c6b62"
        for (let citata of citatas) {
            citata.style.color = "#e78402"
        }
        for (let instMember of instMemmbers) {
            instMember.style.background = "radial-gradient(circle, rgba(44, 107, 98, 1) 0%, rgba(44, 107, 98, 0) 100%)"
            instMember.style.color = "#083530"
            instMember.style.padding = "5px"
        }
        for (let closeInfo of closeInfos) {
            closeInfo.querySelector(".firstClose").style.background = "#2c6b62"
            closeInfo.querySelector(".secondClose").style.background = "#2c6b62"
            closeInfo.querySelector(".firstClose").style.border = "2px solid #e78402"
            closeInfo.querySelector(".secondClose").style.border = "2px solid #e78402"
        }
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
        for (let member of members) {
            member.querySelector(".text_member").style.background = "radial-gradient(circle, rgba(44,107,98,1) 0%, rgba(175,175,175,0) 100%)"
        }
        setBackMember()
    }
}
setBack.addEventListener("click", function() {
    setTheme()

})





function setBackMember() {
    if (clickMember == 0) {


    } else if (clickMember == 1) {
        for (let member of members) {
            memImg.addEventListener('mouseover', function() {})
            memImg.addEventListener('mouseout', function() {
                member.querySelector(".text_member").style.zIndex = "1"
            })
            memImg.addEventListener('click', function() {
                alert("fff")
                member.querySelector(".imgMember").style.opacity = "0"
                member.querySelector(".imgMember").style.borderRadius = "25px"
                member.style.borderRadius = "25px"
                member.style.border = "0px"
                member.querySelector(".text_member").style.borderRadius = "25px"
                member.querySelector(".text_member").style.zIndex = "5"
                member.querySelector(".text_member").style.opacity = "1"
                member.querySelector(".text_member").style.position = "absolute"
                member.querySelector(".text_member").style.width = "100%"
                member.querySelector(".text_member").style.height = "100%"

            })

        }
    }
}
// buttonUkr.addEventListener("click", function() {
//     alert("Yes")
// })
// buttonEng.addEventListener("click", function() {
//     alert("No")
// })
for (let closeInfo of closeInfos) {
    closeInfo.addEventListener('click', function() {
        for (let member of members) {
            member.querySelector(".imgMember").style.zIndex = "1"
            member.querySelector(".imgMember").style.opacity = "1"
            member.querySelector(".text_member").style.zIndex = "-1"
            member.querySelector(".text_member").style.opacity = "0"
        }
    })
}
setBackMember()
let backSize;

let nav = document.querySelector(".nav")
let burgerMenu = document.querySelector(".burger")


function myFunction(x) {
    if (x.matches) { // If media query matches
        let backSea = document.querySelector(".boxes-back")
        let pixels = 78;
        for (let i = 1; i <= pixels; i++) {
            let pix = document.createElement("div")
            pix.classList.add("circle")
            backSea.append(pix)
        }
        backSize = 12;
        // buttonEng.style.fontSize = "18px"
        // buttonUkr.style.fontSize = "18px"
        nav.style.opacity = "0"
        nav.style.zIndex = "-4"
        burgerMenu.addEventListener('click', function() {
            nav.style.opacity = "1"
            nav.style.zIndex = "3"
            burgerMenu.style.opacity = "0"
            console.log("aaa")
        })
        choosenPage.addEventListener('click', function() {
            nav.style.opacity = "0"
            nav.style.zIndex = "-4"
            burgerMenu.style.opacity = "1"
            console.log("fff")
        })
    } else {
        let backSea = document.querySelector(".boxes-back")
        let pixels = 210;
        for (let i = 1; i <= pixels; i++) {
            let pix = document.createElement("div")
            pix.classList.add("circle")
            backSea.append(pix)
        }
        backSize = 3.3;
        // buttonEng.style.fontSize = "25px"
        // buttonUkr.style.fontSize = "25px"
        nav.style.opacity = "1"
        nav.style.zIndex = "3"
    }
}
let openImg = document.querySelector(".open-img")
for (let member of members) {
    member.addEventListener('click', function() {
        let blockImg = member.querySelector(".imgMember")
        let citatas1 = member.querySelector(".citata1")
        let citatas2 = member.querySelector(".citata2")
        openImg.style.opacity = "1"
        openImg.style.zIndex = "5"
        document.querySelector(".imgIn-open-img").src = blockImg.src
        document.querySelector(".infoUser").innerHTML = citatas2.innerHTML;
        document.querySelector(".nameUser").innerHTML = citatas1.innerHTML;
        document.querySelector(".imgIn-open-img").classList.add("imgIn-open-imgAnim")
        document.querySelector(".userBlock").classList.add("userBlockAnim");
        document.querySelector(".close-img").classList.add("close-imgAnim");
        document.querySelector(".infoUser").classList.add("infoUserAnim");
        document.querySelector(".nameUser").classList.add("nameUserAnim");
    })
}
let closeImg = document.querySelector(".close-img");
closeImg.addEventListener('click', function() {
    openImg.style.opacity = "0"
    openImg.style.zIndex = "-2"
    document.querySelector(".imgIn-open-img").classList.remove("imgIn-open-imgAnim");
    document.querySelector(".userBlock").classList.remove("userBlockAnim");
    document.querySelector(".close-img").classList.remove("close-imgAnim");
    document.querySelector(".infoUser").classList.remove("infoUserAnim");
    document.querySelector(".nameUser").classList.remove("nameUserAnim");
})

var x = window.matchMedia("(max-width: 700px)")
myFunction(x)
x.addEventListener(myFunction)