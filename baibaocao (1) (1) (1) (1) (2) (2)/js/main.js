
const list = document.getElementById("list");

products.forEach(p=>{
 const div = document.createElement("div");
 div.className="card";
 div.innerHTML=`
 <img src="${p.img}">
 <h3>${p.name}</h3>
 <p>${p.price.toLocaleString()} VND</p>
 <button onclick="addToCart(${p.id})">Thêm vào giỏ</button>
 `;
 list.appendChild(div);
});

function addToCart(id){
 let cart = JSON.parse(localStorage.getItem("cart"))||[];
 const item = products.find(p=>p.id===id);
 cart.push(item);
 localStorage.setItem("cart",JSON.stringify(cart));
 alert("Đã thêm vào giỏ");
}

document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("btnSanPham");
  if(btn){
    btn.onclick = () => {
      window.location.href = "sanpham.html";
    };
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const menuBtn = document.getElementById("menuBtn");
  const megaMenu = document.getElementById("megaMenu");
  const closeMenu = document.getElementById("closeMenu");
  const menuContent = document.getElementById("menuContent");

  // Load menu.html vào mega menu
  fetch("menu.html")
    .then(res => res.text())
    .then(data => {
      menuContent.innerHTML = data;
    });

  menuBtn.onclick = function(e){
    e.preventDefault(); // CHẶN chuyển trang
    megaMenu.style.display = "block";
  }

  closeMenu.onclick = function(){
    megaMenu.style.display = "none";
  }
});


  document.addEventListener("DOMContentLoaded", function () {
  const contact = document.getElementById("contactBtn");
  if(contact){
    contact.onclick = function(){
      window.location.href = "lienhe.html";
    }
  }

});


function addToCart(button) {
  let qty = parseInt(document.getElementById("qty").value); // 👈 LẤY SỐ LƯỢNG TỪ Ô INPUT

  let product = {
    id: button.dataset.id,
    name: button.dataset.name,
    price: Number(button.dataset.price),
    image: button.dataset.image,
    quantity: qty   // 👈 LƯU ĐÚNG SỐ LƯỢNG
  };

  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  let existing = cart.find(item => item.id === product.id);

  if (existing) {
    existing.quantity += qty; // 👈 nếu đã có thì cộng thêm
  } else {
    cart.push(product);
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  alert("Đã thêm vào giỏ hàng!");
}

document.addEventListener("DOMContentLoaded", function () {
  var userBox = document.getElementById("userBox");
  var currentUser = localStorage.getItem("currentUser");

  if (currentUser && userBox) {
    // Ẩn 2 nút đăng nhập / đăng ký
    userBox.style.display = "none";
  }
});

