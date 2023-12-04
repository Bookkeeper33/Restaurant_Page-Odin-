import Pizza from "../images/pizza_logo.png";

export default function createHomeComponent() {
    const home = document.createElement("div");
    home.classList.add("home");

    home.appendChild(createImgWrapper());
    home.appendChild(createDescription());

    return home;
}

function createImgWrapper() {
    const div = document.createElement("div");
    const img = document.createElement("img");

    div.classList.add("home-image");
    img.src = Pizza;
    img.alt = "Pizza";

    div.appendChild(img);

    return div;
}

function createDescription() {
    const div = document.createElement("div");
    const h2 = document.createElement("h2");
    const p = document.createElement("p");
    const btn = document.createElement("button");

    div.classList.add("home-description");

    h2.textContent = "El Pizzo";
    p.textContent =
        "Lorem ipsum dolor sit amet consectetur adipisicin gelit. Laboriosam quae magnam nam minima, mollitia, inventore eligendi maxime sit officia eius ipsam porro voluptatibus, error fugiat! Tempora at officia laborum sapiente.";
    btn.textContent = "Explore more...";

    div.appendChild(h2);
    div.appendChild(p);
    div.appendChild(btn);

    return div;
}
