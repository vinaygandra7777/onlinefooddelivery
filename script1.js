drinks = [
    {
        "name": "Espresso",
        "description": "Rich and bold espresso shot.",
        "image": "https://starbucksstatic.cognizantorderserv.com/Items/Small/webP/100468.webp",
        "rating": 4.7,
        "type": "Hot Coffee",
        "price": 180.05
    },
    {
        "name": "Cappuccino",
        "description": "Espresso with steamed milk and a deep layer of foam.",
        "image": "https://starbucksstatic.cognizantorderserv.com/Items/Small/webP/104068.webp",
        "rating": 4.6,
        "type": "Hot Coffee",
        "price": 220.75
    },
    {
        "name": "Flat White",
        "description": "Smooth ristretto shots with velvety steamed milk.",
        "image": "https://starbucksstatic.cognizantorderserv.com/Items/Small/webP/100485.webp",
        "rating": 4.5,
        "type": "Hot Coffee",
        "price": 260.85
    },
    {
        "name": "Iced Coffee",
        "description": "Freshly brewed coffee served over ice.",
        "image": "https://starbucksstatic.cognizantorderserv.com/Items/Small/webP/115987.webp",
        "rating": 4.2,
        "type": "Cold Coffee",
        "price": 190.95
    }
]
  const cardContainer = document.getElementById("card-container");
  cardContainer.innerHTML = "";
  drinks.forEach((drink) => {
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
  function addToCart(drink) {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push(drink);
  localStorage.setItem("cart", JSON.stringify(cart));
  alert(`${drink.name} added to cart!`);
}
 
window.onload = function () {
  const popup = document.getElementById('offer-popup');
  const closeBtn = document.getElementById('close-popup');
  
  setTimeout(() => {
    popup.classList.add('show');
  }, 2000);
  
  closeBtn.addEventListener('click', function () {
    popup.classList.remove('show');
  });
};

const searchBar = document.getElementById("placevalue");
  searchBar.addEventListener("input", (e) => {
    setTimeout(()=>{
        window.location.href="coffe.html";
    },2000)
    
  });
  gsap.from(".mainclass1" ,{
    duration: 3,
    opacity: 0,
    y: 50,
    stagger: 0.3
});

gsap.from(".menuitem div", {
    scrollTrigger: {
        trigger: ".menuitem",
        start: "top 80%",
        toggleActions: "play",
    },
    duration: 1,
    opacity: 0,
    x: 100,
    stagger: 0.2
});
gsap.from(".recomd div", {
    scrollTrigger: {
        trigger: ".bestitem",
        start: "top 80%",
        toggleActions: "play",
    },
    duration: 1,
    opacity: 0,
    x: 100,
    stagger: 0.2
});
AOS.init({
    duration: 1500, 
    once: true,     
    easing: 'ease-in-out',
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