// Featured Favourites — data-driven cards (edit array to add/remove items)
const menuItems = [
  { img: "menu-1.jpg",  title: "Signature Chocolate Cake", desc: "Rich fudge layers with silky ganache.", price: "2,500" },
  { img: "menu-2.jpg",  title: "French Macarons Box", desc: "Delicate almond shells, assorted flavours.", price: "1,200" },
  { img: "menu-3.jpg",  title: "Berry Cheesecake", desc: "Creamy baked cheesecake with fresh berries.", price: "1,800" },
  { img: "menu-4.jpg",  title: "Fudge Brownie Stack", desc: "Dense, gooey chocolate brownies.", price: "900" },
  { img: "menu-5.jpg",  title: "Classic Red Velvet", desc: "Velvety sponge with cream cheese frosting.", price: "2,200" },
  { img: "menu-6.jpg",  title: "Glazed Donut Dozen", desc: "Soft donuts with assorted glazes.", price: "1,000" },
  { img: "menu-7.jpg",  title: "Tiramisu Cups", desc: "Coffee-soaked layers with mascarpone.", price: "1,400" },
  { img: "menu-8.jpg",  title: "Fresh Fruit Tart", desc: "Buttery crust, custard & glazed fruits.", price: "1,600" },
  { img: "menu-9.jpg",  title: "Custom Birthday Cake", desc: "Personalised design for every celebration.", price: "3,000" },
  { img: "menu-10.jpg", title: "Assorted Dessert Box", desc: "A curated selection of our finest sweets.", price: "2,000" },
  { img: "menu-11.jpg", title: "Artisan Croissants", desc: "Flaky, buttery, baked fresh each morning.", price: "700" },
  { img: "menu-12.jpg", title: "Gourmet Margherita Pizza", desc: "Hand-tossed base, mozzarella & basil.", price: "1,100" },
];

function renderMenu() {
  const grid = document.getElementById("menuGrid");
  if (!grid) return;

  grid.innerHTML = menuItems.map(item => `
    <div class="col-6 col-lg-3">
      <div class="menu-card">
        <div class="menu-img"><img src="images/${item.img}" alt="${item.title}"></div>
        <div class="menu-body">
          <h3>${item.title}</h3>
          <p>${item.desc}</p>
          <p class="menu-price">Starting from <span>Rs. ${item.price}</span></p>
          <div class="menu-buttons">
            <a href="#" class="btn-quote"><i class="bi bi-file-earmark-text"></i> Get Quote</a>
            <a href="https://wa.me/920000000000" target="_blank" class="btn-whatsapp-sm"><i class="bi bi-chat-dots-fill"></i> WhatsApp</a>
          </div>
        </div>
      </div>
    </div>
  `).join("");
}

document.addEventListener("DOMContentLoaded", renderMenu);