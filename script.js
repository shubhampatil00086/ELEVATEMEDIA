// ===========================
// MOBILE MENU
// ===========================

const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector("nav");

menuBtn.addEventListener("click", () => {

    nav.classList.toggle("active");

    if(nav.classList.contains("active")){

        menuBtn.innerHTML='<i class="fa-solid fa-xmark"></i>';

    }else{

        menuBtn.innerHTML='<i class="fa-solid fa-bars"></i>';

    }

});

// ===========================
// STICKY HEADER
// ===========================

const header = document.querySelector("header");

window.addEventListener("scroll",()=>{

    if(window.scrollY>50){

        header.style.background="rgba(0,0,0,.95)";
        header.style.boxShadow="0 5px 20px rgba(0,0,0,.4)";

    }else{

        header.style.background="rgba(0,0,0,.75)";
        header.style.boxShadow="none";

    }

});

// ===========================
// SMOOTH SCROLL
// ===========================

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

    anchor.addEventListener("click",function(e){

        e.preventDefault();

        const target=document.querySelector(this.getAttribute("href"));

        if(target){

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});

// ===========================
// ACTIVE NAV LINK
// ===========================

const sections=document.querySelectorAll("section");
const navLinks=document.querySelectorAll("nav a");

window.addEventListener("scroll",()=>{

    let current="";

    sections.forEach(section=>{

        const sectionTop=section.offsetTop-150;

        if(pageYOffset>=sectionTop){

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

// ===========================
// SCROLL REVEAL
// ===========================

const revealElements=document.querySelectorAll(
".service-card,.portfolio-item,.about-content,.about-image,form"
);

const reveal=()=>{

    revealElements.forEach(el=>{

        const windowHeight=window.innerHeight;

        const revealTop=el.getBoundingClientRect().top;

        const revealPoint=120;

        if(revealTop<windowHeight-revealPoint){

            el.style.opacity="1";
            el.style.transform="translateY(0)";

        }

    });

};

revealElements.forEach(el=>{

    el.style.opacity="0";
    el.style.transform="translateY(60px)";
    el.style.transition="all .8s ease";

});

window.addEventListener("scroll",reveal);

reveal();

// ===========================
// PORTFOLIO IMAGE CLICK
// ===========================

document.querySelectorAll(".portfolio-item img").forEach(img=>{

    img.addEventListener("click",()=>{

        window.open(img.src,"_blank");

    });

});

// ===========================
// CONTACT FORM
// ===========================

const form=document.querySelector("form");

if(form){

form.addEventListener("submit",(e)=>{

    e.preventDefault();

    alert("Thank you! Your message has been received.");

    form.reset();

});

}

// ===========================
// PRELOADER
// ===========================

window.addEventListener("load",()=>{

    document.body.style.opacity="1";

});

document.body.style.opacity="0";
document.body.style.transition=".5s";

// ===========================
// CONSOLE
// ===========================

console.log("Elevate Media Website Loaded Successfully");
