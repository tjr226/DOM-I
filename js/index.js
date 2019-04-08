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
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
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
logo.setAttribute('src', siteContent["nav"]["img-src"])

let ctaImg = document.getElementById("cta-img");
ctaImg.setAttribute('src', siteContent["cta"]["img-src"])

let middleImg = document.getElementById("middle-img");
middleImg.setAttribute('src', siteContent["main-content"]["middle-img-src"])

let navItems = Array.from(document.getElementsByTagName("a"));
navItems.forEach(item => item.style.color = "green");

navItems[0].textContent = (siteContent["nav"]["nav-item-1"])
navItems[1].textContent = (siteContent["nav"]["nav-item-2"])
navItems[2].textContent = (siteContent["nav"]["nav-item-3"])
navItems[3].textContent = (siteContent["nav"]["nav-item-4"])
navItems[4].textContent = (siteContent["nav"]["nav-item-5"])
navItems[5].textContent = (siteContent["nav"]["nav-item-6"])

let navElement = document.querySelector('nav');
navElement.prepend('Secret blog');
navElement.append('Real blog');


let ctaHeaderText = document.querySelector('.cta-text h1');
ctaHeaderText.textContent = (siteContent["cta"]["h1"]);

let ctaButtonText = document.querySelector('.cta-text button');
ctaButtonText.textContent = (siteContent["cta"]["button"]);

let featuresH4 = document.querySelector('.main-content .top-content:nth-child(1) h4');
featuresH4.textContent = (siteContent["main-content"]["features-h4"]);

let featuresP = document.querySelector('.main-content .top-content:nth-child(1) p');
featuresP.textContent = (siteContent["main-content"]["features-content"]);

let aboutH4 = document.querySelector('.main-content .top-content .text-content:nth-child(2) h4');
aboutH4.textContent = (siteContent["main-content"]["about-h4"]);

let aboutP = document.querySelector('.main-content .top-content .text-content:nth-child(2) p');
aboutP.textContent = (siteContent["main-content"]["about-content"])


let servicesH4 = document.querySelector('.main-content .bottom-content .text-content:first-child h4');
servicesH4.textContent = (siteContent["main-content"]["services-h4"]);

let servicesP = document.querySelector('.main-content .bottom-content .text-content:first-child p');
servicesP.textContent = (siteContent["main-content"]["services-content"]);

let productH4 = document.querySelector('.main-content .bottom-content .text-content:nth-child(2) h4');
productH4.textContent = (siteContent["main-content"]["product-h4"]);

let productP = document.querySelector('.main-content .bottom-content .text-content:nth-child(2) p');
productP.textContent = (siteContent["main-content"]["product-content"])

let visionH4 = document.querySelector('.main-content .bottom-content .text-content:nth-child(3) h4');
visionH4.textContent = (siteContent["main-content"]["vision-h4"]);

let visionP = document.querySelector('.main-content .bottom-content .text-content:nth-child(3) p');
visionP.textContent = (siteContent["main-content"]["vision-content"]);


// "contact": {
//   "contact-h4" : "Contact",
//   "address" : "123 Way 456 Street Somewhere, USA",
//   "phone" : "1 (888) 888-8888",
//   "email" : "sales@greatidea.io",
// },

// let contactH4 = document.querySelector('.container .contact h4');
// contactH4.textContent = (siteContent["contact"]["contact-h4"]);

// let contactAddress = document.querySelector('.container .contact:nth-child(2) p')
// contactAddress = (siteContent["contact"]["address"]);

let contactTitle = document.querySelector(".contact h4");
contactTitle.textContent = (siteContent["contact"]["contact-h4"]);

let contactinfo1 = document.querySelectorAll(".contact p")[0];
contactinfo1.textContent = (siteContent["contact"]["address"]);

let contactinfo2 = document.querySelectorAll(".contact p")[1];
contactinfo2.textContent = (siteContent["contact"]["phone"]);

let contactinfo3 = document.querySelectorAll(".contact p")[2];
contactinfo3.textContent = (siteContent["contact"]["email"]);

let footer = document.querySelector('footer');
footer.textContent = (siteContent["footer"]["copyright"]);