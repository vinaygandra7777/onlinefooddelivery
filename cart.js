function loadCart() {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const cartItems = document.getElementById("cart-items");
    const totalPriceElement = document.getElementById("total-price");
    const totalpayable = document.getElementById("total-charges");
    const totalcgst = document.getElementById("total-cgst");
    const totalsgst = document.getElementById("total-sgst");
    const display1 = document.getElementById("display1");
    const createelem = document.getElementById("createelem")
    
    cartItems.innerHTML = ""; 
    let totalPrice = 0;
  
    if (cart.length === 0) {
      createelem.innerHTML = `<img src="pics/cart.png" height="100px">
          <h3>Oops! There is nothing in your cart</h3>
          <br>
          <p>Explore around to add items to your cart</p>
          <br>
          <a href="main.html"><button>Return To Shop</button></a>`;
      createelem.classList.add("cartelement")
      display1.style.display = "none";
    } else {
      display1.style.display = "block"; 
      cart.forEach((item, index) => {
        const li = document.createElement("li");
        li.innerHTML = `
          <div class="cart-item-details">
            <img src="${item.image}" alt="${item.name}">
            <div>
              <h3>${item.name}</h3>
              <p>Price: ₹${item.price.toFixed(2)}</p>
            </div>
          </div>
          <button onclick="removeFromCart(${index})">Remove</button>
        `;
        cartItems.appendChild(li);
        totalPrice += item.price;
      });
  
      totalpayable.textContent = (totalPrice * 0.15).toFixed(3);
      totalcgst.textContent = (totalPrice * 0.05).toFixed(3);
      totalsgst.textContent = (totalPrice * 0.05).toFixed(3);
      totalPriceElement.textContent = totalPrice.toFixed(2);
    }
  }
      let count = 0
      function offer(){
        if (count === 0){
          const totalPriceElement = document.getElementById("total-price")
          const coupon = document.getElementById("save");
          if(coupon.value.toUpperCase() === "SAVE50"){
          totalPriceElement.textContent=(Number(totalPriceElement.innerHTML)-50).toFixed(2)
          count++
        }
      }else{
        alert("Sorry! offer valid only once:")
      }
        }
  
      function removeFromCart(index) {
        alert("Sure! You want to remove the item")
        const cart = JSON.parse(localStorage.getItem("cart")) || [];
        cart.splice(index, 1);
        localStorage.setItem("cart", JSON.stringify(cart));
        loadCart();
      }
  
      function clearCart() {
        localStorage.removeItem("cart");
        loadCart();
      }
  
      loadCart();
      function paynow() {
        const totalPriceElement = document.getElementById("total-price").textContent;
        localStorage.setItem("totalAmount", totalPriceElement); // Save total amount to localStorage
        window.location.href = "bill.html"; // Redirect to billing page
      }
      