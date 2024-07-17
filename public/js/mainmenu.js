/*
    > Object declaration
*/

const PageHeader = document.getElementById("PageHeader");
const PageHeaderText = document.getElementById("PageHeaderGreetingText");
const PageBody = document.getElementById("PageBody");

//
/*
 * When user is scrolling the window, it should shrink the header for some interval
 */

window.onscroll = function () {
  shrinkHeader();
};

/*
 * If window is done loading, then trigger the shirk header
 */
window.onload = function () {
  shrinkHeader();
  GenerateFood();
};

/*
    > Shrink header depending on the scrolling distance 
*/
function shrinkHeader() {
  const scrollTop =
    document.documentElement.scrollTop || document.body.scrollTop;
  if (scrollTop >= 0 && scrollTop < 50) {
    PageHeader.style.height = `calc(200px - ${scrollTop * 2}px)`;
    PageHeaderText.style.fontSize = `calc(80px - ${scrollTop * 0.5}px)`;
    PageBody.style.paddingTop = `${scrollTop}px`;
  } else if (scrollTop >= 50) {
    PageHeader.style.height = "100px";
    PageHeaderText.style.fontSize = "55px";

    if (scrollTop <= 100) {
      PageBody.style.paddingTop = `${scrollTop}px`;
    }
  }
}

/*
    > Generate the food card
*/
function GenerateFood() {
  const FoodContainer = document.getElementById("FoodContainer");

  for (i = 0; i < 8; i++) {
    const foodCard = document.createElement("div");

    foodCard.classList.add("Food", "Item");

    // * Appened the food card to the food container
    FoodContainer.appendChild(foodCard);
    FoodContainer.style.width = `${
      250 * (FoodContainer.children.length)
    }px`;
  }
}
