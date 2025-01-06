const billingForm = document.getElementById("billing-form");

    billingForm.addEventListener("submit", function (event) {
      event.preventDefault();

      const formData = new FormData(billingForm);
      const billingData = Object.fromEntries(formData.entries());

      const paymentMethod = billingData.payment;

      if (paymentMethod === "Credit Card" && (!billingData["cc-number"] || !billingData["cc-expiry"] || !billingData["cc-cvv"])) {
        alert("Please fill out all credit card details.");
        return;
      }

      if (paymentMethod === "Debit Card" && (!billingData["dc-number"] || !billingData["dc-expiry"] || !billingData["dc-cvv"])) {
        alert("Please fill out all debit card details.");
        return;
      }

      if (paymentMethod === "UPI" && !billingData["upi-id"]) {
        alert("Please enter your UPI ID.");
        return;
      }

      localStorage.setItem("billingData", JSON.stringify(billingData));
      localStorage.removeItem("cart");
    });

    function showPaymentDetails(type) {
      document.querySelectorAll(".payment-details").forEach(detail => {
        detail.style.display = "none";
      });

      if (type !== "none") {
        document.getElementById(`${type}-details`).style.display = "flex";
      }
    }

    function backtohome() {
      window.location.href = "cart.html";
    }
   
    document.addEventListener("DOMContentLoaded", function () {
  const totalAmountSpan = document.getElementById("total-amount");
  const predefinedTotal = localStorage.getItem("totalAmount"); 

  if (predefinedTotal) {
    totalAmountSpan.textContent = predefinedTotal; 
  } else {
    totalAmountSpan.textContent = "0.00"; 
  }

  const billingForm = document.getElementById("billing-form");
  const popupOverlay = document.getElementById("popup-overlay");
  const paymentPopup = document.getElementById("payment-popup");

  billingForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const formData = new FormData(billingForm);
    const billingData = Object.fromEntries(formData.entries());

    if (!billingData.payment) {
      alert("Please select a payment method.");
      return;
    }
    popupOverlay.style.display = "block";
    paymentPopup.style.display = "block";
  });
  });
  function confirmPayment(){
    window.location.href = "confirm.html";
  }
  function showdetails(){
      // Redirect to confirmation page directly
      setTimeout(function() {
        window.location.href = "confirm.html";
      }, 1000); // 2-second delay to simulate payment processing
    }