// =========================================================
// FARI CAKE BAKE — main.js
// Header ke liye Bootstrap khud handle karta hai
// (mobile toggle + dropdown). Aage jo pages/sections
// banenge unka JS yahan add hota rahega.
// =========================================================
 
document.addEventListener("DOMContentLoaded", function () {
  console.log("Fari Cake Bake site loaded ✅");
});
 


const filterBtns = document.querySelectorAll(".filter-btn");
const galleryItems = document.querySelectorAll(".gallery-item");

filterBtns.forEach(btn => {

    btn.addEventListener("click", () => {

        // Active button
        filterBtns.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");

        const filter = btn.dataset.filter;

        galleryItems.forEach(item => {

            if (filter === "all" || item.dataset.category === filter) {

                item.style.display = "block";

            } else {

                item.style.display = "none";

            }

        });

    });

});