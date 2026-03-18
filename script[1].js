// تسجيل الدخول وهمي
function login(method) {
    alert("تم تسجيل الدخول بواسطة " + method);
}

// المنتجات
const products = [
    { id:1,name:"منتج 1",price:100,img:"https://via.placeholder.com/200"},
    { id:2,name:"منتج 2",price:200,img:"https://via.placeholder.com/200"},
    { id:3,name:"منتج 3",price:300,img:"https://via.placeholder.com/200"},
    { id:4,name:"منتج 4",price:150,img:"https://via.placeholder.com/200"},
];

const productsContainer = document.getElementById("products");
const cart = document.getElementById("cart");
const cartItemsContainer = document.getElementById("cart-items");
let cartItems = [];

// عرض المنتجات
products.forEach(p => {
    const div = document.createElement("div");
    div.className = "product";
    div.innerHTML = `
        <img src="${p.img}" alt="${p.name}">
        <h3>${p.name}</h3>
        <p>السعر: ${p.price} جنيه</p>
        <button onclick="addToCart(${p.id})">أضف للسلة</button>
    `;
    productsContainer.appendChild(div);
});

function addToCart(id) {
    const product = products.find(p => p.id===id);
    cartItems.push(product);
    renderCart();
}

function removeFromCart(index) {
    cartItems.splice(index,1);
    renderCart();
}

function renderCart() {
    cartItemsContainer.innerHTML="";
    cartItems.forEach((item,index)=>{
        const div = document.createElement("div");
        div.className="cart-item";
        div.innerHTML=`<span>${item.name} - ${item.price} جنيه</span>
        <button onclick="removeFromCart(${index})">حذف</button>`;
        cartItemsContainer.appendChild(div);
    });
}

function toggleCart() {
    cart.classList.toggle("show-cart");
}

function checkout() {
    const address=document.getElementById("address").value;
    if(cartItems.length===0){alert("سلة المشتريات فارغة!"); return;}
    if(address.trim()===""){alert("من فضلك أدخل عنوان التوصيل"); return;}
    alert("تم الطلب! سيتم توصيل المنتجات إلى: " + address);
    cartItems=[];
    renderCart();
    document.getElementById("address").value="";
    cart.classList.remove("show-cart");
}

// التواصل بالهاتف
function callMe() {
    const phone = document.getElementById("phone-number").innerText;
    alert("يمكنك الاتصال بهذا الرقم: " + phone);
}

// واتساب مباشر
function whatsappMe() {
    const phone = document.getElementById("phone-number").innerText;
    const message = encodeURIComponent("مرحبًا، أريد الاستفسار عن المنتجات.");
    const url = `https://wa.me/${phone}?text=${message}`;
    window.open(url,"_blank");
}