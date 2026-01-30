const folder = localStorage.getItem("folder");
const list = document.getElementById("product-list");
const title = document.getElementById("title");

title.innerText = folder;

let count = 30; // số ảnh tối đa mày có

for(let i=1;i<=count;i++){
    let img = document.createElement("img");
    img.src = "images/" + folder + "/" + i + ".jpg";

    img.onerror = () => img.remove(); // nếu không có ảnh thì xóa

    list.appendChild(img);
}