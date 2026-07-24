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



// ===================== TESTIMONIALS =====================

const testimonials = [
{
name:"Ayesha Khan",
role:"Birthday Cake",
review:"The cake looked beautiful and tasted amazing. Everyone loved it. Highly recommended!"
},
{
name:"Ali Raza",
role:"Wedding Cake",
review:"Excellent quality, fresh ingredients and on-time delivery. Will definitely order again."
},
{
name:"Sara Ahmed",
role:"Custom Cake",
review:"Exactly the design I wanted. Soft, fresh and delicious. Thank you Fari Cake Bake!"
}
];

const testimonialCard = document.getElementById("testimonialCard");
const dotsContainer = document.getElementById("tDots");
const prevBtn = document.getElementById("tPrev");
const nextBtn = document.getElementById("tNext");

if (testimonialCard) {

let current = 0;

function showTestimonial(i){

testimonialCard.innerHTML = `
<div class="t-stars">
<i class="bi bi-star-fill"></i>
<i class="bi bi-star-fill"></i>
<i class="bi bi-star-fill"></i>
<i class="bi bi-star-fill"></i>
<i class="bi bi-star-fill"></i>
</div>

<p class="t-review">"${testimonials[i].review}"</p>

<h4>${testimonials[i].name}</h4>

<span>${testimonials[i].role}</span>
`;

document.querySelectorAll(".dot").forEach((dot,index)=>{
dot.classList.toggle("active",index===i);
});

}

testimonials.forEach((_,i)=>{
const dot=document.createElement("span");
dot.className="dot";
dot.onclick=()=>{
current=i;
showTestimonial(current);
};
dotsContainer.appendChild(dot);
});

showTestimonial(current);

nextBtn.onclick=()=>{
current=(current+1)%testimonials.length;
showTestimonial(current);
};

prevBtn.onclick=()=>{
current=(current-1+testimonials.length)%testimonials.length;
showTestimonial(current);
};

}