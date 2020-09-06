/* eslint-disable  no-undef, no-plusplus, camelcase, guard-for-in, no-restricted-syntax, import/no-cycle, import/prefer-default-export, no-plusplus, max-len */
import { MenuItems } from './menu_items';

class Menu {
  static displayMenu() {
    const list = MenuItems.showItems();
    const listArr = list.menuList;

    const container = document.getElementById('content');

    const details = document.createElement('div');
    details.setAttribute('class', 'home_details');
    details.setAttribute('id', 'menu_details');

    // creating the html structure.

    const mainDiv = document.createElement('div');
    mainDiv.setAttribute('class', 'container');

    const secondaryDiv = document.createElement('div');
    secondaryDiv.setAttribute('class', 'row');

    function setAttributes(el, attrs) {
      for (const key in attrs) {
        el.setAttribute(key, attrs[key]);
      }
    }

    for (let i = 0; i < listArr.length; i++) {
      const thirdDiv = document.createElement('div');
      setAttributes(thirdDiv, {
        class: 'col-md-3',
      });

      const card = document.createElement('div');
      setAttributes(card, {
        class: 'card',
      });

      const cardImg = document.createElement('img');
      setAttributes(cardImg, {
        src: `${list.menuList[i].image}`,
        alt: `${list.menuList[i].Name}`,
        styles: 'width:100%',
      });

      card.append(cardImg);

      const cardH1 = document.createElement('h1');
      cardH1.innerHTML = `${list.menuList[i].Name}`;
      card.append(cardH1);

      const cardP = document.createElement('p');
      setAttributes(cardP, {
        class: 'price',
      });
      cardP.innerText = `${list.menuList[i].price}`;
      card.append(cardP);

      thirdDiv.append(card);

      secondaryDiv.append(thirdDiv);
    }

    mainDiv.append(secondaryDiv);

    details.append(mainDiv);

    container.append(details);
  }
}

export { Menu };
