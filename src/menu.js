import {
    MenuItems
} from "./menu_items";

class Menu {

    static displayMenu() {

        let list = MenuItems.showItems();
        let listArr = list.menuList

        let container = document.getElementById('content');

        let details = document.createElement('div');
        details.setAttribute('class','home_details');
        details.setAttribute('id','menu_details');

    
        // creating the html structure.

        let mainDiv = document.createElement("div");
        mainDiv.setAttribute("class", "container");

        let secondaryDiv = document.createElement("div");
        secondaryDiv.setAttribute("class", "row");
        
        

        for (let i = 0; i < listArr.length; i++) {
         let  thirdDiv = document.createElement("div");
             thirdDiv.setAttribute("class", "col-md-3");

            thirdDiv.innerHTML = (`<div class="card">
            <img src="${list.menuList[i].image}" alt="${list.menuList[i].Name}" style="width:100%">
            <h1>${list.menuList[i].Name}</h1>
            <p class="price">$ ${list.menuList[i].price}</p>
          </div>`)

          secondaryDiv.append(thirdDiv);
        } 

       
        mainDiv.append(secondaryDiv);

        details.append(mainDiv);

        container.append(details);


    }

};

export {
    Menu
};