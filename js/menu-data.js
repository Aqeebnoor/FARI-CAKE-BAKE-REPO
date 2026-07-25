// Featured Favourites — data-driven cards (edit array to add/remove items)
const menuItems = [
  { img: "menu-1.png",  title: "Double Fudge Brownie", desc: "Rich brownie sponge with chocolate fudge sauce, marbled with white chocolate.", price:  " Rs. 200" },
  { img: "special-offer.png",  title: "Umrah Mubarak Cake", desc: "Custom-designed multi-layer celebration cake to mark a sacred journey.", price: "5 Pound  Rs. 7500" },
  { img: "menu-3.png",  title: "Mini Chicken Tikka Pizza", desc: "Topped with spicy tikka chicken chunks, onions, and melted mozzarella.", price: "Starting From Rs. 300" },
  { img: "menu-4.png",  title: "Lotus Bento Cake", desc: "Mini celebration cake flavored with Biscoff spread and crunchy Lotus crumbs.", price: "1 Pound  Rs. 1500" },
  { img: "menu-5.png",  title: "Dum Qeema Patties", desc: "Crispy baked pastries packed with aromatic, smoky minced meat.", price: "6 pieces Rs. 1000" },
  { img: "menu-6.png",  title: "Three-Milk Dessert", desc: "Classic Tres Leches sponge cake soaked in a rich three-milk blend.", price: "Starting from Rs. 650" },
  { img: "custom-cake.png",  title: "Dholki Cake", desc: "Vibrant, festively decorated cake tailored for wedding and dholki events.", price: "2 Pound Rs. 10000" },
  { img: "menu-11.png", title: "Mini Malai Boti Pizza", desc: "Tender creamy malai chicken boti topped with cheese and a mild sauce base.", price: "Starting from Rs. 320" },
  
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
          <div class="whatsapp-btn1">
  <a href="https://wa.me/923135997866?text=${encodeURIComponent(
`Hi 👋

I would like to order:

${item.title}

Please share the available sizes and price. Thank you!`
)}
  " target="_blank" class="btn-whatsapp-sm">
    <i class="bi bi-chat-dots-fill"></i> WhatsApp
  </a>
</div>
        </div>
      </div>
    </div>
  `).join("");
}

document.addEventListener("DOMContentLoaded", renderMenu);