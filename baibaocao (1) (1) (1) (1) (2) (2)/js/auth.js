function dangki(e) {
    e.preventDefault();
    var username = document.getElementById("username").value.trim();
    var email = document.getElementById("email").value.trim();
    var password = document.getElementById("password").value;
    var avatar = document.getElementById("avatar").value;

    if (!username || !password) {
        alert("Vui lòng nhập tên và mật khẩu!");
        return;
    }

    var user = {
        username: username,
        email: email,
        password: password,
        avatar: avatar || "https://via.placeholder.com/150"
    };

    localStorage.setItem(username, JSON.stringify(user));
    alert("Đăng ký thành công!");
    window.location.href = "login.html";
}

function dangnhap(e) {
    e.preventDefault();
    var username = document.getElementById("username").value.trim();
    var password = document.getElementById("password").value;

    var userData = localStorage.getItem(username);

    if (userData) {
        var user = JSON.parse(userData);
        if (password === user.password) {
            alert("Đăng nhập thành công!");
            localStorage.setItem("currentUser", JSON.stringify(user));
            window.location.href = "../index.html";
        } else {
            alert("Sai mật khẩu!");
        }
    } else {
        alert("Tài khoản không tồn tại!");
    }
}

/* ===== HIỂN THỊ USER + ẨN NÚT LOGIN ===== */
function checkLoginStatus() {
    var userBox = document.getElementById("userBox");
    var currentUser = JSON.parse(localStorage.getItem("currentUser"));

    if (currentUser && userBox) {
        // Thay toàn bộ nút login/register bằng info user
        userBox.innerHTML = `
            <div class="user-info-container">
                <img src="${currentUser.avatar}" alt="Avatar" class="user-avatar">
                <span class="user-name">Chào, ${currentUser.username}</span>
                <a href="javascript:void(0)" onclick="logout()" class="logout-btn">Thoát</a>
            </div>
        `;
    }
}

/* ===== ĐĂNG XUẤT ===== */
function logout() {
    if (confirm("Bạn có chắc chắn muốn đăng xuất không?")) {
        localStorage.removeItem("currentUser");
        window.location.reload();
    }
}

/* ===== CHẶN XEM SP KHI CHƯA LOGIN ===== */
function checkLoginBeforeView(path) {
    if (!localStorage.getItem("currentUser")) {
        alert("Vui lòng đăng nhập để xem chi tiết sản phẩm!");
        window.location.href = "dki&dnhap/login.html";
    } else {
        window.location.href = path;
    }
}

/* CHẠY KHI TRANG LOAD */
document.addEventListener("DOMContentLoaded", checkLoginStatus);
