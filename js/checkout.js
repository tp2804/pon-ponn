function formatMoney(n) {
  return n.toLocaleString("vi-VN") + "₫";
}

function getCart() {
  return JSON.parse(localStorage.getItem("cart")) || [];
}

function renderCheckout() {
  const cart = getCart();

  if (cart.length === 0) {
    alert("Giỏ hàng trống!");
    location.href = "index.html";
    return;
  }

  let productTotal = 0;

  cart.forEach(item => {
    productTotal += item.price * item.quantity;
  });

  document.getElementById("productTotal").textContent = formatMoney(productTotal);
  document.getElementById("originalPrice").textContent = formatMoney(productTotal);
  document.getElementById("finalTotal").textContent = formatMoney(productTotal);
}

renderCheckout();

/* THANH TOÁN */
const orderBtn = document.getElementById("orderBtn");
const qrBox = document.getElementById("qrBox");
const paidBtn = document.getElementById("paidBtn");

orderBtn.onclick = () => {
  const method = document.querySelector('input[name="payment"]:checked').value;
  const note = document.getElementById("orderNote").value;

  localStorage.setItem("orderNote", note);

  if (method === "cod") {
    alert("Đặt hàng thành công!");
    localStorage.removeItem("cart");
    location.href = "camon.html";
  } else {
    qrBox.style.display = "block";
    qrBox.scrollIntoView({ behavior: "smooth" });
  }
};

paidBtn.onclick = () => {
  alert("Xác nhận chuyển khoản thành công!");
  localStorage.removeItem("cart");
  location.href = "camon.html";
};
