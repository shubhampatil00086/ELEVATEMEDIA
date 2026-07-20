/*=========================================
ELEVATE MEDIA
SCRIPT.JS - PART 1
=========================================*/


/*==============================
PRELOADER
==============================*/

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    if(loader){

        loader.style.opacity = "0";

        setTimeout(() => {

            loader.style.display = "none";

        },500);

    }

});


/*==============================
MOBILE MENU
==============================*/

const menu = document.querySelector(".menu");

const nav = document.querySelector("nav");

menu.addEventListener("click",()=>{

    nav.classList.toggle("active");

    if(nav.classList.contains("active")){

        menu.innerHTML = '<i class="fa-solid fa-xmark"></i>';

    }

    else{

        menu.innerHTML = '<i class="fa-solid fa-bars"></i>';

    }

});


document.querySelectorAll("nav a").forEach(link=>{

    link.addEventListener("click",()=>{

        nav.classList.remove("active");

        menu.innerHTML = '<i class="fa-solid fa-bars"></i>';

    });

});


/*==============================
STICKY HEADER
==============================*/

const header = document.querySelector("header");

window.addEventListener("scroll",()=>{

    if(window.scrollY>80){

        header.style.background="rgba(0,0,0,.92)";

        header.style.boxShadow="0 12px 25px rgba(0,0,0,.35)";

    }

    else{

        header.style.background="rgba(0,0,0,.45)";

        header.style.boxShadow="none";

    }

});


/*==============================
ACTIVE NAVIGATION
==============================*/

const sections=document.querySelectorAll("section");

const navLinks=document.querySelectorAll("nav a");

window.addEventListener("scroll",()=>{

    let current="";

    sections.forEach(section=>{

        const sectionTop=section.offsetTop-150;

        const sectionHeight=section.clientHeight;

        if(window.scrollY>=sectionTop){

            current=section.getAttribute("id");

        }

    });

    navLinks.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href")==="#"+current){

            link.classList.add("active");

        }

    });

});


/*==============================
SCROLL REVEAL
==============================*/

const observer=new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:.15
});


document.querySelectorAll(

".service-card,.project,.box,.about-content,.about-image"

).forEach(item=>{

    item.classList.add("fade-up");

    observer.observe(item);

});


console.log("Elevate Media Loaded Successfully");
/*=========================================
SCRIPT.JS - PART 2
=========================================*/


/*==============================
SMOOTH SCROLL
==============================*/

document.querySelectorAll('nav a').forEach(anchor => {

    anchor.addEventListener("click", function(e) {

        const target = document.querySelector(this.getAttribute("href"));

        if(target){

            e.preventDefault();

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});


/*==============================
PORTFOLIO LIGHTBOX
==============================*/

const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");
const closeLightbox = document.getElementById("closeLightbox");

document.querySelectorAll(".project img").forEach(image => {

    image.addEventListener("click", () => {

        lightbox.style.display = "flex";

        lightboxImg.src = image.src;

    });

});

if(closeLightbox){

    closeLightbox.addEventListener("click", () => {

        lightbox.style.display = "none";

    });

}

if(lightbox){

    lightbox.addEventListener("click", function(e){

        if(e.target===lightbox){

            lightbox.style.display="none";

        }

    });

}


/*==============================
WHATSAPP CONTACT FORM
==============================*/

const contactForm = document.querySelector(".contact form");

if(contactForm){

    contactForm.addEventListener("submit", function(e){

        e.preventDefault();

        const name =
        contactForm.querySelector('input[type="text"]').value;

        const email =
        contactForm.querySelector('input[type="email"]').value;

        const message =
        contactForm.querySelector("textarea").value;

        const whatsappMessage =
`📩 *New Website Inquiry*

👤 Name: ${name}

📧 Email: ${email}

💬 Message:
${message}`;

        const phone = "918669241982";

        const url =
`https://wa.me/${phone}?text=${encodeURIComponent(whatsappMessage)}`;

        window.open(url,"_blank");

        alert("Redirecting to WhatsApp...");

        contactForm.reset();

    });

}


/*==============================
SCROLL TO TOP
==============================*/

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll",()=>{

    if(window.scrollY>500){

        topBtn.classList.add("show");

    }

    else{

        topBtn.classList.remove("show");

    }

});

if(topBtn){

    topBtn.addEventListener("click",()=>{

        window.scrollTo({

            top:0,

            behavior:"smooth"

        });

    });

}


/*==============================
END
==============================*/

console.log("🚀 Elevate Media Website Ready");
