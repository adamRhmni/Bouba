const products = [
  {
    name: "Sauvage",
    img: "./imgs/collection/Dior Sauvage.jpg",
    id: "ds-001",
    brand: "Dior",
    color: "#0C2340", // Deep Navy Blue
    gender: "Male",
  },
  {
    name: "Sauvage Elixir",
    img: "./imgs/collection/Sauvage Elixir.jpg",
    id: "se-002",
    brand: "Dior",
    color: "#003366", // Royal Blue
    gender: "Male",
  },
  {
    name: "Bleu de Chanel",
    img: "./imgs/collection/Bleu de Chanel.jpg",
    id: "bdc-003",
    brand: "Chanel",
    color: "#1E3A5F", // Luxurious Midnight Blue
    gender: "Male",
  },
  {
    name: "L'Homme Intense",
    img: "./imgs/collection/L'Homme Intense.jpg",
    id: "lhi-004",
    brand: "Dior",
    color: "#00416A", // Dark Sapphire Blue
    gender: "Male",
  },
  {
    name: "Le Male Elixir",
    img: "./imgs/collection/Le Male Elixir.jpg",
    id: "lme-005",
    brand: "Jean Paul Gaultier",
    color: "#0A3D62", // Deep Atlantic Blue
    gender: "Male",
  },
  {
    name: "Boss The Scent Elixir",
    img: "./imgs/collection/Boss The Scent Elixir.jpg",
    id: "btse-006",
    brand: "Hugo Boss",
    color: "#154360", // Refined Steel Blue
    gender: "Male",
  },
  {
    name: "Ani",
    img: "./imgs/collection/Nishane Ani.jpg",
    id: "na-007",
    brand: "Nishane",
    color: "#01796F", // Deep Teal Green
    gender: "Unisex",
  },
  {
    name: "Eros",
    img: "./imgs/collection/Eros.jpg",
    id: "er-008",
    brand: "Versace",
    color: "#005F56", // Elegant Dark Green
    gender: "Male",
  },
  {
    name: "La Nuit de L'Homme",
    img: "./imgs/collection/La Nuit de L'Homme.jpg",
    id: "lnlh-009",
    brand: "Yves Saint Laurent",
    color: "#0F3057", // Sophisticated Midnight Blue
    gender: "Male",
  },
  {
    name: "Afternoon Swim",
    img: "./imgs/collection/Louis Vuitton Afternoon Swim.jpg",
    id: "lvas-010",
    brand: "Louis Vuitton",
    color: "#0047AB", // Royal Azure Blue
    gender: "Unisex",
  },
  {
    name: "Invictus",
    img: "./imgs/collection/Invictus.jpg",
    id: "inv-021",
    brand: "Paco Rabanne",
    color: "#008ECC", // Lush Caribbean Blue
    gender: "Male",
  },
  {
    name: "Booster",
    img: "./imgs/collection/Lacoste Booster.jpg",
    id: "lb-022",
    brand: "Lacoste",
    color: "#006A4E", // Classic Lacoste Green
    gender: "Male",
  },
  {
    name: "Wanted",
    img: "./imgs/collection/Azzaro Wanted.jpg",
    id: "aw-023",
    brand: "Azzaro",
    color: "#1A5276", // Rich Deep Blue
    gender: "Male",
  },
  {
    name: "Aventus",
    img: "./imgs/collection/Creed Aventus.jpg",
    id: "ca-024",
    brand: "Creed",
    color: "#1B4F72", // Deep Blue Smoke
    gender: "Male",
  },
  {
    name: "Lacoste Noir",
    img: "./imgs/collection/Lacoste Noir.jpg",
    id: "ln-025",
    brand: "Lacoste",
    color: "#005F30", // Dark Forest Green
    gender: "Male",
  },
  {
    name: "Lacoste Blanc",
    img: "./imgs/collection/Lacoste Blanc.jpg",
    id: "lb-026",
    brand: "Lacoste",
    color: "#008080", // Teal Green
    gender: "Male",
  },
  {
    name: "Déclaration",
    img: "./imgs/collection/Cartier Déclaration.jpg",
    id: "cd-027",
    brand: "Cartier",
    color: "#002366", // Deep Royal Blue
    gender: "Male",
  },
  {
    name: "Legend",
    img: "./imgs/collection/Montblanc Legend.jpg",
    id: "ml-028",
    brand: "Montblanc",
    color: "#0B3D91", // Elegant Dark Blue
    gender: "Male",
  },
  {
    name: "Coco Vanille",
    img: "./imgs/collection/Coco Vanille.jpg",
    id: "cv-029",
    brand: "Mancera",
    color: "#005F56", // Elegant Dark Green
    gender: "Female",
  },
  {
    name: "Allure Homme Sport",
    img: "./imgs/collection/Allure Homme Sport.jpg",
    id: "ahs-030",
    brand: "Chanel",
    color: "#003B73", // Deep Sapphire Blue
    gender: "Male",
  },
  {
    name: "Boss Unlimited",
    img: "./imgs/collection/Boss Unlimited.jpg",
    id: "bu-031",
    brand: "Hugo Boss",
    color: "#004225", // Prestige Green
    gender: "Male",
  },
  {
    name: "Invictus Victory Elixir",
    img: "./imgs/collection/Invictus Victory Elixir.jpg",
    id: "ive-032",
    brand: "Paco Rabanne",
    color: "#003152", // Deep Ocean Blue
    gender: "Male",
  },
  {
    name: "Whiskey Silver",
    img: "./imgs/collection/Whiskey Silver.jpg",
    id: "ws-033",
    brand: "Unknown",
    color: "#2E86C1", // Soft Royal Blue
    gender: "Male",
  },
  {
    name: "Gentleman Society",
    img: "./imgs/collection/Gentleman Society.jpg",
    id: "gs-034",
    brand: "Givenchy",
    color: "#00416A", // Classic French Blue
    gender: "Male",
  },
  {
    name: "Kirke",
    img: "./imgs/collection/Kirke Tiziana Terenzi.jpg",
    id: "ktt-035",
    brand: "Tiziana Terenzi",
    color: "#00843D", // Bold Emerald Green
    gender: "Unisex",
  },
  {
    name: "Acqua di Giò",
    img: "./imgs/collection/Acqua di Giò.jpg",
    id: "adg-036",
    brand: "Giorgio Armani",
    color: "#1F618D", // Marine Blue
    gender: "Male",
  },
  {
    name: "Le Beau Paradise Garden",
    img: "./imgs/collection/Le Beau Paradise Garden.jpg",
    id: "lbpg-037",
    brand: "Jean Paul Gaultier",
    color: "#014421", // Rich Emerald Green
    gender: "Male",
  },
  {
    name: "Valentino Uomo Born In Roma",
    img: "./imgs/collection/Valentino.jpg",
    id: "val-038",
    brand: "Valentino",
    color: "#0E4D92", // Royal Blue Depth
    gender: "Male",
  },
  {
    name: "Blue Seduction",
    img: "./imgs/collection/Blue Seduction.jpg",
    id: "bs-039",
    brand: "Antonio Banderas",
    color: "#004C99", // Luxury Blue
    gender: "Male",
  },
  {
    name: "MYSLF",
    img: "./imgs/collection/YSL MYSLF.jpg",
    id: "ym-040",
    brand: "Yves Saint Laurent",
    color: "#0B3D91", // Elegant Dark Blue
    gender: "Unisex",
  },
  {
    name: "أمواج البحر",
    img: "./imgs/collection/أمواج البحر.jpg",
    id: "aab-041",
    brand: "Unknown",
    color: "#006994", // Persian Blue
    gender: "Unisex",
  },
];
let ID;
let cont = document.querySelector(".productview-cont");
ID = JSON.parse(localStorage.getItem("productView"));

