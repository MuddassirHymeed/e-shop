// Scroll UP//

function scrollTopBack() {

    let scrolltopButton = document.querySelector("#scrollUp");

    window.onscroll = function () {
        var scroll = document.documentElement.scrollTop;
        if (scroll >= 250) {
            scrolltopButton.classList.add("scrollActive");
        } else {
            scrolltopButton.classList.remove("scrollActive")
        }

    }
}
scrollTopBack();


// Nav hide //

let navBar = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector(".navbar-collapse.collapse");
navBar.forEach(function(a){
    a.addEventListener("click" ,function(){
        navCollapse.classList.remove("show");
    })
})



// Counter Machine
let dayitem = document.querySelector("#days");
let hoursitem = document.querySelector("#hours");
let minitem = document.querySelector("#min");
let secitem = document.querySelector("#sec");

let countDown = () => {
    let futureDate = new Date("3 Augest 2024");
    let currentDate = new Date();
    let myDate = futureDate - currentDate;


    let days = Math.floor(myDate / 1000 / 60 / 60 / 24);
    let hours = Math.floor(myDate / 1000 / 60 / 60) % 24;
    let min = Math.floor(myDate / 1000 / 60) % 60;
    let sec = Math.floor(myDate / 1000) % 60;


    dayitem.innerHTML = days;
    hoursitem.innerHTML = hours;
    minitem.innerHTML = min;
    secitem.innerHTML = sec;
}

countDown();
setInterval(countDown, 1000);




