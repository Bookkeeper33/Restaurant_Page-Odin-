import createImg from "./helper";

import Burger from "../images/menu/burger.png";
import Lasagne from "../images/menu/lasagne.png";
import Carbonara from "../images/menu/carbonara.jpg";
import Gnocchi from "../images/menu/gnocchi.png";
import Risotto from "../images/menu/risotto.png";
import Pizza from "../images/menu/pizza.png";

function createMenuComponent() {
    const menu = document.createElement("div");
    const title = document.createElement("h2");
    const wrapper = document.createElement("div");
    const meals = [
        {
            name: "Pizza",
            ing: [" onion", " mozzarella", " chicken"],
            price: "150 UAH",
            img: Pizza,
        },
        {
            name: "Carbonara",
            ing: [
                " pancetta",
                " pecorino cheese",
                " parmesan",
                " spaghetti",
                " garlic",
            ],
            price: "120 UAH",
            img: Carbonara,
        },
        {
            name: "Risotto",
            ing: [
                " smoked bacon",
                " onion",
                " rice",
                " chicken stock",
                " parmesan",
            ],
            price: "230 UAH",
            img: Risotto,
        },
        {
            name: "Gnocchi",
            ing: [
                " onion",
                " garlic cloves",
                " chorizo",
                " canned tomatoes",
                " fresh gnocchi",
                " mozzarella",
            ],
            price: "275 UAH",
            img: Gnocchi,
        },
        {
            name: "Burger",
            ing: [
                " onion",
                " pickles",
                " burger sauce",
                " beef",
                " tomatoes",
                " fresh salad",
                " cheddar",
            ],
            price: "230 UAH",
            img: Burger,
        },
        {
            name: "Lasagne",
            ing: [
                "lean beef mince",
                " prosciutto",
                " tomato sauce",
                " beef stock",
                " mozzarella",
            ],
            price: "180 UAH",
            img: Lasagne,
        },
    ];

    menu.classList.add("menu");
    wrapper.classList.add("menu-container");

    title.textContent = "Our Menu";

    meals.forEach((meal) => {
        wrapper.appendChild(createMenuItem(meal));
    });

    menu.appendChild(title);
    menu.appendChild(wrapper);

    return menu;
}

function createMenuItem(meal) {
    const item = document.createElement("div");

    item.classList.add("menu-item");

    item.appendChild(fillMenuItem(meal.name, meal.ing, meal.price));
    item.appendChild(createImg("item-img", meal.name, meal.img));

    return item;
}

function fillMenuItem(name, ings, cost) {
    const description = document.createElement("div");
    const title = document.createElement("h4");
    const ingredients = document.createElement("p");
    const price = document.createElement("p");

    description.classList.add("item-description");

    title.textContent = name;
    ingredients.textContent = `Ingredients: ${[...ings]}.`;
    price.textContent = cost;

    description.appendChild(title);
    description.appendChild(ingredients);
    description.appendChild(price);

    return description;
}

export default function loadMenuComponent(mainElement) {
    mainElement.textContent = "";
    mainElement.appendChild(createMenuComponent());
}
