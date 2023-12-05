import createImg from "./helper";

import Pizza from "../images/pizza_logo.png";

function createHomeComponent() {
    const home = document.createElement("div");
    home.classList.add("home");

    home.appendChild(createImg("home-image", "Pizza", Pizza));
    home.appendChild(fillHomeComponent());

    return home;
}

function fillHomeComponent() {
    const div = document.createElement("div");
    const h2 = document.createElement("h2");
    const p = document.createElement("p");
    const btn = document.createElement("button");

    div.classList.add("home-description");

    h2.textContent = "El Pizzo";
    p.textContent =
        "Lorem ipsum dolor sit amet consectetur adipisicin gelit. Laboriosam quae magnam nam minima, mollitia, inventore eligendi maxime sit officia eius ipsam porro voluptatibus, error fugiat! Tempora at officia laborum sapiente.";
    btn.textContent = "Explore more...";
    btn.id = "explore";

    div.appendChild(h2);
    div.appendChild(p);
    div.appendChild(btn);

    return div;
}

export default function loadHomeComponent(mainElement) {
    mainElement.textContent = "";
    mainElement.appendChild(createHomeComponent());
}
