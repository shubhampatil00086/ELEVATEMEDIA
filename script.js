/*=====================================
ELEVATE MEDIA
SCRIPT.JS - PART 1
======================================*/


/*========== PRELOADER ==========*/

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    if (loader) {

        loader.style.opacity = "0";

        loader.style.transition = "0.5s";

        setTimeout(() => {

            loader.style.display = "none";

        }, 500);

    }

});


/*========== MOBILE MENU ==========*/

const menu = document.getElementById("menu");
const navbar = document.getElementById("navbar");

menu.addEventListener("click", () => {

    navbar.classList.toggle("active");

    if (navbar.classList.contains("active")) {

        menu.innerHTML = '<i class="fa-solid fa-xmark"></i>';

    } else {

        menu.innerHTML = '<i class="fa-solid fa-bars"></i>';

    }

});


document.querySelectorAll("#navbar a").forEach(link => {

    link.addEventListener("click", () => {

        navbar.classList.remove("active");

        menu.innerHTML = '<i class="fa-solid fa-bars"></i>';

    });

});


/*========== STICKY HEADER ==========*/

const header = document.getElementById("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.style.background = "rgba(8,16,31,.95)";
        header.style.boxShadow = "0 10px 25px rgba(0,0,0,.35)";

    } else {

        header.style.background = "rgba(15,23,42,.65)";
        header.style.boxShadow = "none";

    }

});


/*========== ACTIVE NAVIGATION ==========*/

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("#navbar a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        if (window.scrollY >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});


/*========== SCROLL REVEAL ==========*/

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {

    threshold: 0.15

});


document.querySelectorAll(

".about-image,.about-content,.service-card,.stat-card,.project,.contact-info,form"

).forEach(element => {

    element.classList.add("fade-up");

    observer.observe(element);

});


console.log("✅ Part 1 Loaded");
/*=====================================
ELEVATE MEDIA
SCRIPT.JS - PART 2
======================================*/


/*========== ANIMATED COUNTERS ==========*/

const counters = document.querySelectorAll(".counter");

const counterObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            const counter = entry.target;

            const target = +counter.dataset.target;

            let count = 0;

            const speed = target / 100;

            const updateCounter = () => {

                if (count < target) {

                    count += speed;

                    counter.innerText = Math.ceil(count);

                    requestAnimationFrame(updateCounter);

                } else {

                    if (target === 300) {

                        counter.innerText = "300+";

                    } else if (target === 150) {

                        counter.innerText = "150+";

                    } else if (target === 5) {

                        counter.innerText = "5+";

                    } else if (target === 24) {

                        counter.innerText = "24/7";

                    } else {

                        counter.innerText = target;

                    }

                }

            };

            updateCounter();

            counterObserver.unobserve(counter);

        }

    });

}, {

    threshold: 0.5

});

counters.forEach(counter => {

    counterObserver.observe(counter);

});


/*========== SMOOTH SCROLL ==========*/

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e) {

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            e.preventDefault();

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});


/*========== PORTFOLIO LIGHTBOX ==========*/

const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");
const closeLightbox = document.getElementById("closeLightbox");

document.querySelectorAll(".project img").forEach(image => {

    image.addEventListener("click", () => {

        lightbox.style.display = "flex";

        lightboxImg.src = image.src;

        document.body.style.overflow = "hidden";

    });

});

closeLightbox.addEventListener("click", () => {

    lightbox.style.display = "none";

    document.body.style.overflow = "auto";

});

lightbox.addEventListener("click", (e) => {

    if (e.target === lightbox) {

        lightbox.style.display = "none";

        document.body.style.overflow = "auto";

    }

});


/*========== SCROLL TO TOP ==========*/

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        topBtn.classList.add("show");

    } else {

        topBtn.classList.remove("show");

    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});


console.log("✅ Part 2 Loaded");
/*=====================================
ELEVATE MEDIA
SCRIPT.JS - PART 3
======================================*/


/*========== WHATSAPP CONTACT FORM ==========*/

const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function (e) {

        e.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const subject = document.getElementById("subject").value.trim();
        const message = document.getElementById("message").value.trim();

        if (!name || !email || !subject || !message) {

            alert("Please fill in all fields.");

            return;

        }

        const emailPattern =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(email)) {

            alert("Please enter a valid email address.");

            return;

        }

        const whatsappMessage =
`📩 *New Website Inquiry*

👤 Name: ${name}

📧 Email: ${email}

📝 Subject: ${subject}

💬 Message:
${message}`;

        const phoneNumber = "918669241982";

        const whatsappURL =
            `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;

        window.open(whatsappURL, "_blank");

        alert("Thank you! WhatsApp is opening. Please tap Send to deliver your message.");

        contactForm.reset();

    });

}


/*========== ESC KEY CLOSE LIGHTBOX ==========*/

document.addEventListener("keydown", function (e) {

    if (e.key === "Escape") {

        if (lightbox.style.display === "flex") {

            lightbox.style.display = "none";

            document.body.style.overflow = "auto";

        }

    }

});


/*========== PAGE READY ==========*/

window.addEventListener("load", () => {

    console.log("🚀 Elevate Media Website Loaded Successfully");

});
