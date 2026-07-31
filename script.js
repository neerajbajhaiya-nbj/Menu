/* ===========================
   APNA SWEET - SCRIPT.JS
=========================== */

const menuContainer = document.getElementById("menuContainer");
const searchInput = document.getElementById("search");

/* Create Food Card */

function createCard(food) {

    return `
    
    <div class="food-card">

        <div class="food-image">

            ${food.bestseller
                ? `<span class="best-seller">🔥 Best Seller</span>`
                : ""
            }

            <img src="${food.image}" alt="${food.name}">

        </div>

        <div class="food-info">

            <h3>${food.name}</h3>

            <p>${food.description}</p>

            <div class="price-row">

                <span class="price">₹${food.price}</span>

                <span class="veg">🟢 Veg</span>

            </div>

        </div>

    </div>

    `;

}

/* Load Menu */

function loadMenu(items = menu){

    menuContainer.innerHTML = "";

    if(items.length === 0){

        menuContainer.innerHTML = `
        
        <h2 style="text-align:center;color:gold;padding:50px;">
        😔 No Food Found
        </h2>

        `;

        return;

    }

    items.forEach(food=>{

        menuContainer.innerHTML += createCard(food);

    });

}

/* First Time Load */

loadMenu();

/* Search */

searchInput.addEventListener("input",()=>{

    const value = searchInput.value.toLowerCase();

    const filtered = menu.filter(food=>{

        return (

            food.name.toLowerCase().includes(value) ||

            food.category.toLowerCase().includes(value)

        );

    });

    loadMenu(filtered);

});
/* ===========================
   CATEGORY FILTER
=========================== */

const categoryButtons =
document.querySelectorAll(".categories button");

categoryButtons.forEach(button => {

    button.addEventListener("click", () => {

        categoryButtons.forEach(btn =>
            btn.classList.remove("active")
        );

        button.classList.add("active");

        const category =
        button.dataset.category;

        if(category === "All"){

            loadMenu(menu);

            return;

        }

        const filtered =
        menu.filter(food =>
            food.category === category
        );

        loadMenu(filtered);

    });

});
/* ===========================
   VIEW MENU BUTTON
=========================== */

const menuBtn = document.getElementById("menuBtn");
const menuSection = document.getElementById("menuSection");

menuBtn.addEventListener("click", () => {

    menuSection.scrollIntoView({

        behavior: "smooth"

    });

});
/* ===========================
   RECOMMENDED SECTION
=========================== */

const recommendGrid =
document.getElementById("recommendGrid");

function loadRecommended(){

    recommendGrid.innerHTML = "";

    const recommended =
    menu.filter(food => food.bestseller);

    recommended.slice(0,6).forEach(food=>{

        recommendGrid.innerHTML += createCard(food);

    });

}

loadRecommended();
/* ===========================
   BOTTOM NAVIGATION
=========================== */

const navButtons =
document.querySelectorAll(".nav-btn");

navButtons.forEach(btn=>{

btn.addEventListener("click",()=>{

navButtons.forEach(b=>
b.classList.remove("active")
);

btn.classList.add("active");

const target =
document.getElementById(
btn.dataset.target
);

if(target){

target.scrollIntoView({

behavior:"smooth"

});

}

});

});
/* ===========================
   IMAGE POPUP
=========================== */

const popup =
document.getElementById("imagePopup");

const popupImage =
document.getElementById("popupImage");

const closePopup =
document.getElementById("closePopup");

document.addEventListener("click",(e)=>{

    if(e.target.tagName==="IMG" &&
       e.target.closest(".food-card")){

        popup.style.display="flex";

        popupImage.src=e.target.src;

    }

});

closePopup.onclick=()=>{

    popup.style.display="none";

};

popup.onclick=(e)=>{

    if(e.target===popup){

        popup.style.display="none";

    }

};
document.querySelector(".special-btn")
?.addEventListener("click",()=>{

document
.getElementById("menuSection")
.scrollIntoView({

behavior:"smooth"

});

});
