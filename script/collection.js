const products = [
  {
    name: "Sauvage",
    img: "./imgs/collection/Dior Sauvage.jpg",
    id: "ds-001",
    brand: "Dior",
    color: "#0C2340", // Deep Navy Blue
    gender: "Male"
  },
  {
    name: "Sauvage Elixir",
    img: "./imgs/collection/Sauvage Elixir.jpg",
    id: "se-002",
    brand: "Dior",
    color: "#003366", // Royal Blue
    gender: "Male"
  },
  {
    name: "Bleu de Chanel",
    img: "./imgs/collection/Bleu de Chanel.jpg",
    id: "bdc-003",
    brand: "Chanel",
    color: "#1E3A5F", // Luxurious Midnight Blue
    gender: "Male"
  },
  {
    name: "L'Homme Intense",
    img: "./imgs/collection/L'Homme Intense.jpg",
    id: "lhi-004",
    brand: "Dior",
    color: "#00416A", // Dark Sapphire Blue
    gender: "Male"
  },
  {
    name: "Le Male Elixir",
    img: "./imgs/collection/Le Male Elixir.jpg",
    id: "lme-005",
    brand: "Jean Paul Gaultier",
    color: "#0A3D62", // Deep Atlantic Blue
    gender: "Male"
  },
  {
    name: "Boss The Scent Elixir",
    img: "./imgs/collection/Boss The Scent Elixir.jpg",
    id: "btse-006",
    brand: "Hugo Boss",
    color: "#154360", // Refined Steel Blue
    gender: "Male"
  },
  {
    name: "Ani",
    img: "./imgs/collection/Nishane Ani.jpg",
    id: "na-007",
    brand: "Nishane",
    color: "#01796F", // Deep Teal Green
    gender: "Unisex"
  },
  {
    name: "Eros",
    img: "./imgs/collection/Eros.jpg",
    id: "er-008",
    brand: "Versace",
    color: "#005F56", // Elegant Dark Green
    gender: "Male"
  },
  {
    name: "La Nuit de L'Homme",
    img: "./imgs/collection/La Nuit de L'Homme.jpg",
    id: "lnlh-009",
    brand: "Yves Saint Laurent",
    color: "#0F3057", // Sophisticated Midnight Blue
    gender: "Male"
  },
  {
    name: "Afternoon Swim",
    img: "./imgs/collection/Louis Vuitton Afternoon Swim.jpg",
    id: "lvas-010",
    brand: "Louis Vuitton",
    color: "#0047AB", // Royal Azure Blue
    gender: "Unisex"
  },
  {
    name: "Invictus",
    img: "./imgs/collection/Invictus.jpg",
    id: "inv-021",
    brand: "Paco Rabanne",
    color: "#008ECC", // Lush Caribbean Blue
    gender: "Male"
  },
  {
    name: "Booster",
    img: "./imgs/collection/Lacoste Booster.jpg",
    id: "lb-022",
    brand: "Lacoste",
    color: "#006A4E", // Classic Lacoste Green
    gender: "Male"
  },
  {
    name: "Wanted",
    img: "./imgs/collection/Azzaro Wanted.jpg",
    id: "aw-023",
    brand: "Azzaro",
    color: "#1A5276", // Rich Deep Blue
    gender: "Male"
  },
  {
    name: "Aventus",
    img: "./imgs/collection/Creed Aventus.jpg",
    id: "ca-024",
    brand: "Creed",
    color: "#1B4F72", // Deep Blue Smoke
    gender: "Male"
  },
  {
    name: "Lacoste Noir",
    img: "./imgs/collection/Lacoste Noir.jpg",
    id: "ln-025",
    brand: "Lacoste",
    color: "#005F30", // Dark Forest Green
    gender: "Male"
  },
  {
    name: "Lacoste Blanc",
    img: "./imgs/collection/Lacoste Blanc.jpg",
    id: "lb-026",
    brand: "Lacoste",
    color: "#008080", // Teal Green
    gender: "Male"
  },
  {
    name: "Déclaration",
    img: "./imgs/collection/Cartier Déclaration.jpg",
    id: "cd-027",
    brand: "Cartier",
    color: "#002366", // Deep Royal Blue
    gender: "Male"
  },
  {
    name: "Legend",
    img: "./imgs/collection/Montblanc Legend.jpg",
    id: "ml-028",
    brand: "Montblanc",
    color: "#0B3D91", // Elegant Dark Blue
    gender: "Male"
  },
  {
    name: "Coco Vanille",
    img: "./imgs/collection/Coco Vanille.jpg",
    id: "cv-029",
    brand: "Mancera",
    color: "#005F56", // Elegant Dark Green
    gender: "Female"
  },
  {
    name: "Allure Homme Sport",
    img: "./imgs/collection/Allure Homme Sport.jpg",
    id: "ahs-030",
    brand: "Chanel",
    color: "#003B73", // Deep Sapphire Blue
    gender: "Male"
  },
  {
    name: "Boss Unlimited",
    img: "./imgs/collection/Boss Unlimited.jpg",
    id: "bu-031",
    brand: "Hugo Boss",
    color: "#004225", // Prestige Green
    gender: "Male"
  },
  {
    name: "Invictus Victory Elixir",
    img: "./imgs/collection/Invictus Victory Elixir.jpg",
    id: "ive-032",
    brand: "Paco Rabanne",
    color: "#003152", // Deep Ocean Blue
    gender: "Male"
  },
  {
    name: "Whiskey Silver",
    img: "./imgs/collection/Whiskey Silver.jpg",
    id: "ws-033",
    brand: "Unknown",
    color: "#2E86C1", // Soft Royal Blue
    gender: "Male"
  },
  {
    name: "Gentleman Society",
    img: "./imgs/collection/Gentleman Society.jpg",
    id: "gs-034",
    brand: "Givenchy",
    color: "#00416A", // Classic French Blue
    gender: "Male"
  },
  {
    name: "Kirke",
    img: "./imgs/collection/Kirke Tiziana Terenzi.jpg",
    id: "ktt-035",
    brand: "Tiziana Terenzi",
    color: "#00843D", // Bold Emerald Green
    gender: "Unisex"
  },
  {
    name: "Acqua di Giò",
    img: "./imgs/collection/Acqua di Giò.jpg",
    id: "adg-036",
    brand: "Giorgio Armani",
    color: "#1F618D", // Marine Blue
    gender: "Male"
  },
  {
    name: "Le Beau Paradise Garden",
    img: "./imgs/collection/Le Beau Paradise Garden.jpg",
    id: "lbpg-037",
    brand: "Jean Paul Gaultier",
    color: "#014421", // Rich Emerald Green
    gender: "Male"
  },
  {
    name: "Valentino Uomo Born In Roma",
    img: "./imgs/collection/Valentino.jpg",
    id: "val-038",
    brand: "Valentino",
    color: "#0E4D92", // Royal Blue Depth
    gender: "Male"
  },
  {
    name: "Blue Seduction",
    img: "./imgs/collection/Blue Seduction.jpg",
    id: "bs-039",
    brand: "Antonio Banderas",
    color: "#004C99", // Luxury Blue
    gender: "Male"
  },
  {
    name: "MYSLF",
    img: "./imgs/collection/YSL MYSLF.jpg",
    id: "ym-040",
    brand: "Yves Saint Laurent",
    color: "#0B3D91", // Elegant Dark Blue
    gender: "Unisex"
  },
  {
    name: "أمواج البحر",
    img: "./imgs/collection/أمواج البحر.jpg",
    id: "aab-041",
    brand: "Unknown",
    color: "#006994", // Persian Blue
    gender: "Unisex"
  }
];


