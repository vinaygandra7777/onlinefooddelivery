const drinks = [
    {
        "name": "Espresso",
        "description": "Rich and bold espresso shot.",
        "image": "https://starbucksstatic.cognizantorderserv.com/Items/Small/webP/100468.webp",
        "rating": 4.7,
        "type": "Hot Coffee",
        "price": 180
    },
    {
        "name": "Cappuccino",
        "description": "Espresso with steamed milk and a deep layer of foam.",
        "image": "https://starbucksstatic.cognizantorderserv.com/Items/Small/webP/104068.webp",
        "rating": 4.6,
        "type": "Hot Coffee",
        "price": 220
    },
    {
        "name": "Flat White",
        "description": "Smooth ristretto shots with velvety steamed milk.",
        "image": "https://starbucksstatic.cognizantorderserv.com/Items/Small/webP/100485.webp",
        "rating": 4.5,
        "type": "Hot Coffee",
        "price": 260
    },
    {
        "name": "Americano",
        "description": "Espresso shots topped with hot water for a light layer of crema.",
        "image": "https://starbucksstatic.cognizantorderserv.com/Items/Small/webP/100391.webp",
        "rating": 4.2,
        "type": "Hot Coffee",
        "price": 200
    },
    {
        "name": "Nitro Cold Brew",
        "description": "Cold brew infused with nitrogen for a creamy texture.",
        "image": "https://starbucksstatic.cognizantorderserv.com/Items/Small/webP/108059.webp",
        "rating": 4.8,
        "type": "Cold Coffee",
        "price": 280
    },
    {
        "name": "Iced Americano",
        "description": "Chilled espresso shots poured over water and ice.",
        "image": "https://starbucksstatic.cognizantorderserv.com/Items/Small/webP/100385.webp",
        "rating": 4.3,
        "type": "Cold Coffee",
        "price": 210
    },
    {
        "name": "Iced Vanilla Latte",
        "description": "Chilled espresso, milk, and vanilla syrup over ice.",
        "image": "https://starbucksstatic.cognizantorderserv.com/Items/Small/webP/108056.webp",
        "rating": 4.6,
        "type": "Cold Coffee",
        "price": 270
    },
    {
        "name": "Java Chip Frappuccino",
        "description": "Coffee blended with chocolate chips, milk, and ice.",
        "image": "https://starbucksstatic.cognizantorderserv.com/Items/Small/webP/100501.webp",
        "rating": 4.9,
        "type": "Frappuccino",
        "price": 340
    },
    {
        "name": "Mocha Cookie Crumble Frappuccino",
        "description": "Coffee blended with mocha sauce, milk, and cookie crumbles.",
        "image": "https://starbucksstatic.cognizantorderserv.com/Items/Small/webP/100465.webp",
        "rating": 4.7,
        "type": "Frappuccino",
        "price": 360
    },
    {
        "name": "Iced Chai Tea Latte",
        "description": "Spiced chai tea concentrate with milk over ice.",
        "image": "https://starbucksstatic.cognizantorderserv.com/Items/Small/webP/100367.webp",
        "rating": 4.5,
        "type": "Tea",
        "price": 250
    },
    {
        "name": "Peach Green Tea Lemonade",
        "description": "Green tea with peach-flavored juice and lemonade.",
        "image": "https://starbucksstatic.cognizantorderserv.com/Items/Small/webP/100374.webp",
        "rating": 4.6,
        "type": "Tea",
        "price": 230
    },
    {
        "name": "Strawberry Acai Refresher",
        "description": "A refreshing mix of strawberry and acai flavors.",
        "image": "https://starbucksstatic.cognizantorderserv.com/Items/Small/webP/114038.webp",
        "rating": 4.7,
        "type": "Blended Drinks",
        "price": 280
    },
    {
        "name": "Mango Dragonfruit Refresher",
        "description": "Vibrant mango and dragonfruit flavors with ice.",
        "image": "https://starbucksstatic.cognizantorderserv.com/Items/Small/webP/115188.webp",
        "rating": 4.8,
        "type": "Blended Drinks",
        "price": 300
    },
    {
        "name": "Caramel Ribbon Crunch Frappuccino",
        "description": "Caramel blended with coffee, milk, and ice.",
        "image": "https://starbucksstatic.cognizantorderserv.com/Items/Small/webP/100504.webp",
        "rating": 4.9,
        "type": "Frappuccino",
        "price": 370
    },
    {
        "name": "Hot Chocolate",
        "description": "Rich and creamy hot chocolate topped with whipped cream.",
        "image": "https://starbucksstatic.cognizantorderserv.com/Items/Small/webP/115986.webp",
        "rating": 4.3,
        "type": "Hot Coffee",
        "price": 220
    },
    {
        "name": "Iced Green Tea",
        "description": "Brewed green tea served over ice.",
        "image": "https://starbucksstatic.cognizantorderserv.com/Items/Small/webP/104740.webp",
        "rating": 4.4,
        "type": "Tea",
        "price": 200
    },
    {
        "name": "Pumpkin Spice Latte",
        "description": "Espresso and steamed milk with pumpkin spice flavor.",
        "image": "https://starbucksstatic.cognizantorderserv.com/Items/Small/webP/104778.webp",
        "rating": 4.7,
        "type": "Hot Coffee",
        "price": 310
    },
    {
        "name": "Toasted White Chocolate Mocha",
        "description": "Espresso with white chocolate and whipped cream.",
        "image": "https://starbucksstatic.cognizantorderserv.com/Items/Small/webP/100485.webp",
        "rating": 4.5,
        "type": "Hot Coffee",
        "price": 320
    },
    {
        "name": "Berry Hibiscus Refresher",
        "description": "Tangy hibiscus flavor with real berries and ice.",
        "image": "https://starbucksstatic.cognizantorderserv.com/Items/Small/webP/100491.webp",
        "rating": 4.6,
        "type": "Blended Drinks",
        "price": 290
    },
    {
        "name": "Coconut Milk Latte",
        "description": "Espresso blended with smooth coconut milk.",
        "image": "https://starbucksstatic.cognizantorderserv.com/Items/Small/webP/M113519.webp",
        "rating": 4.4,
        "type": "Hot Coffee",
        "price": 250
    },
    {
        "name": "Vanilla Bean Frappuccino",
        "description": "A creamy, caffeine-free vanilla blended drink.",
        "image": "https://starbucksstatic.cognizantorderserv.com/Items/Small/webP/100471.webp",
        "rating": 4.7,
        "type": "Frappuccino",
        "price": 300
    },
    {
        "name": "Honey Citrus Mint Tea",
        "description": "A soothing blend of citrus and mint teas with honey.",
        "image": "https://starbucksstatic.cognizantorderserv.com/Items/Small/webP/112554.webp",
        "rating": 4.5,
        "type": "Tea",
        "price": 240
    },
    {
        "name": "Iced Coffee",
        "description": "Freshly brewed coffee served over ice.",
        "image": "https://starbucksstatic.cognizantorderserv.com/Items/Small/webP/115987.webp",
        "rating": 4.2,
        "type": "Cold Coffee",
        "price": 190
    },
    {
        "name": "Cold Foam Cold Brew",
        "description": "Cold brew topped with velvety sweet cream cold foam.",
        "image": "https://starbucksstatic.cognizantorderserv.com/Items/Small/webP/104997.webp",
        "rating": 4.8,
        "type": "Cold Coffee",
        "price": 300
    },
    {
        "name": "White Chocolate Mocha",
        "description": "Espresso and steamed milk with white chocolate sauce.",
        "image": "https://starbucksstatic.cognizantorderserv.com/Items/Small/webP/100507.webp",
        "rating": 4.9,
        "type": "Hot Coffee",
        "price": 350
    },
    {
        "name": "Caramel Apple Spice",
        "description": "Steamed apple juice with caramel and whipped cream.",
        "image": "https://starbucksstatic.cognizantorderserv.com/Items/Small/webP/100405.webp",
        "rating": 4.6,
        "type": "Hot Coffee",
        "price": 230
    },
    {
        "name": "Chocolate Cream Cold Brew",
        "description": "Cold brew with chocolate cream cold foam.",
        "image": "https://starbucksstatic.cognizantorderserv.com/Items/Small/webP/105000.webp",
        "rating": 4.7,
        "type": "Cold Coffee",
        "price": 310
    },
    {
        "name": "Salted Caramel Cream Cold Brew",
        "description": "Cold brew topped with salted caramel cold foam.",
        "image": "https://starbucksstatic.cognizantorderserv.com/Items/Small/webP/M116364.webp",
        "rating": 4.6,
        "type": "Cold Coffee",
        "price": 300
    },
    {
        "name": "Green Tea Latte",
        "description": "Matcha green tea blended with milk.",
        "image": "https://starbucksstatic.cognizantorderserv.com/Items/Small/webP/100360.webp",
        "rating": 4.7,
        "type": "Tea",
        "price": 260
    }
]
let currentFilteredDrinks = drinks;

