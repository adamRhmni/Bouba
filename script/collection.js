const products = [
  {
    name: "Dior Sauvage",
    img: "./imgs/collection/Dior Sauvage.jpg",
    id: "ds-001",
    brand: "Dior",
  },
  {
    name: "Sauvage Elixir",
    img: "./imgs/collection/Sauvage Elixir.jpg",
    id: "se-002",
    brand: "Dior",
  },
  {
    name: "Bleu de Chanel",
    img: "./imgs/collection/Bleu de Chanel.jpg",
    id: "bdc-003",
    brand: "Chanel",
  },
  {
    name: "L'Homme Intense",
    img: "./imgs/collection/L'Homme Intense.jpg",
    id: "lhi-004",
    brand: "Yves Saint Laurent",
  },
  {
    name: "Le Male Elixir",
    img: "./imgs/collection/Le Male Elixir.jpg",
    id: "lme-005",
    brand: "Jean Paul Gaultier",
  },
  {
    name: "Boss The Scent Elixir",
    img: "./imgs/collection/Boss The Scent Elixir.jpg",
    id: "btse-006",
    brand: "Hugo Boss",
  },
  {
    name: "Nishane Ani",
    img: "./imgs/collection/Nishane Ani.jpg",
    id: "na-007",
    brand: "Nishane",
  },
  {
    name: "Eros",
    img: "./imgs/collection/Eros.jpg",
    id: "er-008",
    brand: "Versace",
  },
  {
    name: "La Nuit de L'Homme",
    img: "./imgs/collection/La Nuit de L'Homme.jpg",
    id: "lnlh-009",
    brand: "Yves Saint Laurent",
  },
  {
    name: "Louis Vuitton Afternoon Swim",
    img: "./imgs/collection/Louis Vuitton Afternoon Swim.jpg",
    id: "lvas-010",
    brand: "Louis Vuitton",
  },
  {
    name: "Invictus",
    img: "./imgs/collection/Invictus.jpg",
    id: "inv-021",
    brand: "Paco Rabanne",
  },
  {
    name: "Lacoste Booster",
    img: "./imgs/collection/Lacoste Booster.jpg",
    id: "lb-022",
    brand: "Lacoste",
  },
  {
    name: "Azzaro Wanted",
    img: "./imgs/collection/Azzaro Wanted.jpg",
    id: "aw-023",
    brand: "Azzaro",
  },
  {
    name: "Creed Aventus",
    img: "./imgs/collection/Creed Aventus.jpg",
    id: "ca-024",
    brand: "Creed",
  },
  {
    name: "Lacoste Noir",
    img: "./imgs/collection/Lacoste Noir.jpg",
    id: "ln-025",
    brand: "Lacoste",
  },
  {
    name: "Lacoste Blanc",
    img: "./imgs/collection/Lacoste Blanc.jpg",
    id: "lb-026",
    brand: "Lacoste",
  },
  {
    name: "Cartier Déclaration",
    img: "./imgs/collection/Cartier Déclaration.jpg",
    id: "cd-027",
    brand: "Cartier",
  },
  {
    name: "Montblanc Legend",
    img: "./imgs/collection/Montblanc Legend.jpg",
    id: "ml-028",
    brand: "Montblanc",
  },
  {
    name: "Coco Vanille",
    img: "./imgs/collection/Coco Vanille.jpg",
    id: "cv-029",
    brand: "Mancera",
  },
  {
    name: "Allure Homme Sport",
    img: "./imgs/collection/Allure Homme Sport.jpg",
    id: "ahs-030",
    brand: "Chanel",
  },
  {
    name: "Boss Unlimited",
    img: "./imgs/collection/Boss Unlimited.jpg",
    id: "bu-031",
    brand: "Hugo Boss",
  },
  {
    name: "Invictus Victory Elixir",
    img: "./imgs/collection/Invictus Victory Elixir.jpg",
    id: "ive-032",
    brand: "Paco Rabanne",
  },
  {
    name: "Whiskey Silver",
    img: "./imgs/collection/Whiskey Silver.jpg",
    id: "ws-033",
    brand: "Unknown",
  },
  {
    name: "Gentleman Society",
    img: "./imgs/collection/Gentleman Society.jpg",
    id: "gs-034",
    brand: "Givenchy",
  },
  {
    name: "Kirke Tiziana Terenzi",
    img: "./imgs/collection/Kirke Tiziana Terenzi.jpg",
    id: "ktt-035",
    brand: "Tiziana Terenzi",
  },
  {
    name: "Acqua di Giò",
    img: "./imgs/collection/Acqua di Giò.jpg",
    id: "adg-036",
    brand: "Giorgio Armani",
  },
  {
    name: "Le Beau Paradise Garden",
    img: "./imgs/collection/Le Beau Paradise Garden.jpg",
    id: "lbpg-037",
    brand: "Jean Paul Gaultier",
  },
  {
    name: "Valentino",
    img: "./imgs/collection/Valentino.jpg",
    id: "val-038",
    brand: "Valentino",
  },
  {
    name: "Blue Seduction",
    img: "./imgs/collection/Blue Seduction.jpg",
    id: "bs-039",
    brand: "Antonio Banderas",
  },
  {
    name: "YSL MYSLF",
    img: "./imgs/collection/YSL MYSLF.jpg",
    id: "ym-040",
    brand: "Yves Saint Laurent",
  },
  {
    name: "أمواج البحر",
    img: "./imgs/collection/أمواج البحر.jpg",
    id: "aab-041",
    brand: "Unknown",
  },
];

const productS = document.querySelector(".products-continer");

function renderCollection() {
  let collectionHTML = ``;
  products.forEach((product) => {
    collectionHTML += `        
      <div class="product">
        <div class="product-img">
          <img src="${product.img}" alt="">
          
        </div>
        
        <div class="product-buy">
                <div class='product-brand'>
          <p>${product.brand}</p>
        </div>
        <div class='product-name'>
          <p>${product.name}</p>
        </div>

          <!-- <div class="quntity">
            <label><input type="radio" name="size">10ML</label>
            <label><input type="radio" name="size">20ML</label>
            <label><input type="radio" name="size">30ML</label>
            <label><input type="radio" name="size">50ML</label>
          </div> -->
          <div class='but-button'><a href="./buy.html">buy</a></div>
          
        </div>


      </div>`;
  });

  productS.innerHTML = collectionHTML;
}
const cart = [];
renderCollection();
const BuyBody = document.querySelector(".js-products-BUY");
const buyBotton = document.querySelectorAll(".but-button");


//   buyBotton.forEach(button => {

//     //   button.addEventListener('click', () => {
//     //     
//     // })
  
// console.log(button)

//     });

 

