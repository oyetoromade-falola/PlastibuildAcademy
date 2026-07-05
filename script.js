// Mobile menu toggle
const toggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

toggle.addEventListener("click", () => {
    navLinks.classList.toggle("show");
});

// Navbar scroll effect
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});



// COUNTER ANIMATION
const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {
    counter.innerText = "0";

    const updateCounter = () => {
        const target = +counter.getAttribute("data-target");
        const current = +counter.innerText;

        const increment = target / 100;

        if (current < target) {
            counter.innerText = Math.ceil(current + increment);
            setTimeout(updateCounter, 20);
        } else {
            counter.innerText = target;
        }
    };

    updateCounter();
});

     // =========================
// PROGRAM FILTER SYSTEM
// =========================

const filterButtons = document.querySelectorAll(".program-filters button");
const programCards = document.querySelectorAll(".program-card");

filterButtons.forEach(button => {
    button.addEventListener("click", () => {

        // remove active from all
        filterButtons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");

        const filter = button.textContent.toLowerCase();

        programCards.forEach(card => {

            const title = card.querySelector("h3").textContent.toLowerCase();
            const badge = card.querySelector(".badge").textContent.toLowerCase();

            if (filter === "all") {
                card.style.display = "block";
            }
            else if (
                title.includes(filter) ||
                badge.includes(filter)
            ) {
                card.style.display = "block";
            }
            else {
                card.style.display = "none";
            }
        });
    });
});


