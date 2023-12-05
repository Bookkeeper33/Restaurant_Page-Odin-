import createImg from "./helper";

import Chief from "../images/chief.png";

function createAboutComponent() {
    const about = document.createElement("div");

    about.classList.add("about-us");

    about.appendChild(createImg("image-about", "Chief", Chief));
    about.appendChild(fillAboutComponent());

    return about;
}

function fillAboutComponent() {
    const description = document.createElement("div");
    const title = document.createElement("h2");
    const paragraph = document.createElement("p");

    description.classList.add("description-about");

    title.textContent = "Simple information About Us";
    paragraph.textContent = `Lorem ipsum dolor sit amet consectetur adipisicing
    elit. Repellat eveniet magni dolor odio est
    laudantium earum enim, reiciendis quidem recusandae
    eligendi? Maiores ex consectetur iste dolorum sint
    ipsam illo temporibus! Lorem ipsum dolor sit amet
    consectetur adipisicing elit. Possimus, odio officia
    ullam laborum nemo obcaecati blanditiis molestias
    fugiat laudantium nihil quisquam quasi incidunt
    necessitatibus praesentium asperiores dolorum
    sapiente. Hic, quisquam?`;

    description.appendChild(title);
    description.appendChild(paragraph);

    return description;
}


export default function loadAboutComponent(mainElement) {
    mainElement.textContent = "";
    mainElement.appendChild(createAboutComponent());
}
