const products = [
  {
    name: "Sauvage",
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
    brand: "Dior",
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
    name: "Ani",
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
    name: "Afternoon Swim",
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
    name: "Booster",
    img: "./imgs/collection/Lacoste Booster.jpg",
    id: "lb-022",
    brand: "Lacoste",
  },
  {
    name: "Wanted",
    img: "./imgs/collection/Azzaro Wanted.jpg",
    id: "aw-023",
    brand: "Azzaro",
  },
  {
    name: "Aventus",
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
    name: "Déclaration",
    img: "./imgs/collection/Cartier Déclaration.jpg",
    id: "cd-027",
    brand: "Cartier",
  },
  {
    name: "Legend",
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
    name: "Kirke",
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
    name: "Valentino Uomo Born In Roma",
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
    name: "MYSLF",
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

document.getElementById("form").addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent the default form submission
  document.getElementById("message").textContent = "Sending..";
  document.getElementById("message").style.display = "block";
  document.getElementById("submit-button").disabled = true;

  // Collect the form data
  let formData = new FormData(this);
  let keyValuePairs = [];
  for (let pair of formData.entries()) {
    keyValuePairs.push(pair[0] + "=" + pair[1]);
  }

  let formDataString = keyValuePairs.join("&");

  // Send a POST request to your Google Apps Script
  fetch(
    "https://script.google.com/macros/s/AKfycbxR6Fq_wDk3XnMNoPwoQ6AnaTQE36l4rdzFzSSd-oLouIkIu9HEDGuQqyhmqe7EeQWI/exec",
    {
      redirect: "follow",
      method: "POST",
      body: formDataString,
      headers: {
        "Content-Type": "text/plain;charset=utf-8",
      },
    }
  )
    .then(function (response) {
      // Check if the request was successful
      if (response) {
        return response; // Assuming your script returns JSON response
      } else {
        throw new Error("Failed to sent you order try again");
      }
    })
    .then(function (data) {
      // Display a success message
      document.getElementById("message").textContent =
        "Order submitted successfully!";
      document.getElementById("message").style.display = "block";
      document.getElementById("message").style.backgroundColor = "green";
      document.getElementById("message").style.color = "beige";
      document.getElementById("submit-button").disabled = false;
      document.getElementById("form").reset();

      setTimeout(function () {
        document.getElementById("message").textContent = "";
        document.getElementById("message").style.display = "none";
      }, 2600);
    })
    .catch(function (error) {
      // Handle errors, you can display an error message here
      console.error(error);
      document.getElementById("message").textContent =
        "An error occurred while submitting your Order";
      document.getElementById("message").style.display = "block";
    });
});

let cart = JSON.parse(localStorage.getItem("Cartx"));

const BODY_OF_PRODUCT = document.querySelector(".ALL_PRODUCTS");
let HTML=``;
let index = 1;
cart.forEach((product,i) => {

  products.forEach(ORGproduct =>{
    if(product.id === ORGproduct.id){
      for(let y=0;y<product.quntity;y++){
        HTML = `
        <div class="product">
          <div class="product-img">
            <img src="${ORGproduct.img}" alt="">
            
          </div>
          
          <div class="product-buy">
            <div class='product-brand'>
              <p>${ORGproduct.brand}</p>
            </div>
           <div class='product-name' >
              <input type="text" value="${ORGproduct.name}" name="Parfume">
           </div>
  
            <div class="quntity">
              <label><input type="radio" name="size" value="10ML">10ML</label>
              <label><input type="radio" name="size" value="20ML" checked>20ML</label>
              <label><input type="radio" name="size" value="30ML">30ML</label>
              <label><input type="radio" name="size" value="50ML">50ML</label>
            </div> 

          </div>
        </div>
`
BODY_OF_PRODUCT.innerHTML=HTML;
      }
 
    }
  })
});

