/*=========================================
ELEVATE MEDIA
script.js
=========================================*/

/*============ PRELOADER ============*/

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    if (loader) {

        loader.style.opacity = "0";

        setTimeout(() => {

            loader.style.display = "none";

        }, 500);

    }

});


/*============ MOBILE MENU ============*/

const menu = document.querySelector(".menu");
const nav = document.querySelector("nav");

if (menu && nav) {

    menu.addEventListener("click", () => {

        nav.classList.toggle("active");

        if (nav.classList.contains("active")) {

            menu.innerHTML = '<i class="fa-solid fa-xmark"></i>';

        } else {

            menu.innerHTML = '<i class="fa-solid fa-bars"></i>';

        }

    });

    document.querySelectorAll("nav a").forEach(link => {

        link.addEventListener("click", () => {

            nav.classList.remove("active");

            menu.innerHTML = '<i class="fa-solid fa-bars"></i>';

        });

    });

}


/*============ STICKY HEADER ============*/

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (!header) return;

    if (window.scrollY > 80) {

        header.style.background = "rgba(0,0,0,.9)";
        header.style.boxShadow = "0 10px 30px rgba(0,0,0,.4)";

    } else {

        header.style.background = "rgba(0,0,0,.45)";
        header.style.boxShadow = "none";

    }

});


/*============ ACTIVE NAVIGATION ============*/

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const top = section.offsetTop - 150;

        if (window.scrollY >= top) {

            current = section.id;

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});


/*============ LIGHTBOX ============*/

const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");
const closeLightbox = document.getElementById("closeLightbox");

document.querySelectorAll(".project").forEach(project => {

    project.addEventListener("click", () => {

        const img = project.querySelector("img");

        if (!img) return;

        lightbox.style.display = "flex";

        lightboxImg.src = img.src;

        lightboxImg.alt = img.alt;

    });

});

if (closeLightbox) {

    closeLightbox.addEventListener("click", () => {

        lightbox.style.display = "none";

    });

}

if (lightbox) {

    lightbox.addEventListener("click", (e) => {

        if (e.target === lightbox) {

            lightbox.style.display = "none";

        }

    });

}


/*============ SCROLL TO TOP ============*/

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (!topBtn) return;

    if (window.scrollY > 500) {

        topBtn.classList.add("show");

    } else {

        topBtn.classList.remove("show");

    }

});

if (topBtn) {

    topBtn.addEventListener("click", () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

}


/*============ SCROLL REVEAL ============*/

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

".service-card, .project, .box, .about-content, .about-image"

).forEach(item => {

    item.classList.add("fade-up");

    observer.observe(item);

});


console.log("✅ Elevate Media Loaded Successfully");
