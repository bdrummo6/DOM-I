const siteContent = {
    "nav": {
        "nav-item-1": "Services",
        "nav-item-2": "Product",
        "nav-item-3": "Vision",
        "nav-item-4": "Features",
        "nav-item-5": "About",
        "nav-item-6": "Contact",
        "img-src": "img/logo.png"
    },
    "cta": {
        "h1": "DOM Is Awesome",
        "button": "Get Started",
        "img-src": "img/header-img.png"
    },
    "main-content": {
        "features-h4":"Features",
        "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in" +
            " interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
        "about-h4":"About",
        "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm" +
            " nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
        "middle-img-src": "img/mid-page-accent.jpg",
        "services-h4":"Services",
        "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in" +
            " interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
        "product-h4":"Product",
        "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm" +
            " nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
        "vision-h4":"Vision",
        "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm" +
            " nisi. Suspendisse eu ornare nisl. Nullam" +  " convallis augue justo, at imperdiet metus scelerisque quis.",
    },
    "contact": {
        "contact-h4" : "Contact",
        "address" : "123 Way 456 Street Somewhere, USA",
        "phone" : "1 (888) 888-8888",
        "email" : "sales@greatidea.io",
    },
    "footer": {
        "copyright" : "Copyright Great Idea! 2018"
    },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);


// Nav-bar
const navBar = document.querySelectorAll('a');
navBar.forEach((element, num) => {
    element.textContent = siteContent['nav'][`nav-item-${num + 1}`];
    element.style.color = 'green';
});

// Prepend new nav-bar item
const navItem1 = document.createElement('a');
navItem1.textContent = 'Hello';
navItem1.style.color = 'green';

const nav1 = document.querySelector('nav');
nav1.prepend(navItem1);

// Append new nav-bar item
const navItem8 = document.createElement('a');
navItem8.textContent = 'Bye-Bye';
navItem8.style.color = 'green';

const nav2 = document.querySelector('nav');
nav2.appendChild(navItem8);


// h1 'DOM IS AWESOME'
const dom = document.querySelector('.cta-text h1');
dom.textContent = siteContent.cta.h1;

// 'Get Started' button
const button = document.querySelector('.cta-text button');
button.textContent = siteContent.cta.button;

// Big circular main image next to the h1
const topImg = document.querySelector('#cta-img');
topImg.src = siteContent.cta["img-src"];

// The h4 headers for each set of text content
const mainContent = document.querySelectorAll('.text-content h4');
mainContent[0].textContent = siteContent["main-content"]["features-h4"];
mainContent[1].textContent = siteContent["main-content"]["about-h4"];
mainContent[2].textContent = siteContent["main-content"]["services-h4"];
mainContent[3].textContent = siteContent["main-content"]["product-h4"];
mainContent[4].textContent = siteContent["main-content"]["vision-h4"];

// The text content that flows below its corresponding header
const para = document.querySelectorAll('.text-content p');
para[0].textContent = siteContent["main-content"]["features-content"];
para[1].textContent = siteContent["main-content"]["about-content"];
para[2].textContent = siteContent["main-content"]["services-content"];
para[3].textContent = siteContent["main-content"]["product-content"];
para[4].textContent = siteContent["main-content"]["vision-content"]

// The image that intersects the first two data sections and the last three
const middleImg = document.querySelector('#middle-img');
middleImg.src = siteContent["main-content"]["middle-img-src"];

// The h4 for the contact section at the bottom of the page
const contactH4 = document.querySelector(".contact h4");
contactH4.textContent = siteContent["contact"]["contact-h4"];

// The section that includes that includes all of the contact information
const address = document.querySelectorAll('.contact p');
address[0].textContent = siteContent["contact"]["address"];
address[1].textContent = siteContent["contact"]["phone"];
address[2].textContent = siteContent["contact"]["email"];

// The section for the copyright info, which is in the footer
const copyright = document.querySelector("footer");
copyright.textContent = siteContent["footer"]["copyright"];

// Stretch styling
/*document.querySelector('nav').style.border = "2px solid #20B2AA";
document.querySelector('nav').style.padding = "5px";

document.querySelector('h1').style.color = "#20B2AA";
document.querySelector('h1').style.fontSize = "3.0rem";

const h4s = document.querySelectorAll('h4');
h4s.forEach((element, num) => {
    element.style.fontSize = "1.3rem";
    element.style.color = '#20B2AA';
});*/
