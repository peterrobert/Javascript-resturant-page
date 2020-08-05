class Navigation {

    static appNavigation() {
        let navigation = ["home", "menu", "contacts"];
        let container = document.getElementById('content');
        let contents = document.createElement('div');
        contents.setAttribute('class', 'content');

        let menu_bar = document.createElement('div');
        menu_bar.setAttribute("class", "menu_bar");

        let navBar = document.createElement('nav');


        for (let i = 0; i < navigation.length; i++) {
            let navLi = document.createElement('li');
            navLi.innerHTML = navigation[i];
            navBar.append(navLi);
        }

        menu_bar.append(navBar);
        contents.append(menu_bar);
        container.appendChild(contents);

    };

}

export {
    Navigation
};