function renderCards(filteredDrinks) {
  const cardContainer = document.getElementById("card-container");
  cardContainer.innerHTML = "";

  if (filteredDrinks.length === 0) {
    cardContainer.innerHTML = `<p>No drinks found!</p>`;
    return;
  }

  filteredDrinks.forEach((drink) => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <img src="${drink.image}" alt="${drink.name}">
      <h3>${drink.name}</h3>
      <p>${drink.description}</p>
      <p class="rating">Rating: ⭐ ${drink.rating}</p>
      <p class="price">₹${drink.price}</p>
      <button class="cart-btn" onclick='addToCart(${JSON.stringify(drink)})'>Add Item</button>
    `;

    cardContainer.appendChild(card);
  });
}

function addToCart(drink) {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push(drink);
  localStorage.setItem("cart", JSON.stringify(cart));
  alert(`${drink.name} added to cart!`);
}

function filterDrinks(type) {
  let filteredDrinks = drinks;

  if (type !== "All") {
    filteredDrinks = filteredDrinks.filter((drink) => drink.type === type);
  }

  currentFilteredDrinks = filteredDrinks; 
  renderCards(filteredDrinks);
}

function searchDrinks(query) {
  const lowerCaseQuery = query.toLowerCase();

  const searchedDrinks = currentFilteredDrinks.filter(
    (drink) =>
      drink.name.toLowerCase().includes(lowerCaseQuery) ||
      drink.description.toLowerCase().includes(lowerCaseQuery)
  );

  renderCards(searchedDrinks);
}

document.addEventListener("DOMContentLoaded", () => {
  renderCards(drinks);
  const filterButtons = document.querySelectorAll(".filter-btn");
  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      filterButtons.forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");
      const type = button.getAttribute("data-type");
      filterDrinks(type);
    });
  });
  const searchBar = document.getElementById("search-bar");
  searchBar.addEventListener("input", (e) => {
    const query = e.target.value;
    searchDrinks(query);
  });
});
function toclick(){
  setTimeout(()=>{
    location.reload();
  })
 
}
function toclick1(){
  window.location.href="desert.html"
}
function toclick2(){
  window.location.href="coffeename.html"
}
gsap.from(".menuitem", {
    scrollTrigger: {
        trigger: ".menuitem",
        start: "top 80%",
        toggleActions: "play none none reverse",
    },
    duration: 3,
    opacity: 0,
    x: 100,
    stagger: 0.2
});
function addToCart(drink) {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push(drink);
  localStorage.setItem("cart", JSON.stringify(cart));

  // Show the popup
  const popup = document.getElementById("popup");
  const popupImg = document.getElementById("popup-img");
  const popupName = document.getElementById("popup-name");
  const popupDescription = document.getElementById("popup-description");
  
  popupImg.src = drink.image;
  popupName.textContent = `${drink.name} added to cart!`;
  popupDescription.textContent = `You have successfully added ${drink.name} to your cart.`;

  popup.style.display = "block"; // Show the popup

  // Close popup after 5 seconds
  setTimeout(() => {
    popup.style.display = "none"; // Hide the popup
  }, 3000);
}
function goToCart() {
  window.location.href = "cart.html"; // Change this to your cart page URL
}




