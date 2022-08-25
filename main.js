// const homeSwiper = new Swiper('.swiper', {
//     // Optional parameters
//     spaceBetween: 30,
//     direction: 'horizontal',
//     loop: true,

//     // If we need pagination
//     pagination: {
//         el: '.swiper-pagination',
//         clickable: true,
//     },
// });



const swiper = new Swiper('.swiper', {
    // Optional parameters

    // direction: 'horizontal',
    spaceBetween: 30,
    loop: 'true',

    // If we need pagination
    pagination: {
        el: ".swiper-pagination",
    },

    // // Navigation arrows
    // navigation: {
    //     nextEl: '.swiper-button-next',
    //     prevEl: '.swiper-button-prev',
    // },

    // // And if we need scrollbar
    // scrollbar: {
    //     el: '.swiper-scrollbar',
    // },
})

// const slide = () => {
//     const swiper = document.querySelector('.swiper').swiper;
//     swiper.slideNext();
// }

function scrollHeader() {
    const header = document.getElementById('header')
    if (this.scrollY >= 50) header.classList.add('scroll-header');
    else header.classList.remove('scroll-header');
}
window.addEventListener('scroll', scrollHeader);

const newSwiper = new Swiper(".new-swiper", {
    // Optional parameters

    // direction: 'horizontal',
    spaceBetween: 16,
    centeredSlides: true,
    slidesPerView: "auto",
    loop: 'true',

    // If we need pagination
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});


const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close');

if (navToggle) {
    navToggle.addEventListener("click", () => {
        navMenu.classList.add('show-menu');
    });
}
if (navClose) {
    navClose.addEventListener("click", () => {
        navMenu.classList.remove('show-menu');
    });
}

const cart = document.getElementById('cart'),
    cartShop = document.getElementById('cart-shop'),
    cartClose = document.getElementById('cart-close');

if (cartShop) {
    cartShop.addEventListener("click", () => {
        cart.classList.add('show-cart');
    });
}

if (cartClose) {
    cartClose.addEventListener("click", () => {
        cart.classList.remove('show-cart');
    });
}

const login = document.getElementById('login'),
    loginButton = document.getElementById('login-button'),
    loginClose = document.getElementById('login-close');

if (loginButton) {
    loginButton.addEventListener("click", () => {
        login.classList.add('show-login');
    });
}

if (loginClose) {
    loginClose.addEventListener("click", () => {
        login.classList.remove('show-login');
    });
}


function scrollUp() {
    const scrollUp = document.getElementById('scroll-up');

    if (this.scrollY >= 350) scrollUp.classList.add('show-scroll');
    else scrollUp.classList.remove('show-scroll');
}
window.addEventListener('scroll', scrollUp);

const accordionItem = document.querySelectorAll('.questions_item');

accordionItem.forEach((item) => {
    const accordionHeader = item.querySelector('.questions_header');

    accordionHeader.addEventListener("click", () => {
        const openItem = document.querySelector('.accordion-open');

        toggleItem(item)

        if (openItem && openItem !== item) {
            toggleItem(openItem);
        }
    });
});

const toggleItem = (item) => {
    const accordionContent = item.querySelector('.questions_content');

    if (item.classList.contains('accordion-open')) {
        accordionContent.removeAttribute('style');
        item.classList.remove('accordion-open');
    }
    else {
        accordionContent.style.height = accordionContent.scrollHeight + 'px';
        item.classList.add('accordion-open');
    }
};


const styleSwitcherToggle = document.querySelector('.style_switcher-toggler');
styleSwitcherToggle.addEventListener("click", () => {
    document.querySelector(".style_switcher").classList.toggle('open');
});

window.addEventListener("scroll", () => {
    if (document.querySelector(".style_switcher").classList.contains("open")) {
        document.querySelector(".style_switcher").classList.remove("open");
    }
});




function themeColors() {
    const colorStyle = document.querySelector(".js-color-style"),
        themeColorsContainer = document.querySelector(".js-theme-colors");

    const colors = {
        "color-1": "hsl(0, 88%, 61%)",
        "color-2": "hsl(260, 88%, 61%)",
        "color-3": "hsl(336, 88%, 61%)",
        "color-4": "hsl(284, 88%, 61%)",
        "color-5": "hsl(375, 88%, 61%)",
    };

    let oldColor = "color-1";
    themeColorsContainer.addEventListener("click", ({ target }) => {
        if (target.classList.contains("js-theme-color-item")) {
            setColors(oldColor, target.getAttribute("data-js-theme-color"));
            oldColor = target.getAttribute("data-js-theme-color");
        }
    });

    function setColors(oldColor, newColor) {
        document.getElementById("buy-button").style.backgroundColor = colors[newColor];

        document.querySelector(`[data-js-theme-color=${oldColor}]`).classList.remove("active");
        document.querySelector(`[data-js-theme-color=${newColor}]`).classList.add("active");

        // let path = colorStyle.getAttribute("href").split("/");
        // path = path.slice(0, path.length - 1);
        // colorStyle.setAttribute("href", path.join("/") + "/" + localStorage.getItem("color") + ".css")
        // console.log(path);
    }

    if (document.querySelector(".js-theme-color-item.active")) {
        document.querySelector(".js-theme-color-item.active").classList.remove("active");
    }
    document.querySelector("[data-js-theme-color=" + localStorage.getItem("color") + "]").classList.add("active");
};

themeColors();