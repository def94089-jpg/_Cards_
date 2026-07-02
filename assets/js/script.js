/* ==========================================
   CARDS STORE
   Version : 1.0
   File    : script.js
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    // ==========================
    // Mobile Menu
    // ==========================

    const menuBtn = document.querySelector(".menu-btn");
    const navbar = document.querySelector(".navbar");

    if(menuBtn){

        menuBtn.addEventListener("click", () =>{

            navbar.classList.toggle("active");

        });

    }

    // ==========================
    // Smooth Scroll
    // ==========================

    document.querySelectorAll('a[href^="#"]').forEach(anchor =>{

        anchor.addEventListener("click", function(e){

            e.preventDefault();

            const target = document.querySelector(this.getAttribute("href"));

            if(target){

                target.scrollIntoView({

                    behavior:"smooth"

                });

            }

        });

    });

    // ==========================
    // Button Hover Animation
    // ==========================

    const buttons = document.querySelectorAll(".btn");

    buttons.forEach(btn=>{

        btn.addEventListener("mouseenter",()=>{

            btn.style.transform="scale(1.05)";

        });

        btn.addEventListener("mouseleave",()=>{

            btn.style.transform="scale(1)";

        });

    });

    console.log("Cards Store Loaded Successfully 🚀");

});