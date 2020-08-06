import { Menu } from "./menu.js";
import {  Contact } from "./contact.js";
import { HomeDisplay } from "./home.js";

class Navigation {
  static appNavigation() {
    let navigation = ["home", "menu", "contacts"];
    let container = document.getElementById("content");
    let contents = document.createElement("div");
    contents.setAttribute("class", "content");

    let menu_bar = document.createElement("div");
    menu_bar.setAttribute("class", "menu_bar");

    let navBar = document.createElement("nav");

    for (let i = 0; i < navigation.length; i++) {
      let navLi = document.createElement("li");
      navLi.setAttribute("id", navigation[i]);

      navLi.innerHTML = navigation[i];
      navBar.append(navLi);
    }

    menu_bar.append(navBar);
    contents.append(menu_bar);
    container.appendChild(contents);

    document.getElementById("home").addEventListener("click", (ev) => {
      $("#contents").remove();
      HomeDisplay.homeDetails();
    });

    document.getElementById("menu").addEventListener("click", (ev) => {
      $(".home_details").empty();
      ev.preventDefault();

      Menu.displayMenu();
    });

    document.getElementById("contacts").addEventListener("click", (ev) => {
        $(".home_details").empty();
        ev.preventDefault();
  
        Contact.displayContact();
    });
  }
}

export { Navigation };
