export default function createImg(className, title, imgSrc, isContact = false) {
    const div = document.createElement("div");
    const img = document.createElement("img");

    div.classList.add(className);
    img.src = imgSrc;
    img.alt = title.toLowerCase();

    div.appendChild(img);

    if (isContact) {
        const heading = document.createElement("h2");

        heading.textContent = `${title.charAt(0).toUpperCase()}${title
            .slice(1)
            .replaceAll("-", " ")}`;
        div.appendChild(heading);
    }

    return div;
}
