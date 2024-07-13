const body = document.querySelector("body");
const burger = document.querySelector(".burgermenu");
const dropdown = document.querySelector(".dropdown");
const ellipsis = document.querySelector(".fa-ellipsis-vertical");

//hamburger component
var hamburger = document.querySelector(".hamburger");
hamburger.addEventListener("click", function() {
    hamburger.classList.toggle("is-active");
});

function openBurger(){
    burger.classList.toggle('open');
}
function openDropdown(){
    dropdown.classList.toggle('d-block');
    ellipsis.classList.toggle('rotate');
}

//AJAX system
// const content = document.querySelector("#content");
// const ajax = new XMLHttpRequest()
// const page = location.href.split("#")[1] ?? 'main'

// loadPage(page)
// function loadPage(page) {
//     let file = `pages/${page}.htm`
//     ajax.open("GET", file)
//     ajax.send()
//     ajax.onload = function() {
//         content.innerHTML = this.responseText
//     }
// }

//counterr
const counters = document.querySelectorAll('.value');
const speed = 700;

counters.forEach( counter => {
    const animate = () => {
        const value = +counter.getAttribute('data-target');
        const data = +counter.innerText;
        const time = value / speed;
        if(data < value) {
            counter.innerText = Math.ceil(data + time);
            setTimeout(animate, 1);
        }else{
            counter.innerText = value;
        }
    }
    animate();
});

//full screen image
const images = document.querySelectorAll(".fullscreen-image");
const magnifyIcons = document.querySelectorAll(".fa-magnifying-glass-plus");
let currentImageIndex = 0;

function getFullScreen() {
    const image = images[currentImageIndex];
    if (document.fullscreenElement) {
        document.exitFullscreen();
    } else {
        image.requestFullscreen();
    }
}
magnifyIcons.forEach((icon, index) => {
    icon.addEventListener("click", () => {
        currentImageIndex = index;
        getFullScreen();
    });
});
images.forEach((image, index) => {
    image.addEventListener("click", () => {
        currentImageIndex = index;
    });
});


//scroll to top
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}
window.addEventListener('scroll', function() {
    const button = document.querySelector('.scroll-to-top');
    const scrollPos = window.scrollY;
    const vwHeight = window.innerHeight;
    button.style.display = (scrollPos > (vwHeight * 0.5)) ? 'block' : 'none';
});