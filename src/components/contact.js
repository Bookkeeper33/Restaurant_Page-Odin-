import createImg from "./helper";

import Map from "../images/map-marker.png";
import Phone from "../images/phone.png";
import Hours from "../images/store-clock.png";

function createContactComponent() {
    const contacts = document.createElement("div");

    contacts.classList.add("contacts");

    contacts.appendChild(
        createSection("address", "Urlivska 1488, Kyiv, Ukraine", Map)
    );
    contacts.appendChild(createSection("phone", "(444)-888-1111", Phone));
    contacts.appendChild(
        createSection("working-hours", "Mon-Sat: 9am - 9pm", Hours)
    );

    return contacts;
}

function createSection(sectionName, text, img) {
    const section = document.createElement("div");
    const paragraph = document.createElement("p");

    section.classList.add(sectionName);

    paragraph.textContent = text;

    section.appendChild(createImg("title", sectionName, img, true));
    section.appendChild(paragraph);

    return section;
}


export default function loadContactComponent(mainElement) {
    mainElement.textContent = "";
    mainElement.appendChild(createContactComponent());
}
