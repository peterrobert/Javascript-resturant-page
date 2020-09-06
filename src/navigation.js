/* eslint-disable  no-undef, no-plusplus, camelcase, import/no-cycle, import/prefer-default-export, no-plusplus, max-len */
import { Menu } from './menu';
import { Contact } from './contact';
import { HomeDisplay } from './home';

class Navigation {
  static appNavigation() {
    const navigation = ['home', 'menu', 'contacts'];
    const container = document.getElementById('content');
    const contents = document.createElement('div');
    contents.setAttribute('class', 'content');

    const menu_bar = document.createElement('div');
    menu_bar.setAttribute('class', 'menu_bar');

    const navBar = document.createElement('nav');

    for (let i = 0; i < navigation.length; i++) {
      const navLi = document.createElement('li');
      navLi.setAttribute('id', navigation[i]);

      navLi.innerHTML = navigation[i];
      navBar.append(navLi);
    }

    menu_bar.append(navBar);
    contents.append(menu_bar);
    container.appendChild(contents);

    document.getElementById('home').addEventListener('click', () => {
      $('.home_details').remove();
      HomeDisplay.homeDetails();
    });

    document.getElementById('menu').addEventListener('click', () => {
      $('.home_details').remove();

      Menu.displayMenu();
    });

    document.getElementById('contacts').addEventListener('click', () => {
      $('.home_details').remove();

      Contact.displayContact();
    });
  }
}

export { Navigation };
/* eslint-enable  no-undef, no-plusplus, camelcase, import/no-cycle */