let HTMLview = ``;




function view(x){
    products.forEach((product) => {
        if (ID === product.id) {
            HTMLview = `
            <div class="productview">
              <div class="productview-img">
              <img src="${product.img}" alt="" />
              </div>
              <div class="productview-texts">
              <div class="productview-name product-name">
                <p>${product.name}</p>
              </div>
          
              <div class="productview-brand product-brand"><p>${product.brand}</p></div>
          
              <div class="productview-bottle-size">
                <h2>Size</h2>
                <div class="bottle-size">
                <label><input class="radiobutton" type="radio" name="size" value="10ML" />10ML</label>
                <label><input class="radiobutton" type="radio" name="size" value="20ML" />20ML</label>
                <label><input class="radiobutton" type="radio" name="size" value="30ML" />30ML</label>
                <label><input class="radiobutton" type="radio" name="size" value="50ML" />50ML</label>
                </div>
              </div>
              <div class="GENDER">
                <div class="GENDER-title">
                <p>GENDER</p>
                </div>
                <div class="GENDER-wht">
                <p>${product.gender}</p>
                </div>
              </div>
          
              <div class="productview-price">
                <h1 class="ourprice">${localStorage.getItem("prix") ? localStorage.getItem("prix") : '400'}</h1><span>DA</span>
              </div>
              <div class="productview-buyButton">
                <a href="buy.html">
                <div class="buyButton" data-tooltip="BUY NOW" data-id="${product.id}">
                <div class="button-wrapper">
                <div class="text">BUY</div>
                <span class="icon">
                <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-cart2"
                viewBox="0 0 16 16"
                >
                <path
                d="M0 2.5A.5.5 0 0 1 .5.5H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"
                ></path>
                </svg>
                </span>
                </div>
                </div>
                </a>
              </div>
              </div>
            </div>
              `;
        }
      });

cont.innerHTML = HTMLview;


}
view()


const Cartx = [];
const buyBotton = document.querySelectorAll(".buyButton");

buyBotton.forEach((button) => {
  button.addEventListener("click", () => {
    if (Cartx.length === 0) {
      Cartx.push({
        id: button.dataset.id,
        quntity: 1,
      });
    } else {
      for (let i = 0; i < Cartx.length; i++) {
        if (Cartx[i].id === button.dataset.id) {
          Cartx[i].quntity += 1;
          break;
        } else if (i == Cartx.length - 1) {
          Cartx.push({
            id: button.dataset.id,
            quntity: 1,
          });
          break;
        }
      }
    }

    localStorage.setItem("Cartx", JSON.stringify(Cartx));
  });
});
let price;
let buttons =  document.querySelectorAll(".radiobutton");
let PriceElement = document.querySelector(".ourprice");
buttons.forEach(button =>{
    button.addEventListener("click", () => {
      switch(button.defaultValue) {
        case '10ML':
          price = 250;
          break;
        case '20ML':
          price = 400;
          break;
        case '30ML':
          price = 600;
          break;
        case '50ML':
          price = 800;
          break;
      }
      localStorage.removeItem("prix");
      localStorage.setItem("prix",price);
      PriceElement.innerHTML = price;
      localStorage.setItem("checked",button.defaultValue);

    })
    if(localStorage.getItem("checked") === button.defaultValue){
      button.defaultChecked = true;
    }

})



