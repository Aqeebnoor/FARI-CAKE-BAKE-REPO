// Featured Favourites — data-driven cards (edit array to add/remove items)
const menuItems = [
  { img: "menu-1.png",  title: "Double Fudge Brownie", desc: "Rich brownie sponge with chocolate fudge sauce, marbled with white chocolate.", price:  " Rs. 200" },
  { img: "special-offer.png",  title: "Umrah Mubarak Cake", desc: "Custom-designed multi-layer celebration cake to mark a sacred journey.", price: "5 Pound  Rs. 7500" },
  { img: "menu-3.png",  title: "Mini Chicken Tikka Pizza", desc: "Topped with spicy tikka chicken chunks, onions, and melted mozzarella.", price: "Starting From Rs. 300" },
  { img: "menu-4.png",  title: "Fudge Brownie Stack", desc: "Dense, gooey chocolate brownies.", price: "900" },
  { img: "menu-5.png",  title: "Classic Red Velvet", desc: "Velvety sponge with cream cheese frosting.", price: "2,200" },
  { img: "menu-6.png",  title: "Glazed Donut Dozen", desc: "Soft donuts with assorted glazes.", price: "1,000" },
  { img: "custom-cake.png",  title: "Tiramisu Cups", desc: "Coffee-soaked layers with mascarpone.", price: "1,400" },
  { img: "menu-11.png", title: "Artisan Croissants", desc: "Flaky, buttery, baked fresh each morning.", price: "700" },
  
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
          <p class="menu-price"> <span> ${item.price}</span></p>
          <div class="menu-buttons">
            <a href="#" target="_blank" class="btn-whatsapp-sm"><i class="bi bi-chat-dots-fill"></i> WhatsApp</a>
          </div>
        </div>
      </div>
    </div>
  `).join("");
}

document.addEventListener("DOMContentLoaded", renderMenu);