const productS = document.querySelector(".products-continer");

function renderCollection() {
  let collectionHTML = ``;
  products.forEach((product) => {
    collectionHTML += `        
      <div class="product">
        <div class="product-img">
          <a href="./productSDetails.html"><img src="${product.img}" alt="" class="product__img" data-id='${product.id}' ></a>
          
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
          <div class='but-button'><a href='./productSDetails.html' class="product-buy-button" data-id='${product.id}'>buy</a></div>
        </div>
      </div>`;
  });

  productS.innerHTML = collectionHTML;
}
renderCollection();

const Cartx = [];
// add to cart

const BuyBody = document.querySelector(".js-products-BUY");
const buyBotton = document.querySelectorAll(".product-buy-button");

buyBotton.forEach((button) => {
  button.addEventListener("click", () => {
    products.forEach((pp) => {
      if (button.dataset.id === pp.id) {
        localStorage.removeItem("productView");
        localStorage.setItem("productView",JSON.stringify(pp.id));
      }
    });
  })
});
document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(".product");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    { threshold: 0.5 }
  );

  elements.forEach((element) => {
    observer.observe(element);
  });
});
const IMG = document.querySelectorAll(".product__img");
IMG.forEach((imgg) => {
  imgg.addEventListener("click", () => {
    products.forEach((pp) => {
      if (imgg.dataset.id === pp.id) {
        localStorage.removeItem("productView");
        localStorage.setItem("productView",JSON.stringify(pp.id));
      }
    });
  });
});
