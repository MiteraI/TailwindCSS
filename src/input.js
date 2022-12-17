const tag = document.getElementsByClassName("tag");
const tagArray = Array.from(tag);
const rightButton = document.getElementById("right");
const leftButton = document.getElementById("left");
const toggleNavButton = document.getElementById
("toggle-button");
const navList = document.getElementById("nav-list");
const closeButton = document.getElementById("close-icon");
const openButton = document.getElementById("open-icon");
const body = document.getElementsByTagName("section");
const header = document.getElementsByTagName("header")[0];

// Array.from(body).forEach(section => section.addEventListener("click", () => {
//    if (header.classList.contains("focus")) toggle();
// }))

toggle = toggleNavButton.onclick = () => {
    closeButton.classList.toggle("hidden");
    openButton.classList.toggle("hidden");
    navList.classList.toggle("xm:hidden");
    // Array.from(body).forEach(section => section.classList.toggle("fade"));
    // header.classList.toggle("focus");
}

automatic = rightButton.onclick = () => {
    let leftTag = document.querySelector('[data-index="0"]');
    let firstTag = document.querySelector('[data-index="1"');
    let secondTag = document.querySelector('[data-index="2"');
    let rightTag = document.querySelector('[data-index="3"]');

    rightTag.dataset.status = "toLeft";
    leftTag.dataset.status = "active-1"
    firstTag.dataset.status = "active-2";
    secondTag.dataset.status = "toRight";

    rightTag.dataset.index = "0";
    leftTag.dataset.index = "1";
    firstTag.dataset.index = "2";
    secondTag.dataset.index = "3";
}

leftButton.onclick = () => {
    let leftTag = document.querySelector('[data-index="0"]');
    let firstTag = document.querySelector('[data-index="1"');
    let secondTag = document.querySelector('[data-index="2"');
    let rightTag = document.querySelector('[data-index="3"]');

    rightTag.dataset.status = "active-2";
    leftTag.dataset.status = "toRight"
    firstTag.dataset.status = "toLeft";
    secondTag.dataset.status = "active-1";

    rightTag.dataset.index = "2";
    leftTag.dataset.index = "3";
    firstTag.dataset.index = "0";
    secondTag.dataset.index = "1";
}

setInterval(() => {
    automatic()
}, 8000);

