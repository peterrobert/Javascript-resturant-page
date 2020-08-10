import {
    MenuItems
} from "./menu_items";

class Menu {

    static displayMenu() {


        let list = MenuItems.showItems();
        let listArr = list.menuList

        let container = document.getElementById('content');

        let details = document.createElement('div');
        details.setAttribute('class', 'home_details');
        details.setAttribute('id', 'menu_details');


        // creating the html structure.

        let mainDiv = document.createElement("div");
        mainDiv.setAttribute("class", "container");

        let secondaryDiv = document.createElement("div");
        secondaryDiv.setAttribute("class", "row");

        function setAttributes(el, attrs) {
            for (var key in attrs) {
                el.setAttribute(key, attrs[key]);
            }
        }

        for (let i = 0; i < listArr.length; i++) {

            let thirdDiv = document.createElement("div");
            setAttributes(thirdDiv, {
                "class": "col-md-3"
            });
            console.log(thirdDiv)

            let card = document.createElement('div');
            setAttributes(card, {
                "class": "card"
            });

            let cardImg = document.createElement('img');
            setAttributes(cardImg, {
                "src": `${list.menuList[i].image}`,
                'alt': `${list.menuList[i].Name}`,
                "styles": "width:100%"
            });

            card.append(cardImg);

            let cardH1 = document.createElement('h1');
            cardH1.innerHTML = `${list.menuList[i].Name}`;
            card.append(cardH1);

            let cardP = document.createElement('p');
            setAttributes(cardP, {
                "class": "price"
            });
            cardP.innerText = `${list.menuList[i].price}`
            card.append(cardP);

            thirdDiv.append(card);

            secondaryDiv.append(thirdDiv);
        }


        mainDiv.append(secondaryDiv);

        details.append(mainDiv);

        container.append(details);


    }

}

export {
    Menu
};