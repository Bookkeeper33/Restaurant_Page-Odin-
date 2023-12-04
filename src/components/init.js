import Icon from "../images/icon.png";
import createHomeComponent from "./home";
import createMenuComponent from "./menu";

function createHeader() {
    const headerEl = document.createElement("header");

    headerEl.appendChild(createImgWrapper());
    headerEl.appendChild(createNav());

    return headerEl;
}

function createNav() {
    const navEl = document.createElement("nav");
    const olEl = document.createElement("ol");
    const navItems = ["Home", "Menu", "About us", "Contact"];

    navEl.id = "navbar";
    olEl.classList.add("nav-links");

    navItems.forEach((item) => {
        const liEl = document.createElement("li");

        liEl.classList.add("nav-item");
        liEl.textContent = item;

        olEl.appendChild(liEl);
    });

    navEl.appendChild(olEl);

    return navEl;
}

function createImgWrapper() {
    const divEl = document.createElement("div");
    const imgEl = document.createElement("img");

    divEl.classList.add("icon-container");
    imgEl.src = Icon;
    imgEl.alt = "logo";

    divEl.appendChild(imgEl);

    return divEl;
}

function createMain() {
    const mainEl = document.createElement("main");
    mainEl.id = "main";

    return mainEl;
}

function createFooter() {
    const footerEl = document.createElement("footer");
    const paragraph = document.createElement("p");
    const aEl = document.createElement("a");

    paragraph.textContent = "Created by ";
    aEl.textContent = "Bookkeeper33";
    aEl.href = "https://github.com/Bookkeeper33";

    paragraph.appendChild(aEl);
    footerEl.appendChild(paragraph);

    return footerEl;
}

function loadComponent() {
    const main = document.getElementById("main");

    main.textContent = "";
    main.appendChild(createMenuComponent());
    // main.appendChild(createHomeComponent());
}

export default function loadElements() {
    const content = document.getElementById("content");

    content.appendChild(createHeader());
    content.appendChild(createMain());
    content.appendChild(createFooter());

    loadComponent();
}
