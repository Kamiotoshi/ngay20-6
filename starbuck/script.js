var menu = {
    "Caffe Americano":{price: 3.99,image:"starbuck/americano.jpg"},
    "Caffe Latte":{price: 4.599, image:"starbuck/Cafe-latte.jpg"},
    "Cappuchino":{price: 3.99, image:"starbuck/cappuchino.jpg"},
    "Espresso":{price: 2.99,image:"starbuck/esspresso.jpg"},
    "Mocha":{price: 4.79, image:"starbuck/mocha.jpg"},
    "white chocolate mocha":{price:4.99,image:"starbuck/white chocolate mattcha.jpg"},
    "Caramel Macchiato":{price:4.79,image:"starbuck/caramel macchiato starbuck.jpg"},
    "java chip frappuchunino":{price:5.49,image:"starbuck/java chip frappuccino.jpg"},
    "green tea frappuchino":{price :4.99,image:"starbuck/green tea cream frappuccino.jpg"},
    "Chai tea latte":{price:3.99,image:"starbuck/chai tea latte starbucks.jpg"},
};
function createDrinkMenu(){
    var menuContainer =document.getElementById("menu-containet");
    var menuList=document.createElement("ul");
    for(var drink in menu){
        var price =menu[drink].price.toFixed(2);
        var image =menu[drink].image;

        var menuItem = document.createElement("li");
        var drinkImage = document.createElement("img");
        var drinkName = document.createElement("p");
        var drinkPrice = document.createElement("p");

        drinkImage.src = image;
        drinkImage.alt = drink;
        drinkName.textContent = drink;
        drinkPrice.textContent = "$" + price;
        
        menuItem.appendChild(drinkImage);
        menuItem.appendChild(drinkName);
        menuItem.appendChild(drinkPrice);

        menuList.appendChild(menuItem);
    }
    menuContainer.appendChild(menuList);
}
window.onload = createDrinkMenu;