/*=========================================================
    UI.JS
    Premium UI Interactions
=========================================================*/

const UI = {

    init() {

        this.initNavigation();
        this.initCards();
        this.initButtons();
        this.initRipples();
        this.initHoverEffects();

    },

    /*=========================================
      BOTTOM NAVIGATION
    =========================================*/

    initNavigation() {

        const items = document.querySelectorAll(".bottom-nav .item");

        items.forEach(item => {

            item.addEventListener("click", () => {

                items.forEach(i => i.classList.remove("active"));

                item.classList.add("active");

            });

        });

    },

    /*=========================================
      CARD INTERACTION
    =========================================*/

    initCards() {

        document.querySelectorAll(".card, .panel, .hero-card")

        .forEach(card => {

            card.addEventListener("mouseenter", () => {

                card.style.transform =
                "translateY(-8px) scale(1.02)";

            });

            card.addEventListener("mouseleave", () => {

                card.style.transform = "";

            });

        });

    },

    /*=========================================
      PREMIUM BUTTONS
    =========================================*/

    initButtons() {

        document.querySelectorAll("button")

        .forEach(button => {

            button.addEventListener("mousedown", () => {

                button.style.transform =
                "scale(.96)";

            });

            button.addEventListener("mouseup", () => {

                button.style.transform = "";

            });

            button.addEventListener("mouseleave", () => {

                button.style.transform = "";

            });

        });

    },

    /*=========================================
      RIPPLE EFFECT
    =========================================*/

    initRipples() {

        document.querySelectorAll(".btn-premium,.action-icon,.fab")

        .forEach(button => {

            button.style.position = "relative";
            button.style.overflow = "hidden";

            button.addEventListener("click", e => {

                const ripple =
                document.createElement("span");

                ripple.className = "ripple";

                const rect =
                button.getBoundingClientRect();

                ripple.style.left =
                (e.clientX - rect.left) + "px";

                ripple.style.top =
                (e.clientY - rect.top) + "px";

                button.appendChild(ripple);

                setTimeout(() => {

                    ripple.remove();

                }, 700);

            });

        });

    },

    /*=========================================
      ICONS
    =========================================*/

    initHoverEffects() {

        document.querySelectorAll(".nav-icon,.action-icon")

        .forEach(icon => {

            icon.addEventListener("mouseenter", () => {

                icon.style.transform = "scale(1.15)";

            });

            icon.addEventListener("mouseleave", () => {

                icon.style.transform = "";

            });

        });

    }

};

document.addEventListener("DOMContentLoaded", () => {

    UI.init();

});


/*=========================================
RIPPLE STYLE
=========================================*/

const rippleStyle = document.createElement("style");

rippleStyle.innerHTML = `

.ripple{

position:absolute;

width:12px;

height:12px;

border-radius:50%;

background:rgba(255,255,255,.45);

transform:translate(-50%,-50%) scale(0);

animation:ripple .7s ease-out;

pointer-events:none;

}

@keyframes ripple{

to{

transform:translate(-50%,-50%) scale(20);

opacity:0;

}

}

`;

document.head.appendChild(rippleStyle);
