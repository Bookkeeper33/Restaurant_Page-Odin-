import createImg from "./helper";

import Icon from "../images/icon.png";
import Github from "../images/github-mark.svg";

import loadHomeComponent from "./home";
import loadMenuComponent from "./menu";
import loadAboutComponent from "./about";
import loadContactComponent from "./contact";

function createHeader() {
    const header = document.createElement("header");

    header.appendChild(createImg("icon-container", "Logo", Icon));
    header.appendChild(createNav());

    return header;
}

function createNav() {
    const nav = document.createElement("nav");
    const ol = document.createElement("ol");
    const navItems = ["Home", "Menu", "About us", "Contact"];

    nav.id = "navbar";
    ol.classList.add("nav-links");

    navItems.forEach((item) => {
        const li = document.createElement("li");

        li.id = item.toLowerCase();
        li.classList.add("nav-item");
        li.textContent = item;

        item === "Home" ? li.classList.add("active") : "";

        ol.appendChild(li);
    });

    nav.appendChild(ol);

    return nav;
}

function createMain() {
    const mainEl = document.createElement("main");
    mainEl.id = "main";

    return mainEl;
}

function createFooter() {
    const footer = document.createElement("footer");
    const paragraph = document.createElement("p");
    const a = document.createElement("a");
    const span = document.createElement("span");
    const img = document.createElement("img");

    paragraph.textContent = "Created by ";
    a.textContent = "Bookkeeper33";
    a.href = "https://github.com/Bookkeeper33";

    img.src = Github;
    img.alt = "github";

    span.classList.add("github");

    span.appendChild(img);
    paragraph.appendChild(a);
    paragraph.appendChild(span);
    footer.appendChild(paragraph);

    return footer;
}

function loadComponent(main) {
    const nav = document.getElementById("navbar");

    nav.addEventListener("click", (event) => {
        if (event.target.tagName === "LI") {
            const id = event.target.id.toLowerCase();

            if (id.includes("home")) {
                loadHomeComponent(main);
            }
            if (id.includes("menu")) {
                loadMenuComponent(main);
            }
            if (id.includes("about us")) {
                loadAboutComponent(main);
            }
            if (id.includes("contact")) {
                loadContactComponent(main);
            }

            setActive(event.target);
        }
    });
}

function setActive(target) {
    const navLinks = document.querySelectorAll(".nav-item");

    navLinks.forEach((link) => {
        link.classList.remove("active");
        target.classList.add("active");
    });
}

export default function init() {
    const content = document.getElementById("content");

    content.appendChild(createHeader());
    content.appendChild(createMain());
    content.appendChild(createFooter());

    const main = document.getElementById("main");
    loadHomeComponent(main);
    loadComponent(main);
}
