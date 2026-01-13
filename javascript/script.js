/* =======================
   HAMBURGER MENU
   ======================= */
const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');

if (menuBtn && navLinks) {
  menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });
}


/* =======================
   RECIPE RENDERING
   ======================= */

let section = document.querySelector("#recipegrid");


let recipes = [{
    src:"images/sausage-pasta.jpg", title:"Vegan Sausage Pasta", time:"45mins", href:"recipe-pasta.html",category:"Dinner",alt:"Vegan Sausage Pasta"
},{
    src:"images/tofu-stir-fry.jpg", title:"Tofu Stir Fry", time:"15mins", href:"recipe-tofu.html", category:"Breakfast", alt:"Tofu Stir Fry"
},{
    src:"images/poha.jpg", title:"Poha", time:"10mins", href:"recipe-poha.html", category:"Lunch",alt:"Poha"
},{
    src:"images/soy-milk.jpg", title:"Soy Milkshake", time:"5mins", href:"#", category:"Breakfast", alt:"soy milkshake"
},{
    src:"images/veg-upma.jpg", title:"Veg Upma", time:"45mins", href:"#",category:"Dinner",alt:"Veg Upma"
},{
    src:"images/aloo-gobhi.jpg", title:"Aloo Gobhi", time:"45mins", href:"#",category:"Dinner",alt:"Aloo Gobhi"
}];

if(section){
    
for(let i = 0; i < recipes.length; i++){
  let article = document.createElement("article");
  let img = document.createElement("img");
  let div = document.createElement("div");
  let h3 = document.createElement("h3");
  let p = document.createElement("p");
  let a = document.createElement("a");
  article.classList.add("recipe-card");
  //DATASET PROPERTY FOR QUERYSTRING SEARCH
  article.dataset.category = recipes[i].category.toLowerCase();
  img.classList.add("card-img");
  div.classList.add("card-content");
  h3.classList.add("card-title");
  p.classList.add("card-meta");
  a.classList.add("card-btn");
  img.src = recipes[i].src;
  img.alt = recipes[i].alt;
  h3.textContent = recipes[i].title;
  p.textContent = recipes[i].time + " • " + recipes[i].category;
  a.href = recipes[i].href;
  a.textContent = "View Recipe";

  article.appendChild(img);
  article.appendChild(div);
  div.appendChild(h3);
  div.appendChild(p);
  div.appendChild(a);
  section.appendChild(article);
}
}

/* =======================
   SEARCH & FILTER LOGIC
   ======================= */

let searchbtn = document.querySelector("#search-btn");
let searchinput = document.querySelector("#search-input");

if(searchbtn){
    searchbtn.addEventListener("click",()=>{
    let recipecards = document.querySelectorAll(".recipe-card");
    let searchinputL = searchinput.value.toLowerCase();
    for(let i = 0; i < recipecards.length; i++){
        let title = recipecards[i].querySelector(".card-title").textContent.toLowerCase();
        if(!title.includes(searchinputL)){
            recipecards[i].classList.add("hidden");
        }else{
            recipecards[i].classList.remove("hidden");
        }
    }
    searchinput.value = "";
});

}

/* ============================
   HOME CATEGORY BUTTON SEARCH
   ============================ */
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const categoryString = urlParams.get('category');

if(categoryString){
    let recipecards = document.querySelectorAll(".recipe-card");
    for(let i = 0; i < recipecards.length; i++){
        let cardCategory = recipecards[i].dataset.category;
        if(cardCategory !== categoryString.toLowerCase()){
            recipecards[i].classList.add("hidden");
        }else{
            recipecards[i].classList.remove("hidden");
        }
    }
}
