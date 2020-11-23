let burgerButton = document.querySelector(".header-burger");
let mobMenu = document.querySelector("#mobile");
let flag = false;
console.log(burgerButton);
console.log(mobMenu);

const switchMenu = () => {
  if (!flag) {
    mobMenu.style.display = "flex";
    flag = true;
  } else {
    mobMenu.style.display = "none";
    flag = false;
  }
};
burgerButton.addEventListener("click", switchMenu);

// let sliderDIV = document.querySelector("#my-slider");

let arrayofPets = [
  {
    name: "Jennifer",

    img: "../../assets/images/slider-jennifer.png",

    type: "Dog",

    breed: "Labrador",

    description:
      "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",

    age: "2 months",

    inoculations: ["none"],

    diseases: ["none"],

    parasites: ["none"],
  },

  {
    name: "Sophia",

    img: "../../assets/images/slider-sophia.png",

    type: "Dog",

    breed: "Shih tzu",

    description:
      "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",

    age: "1 month",

    inoculations: ["parvovirus"],

    diseases: ["none"],

    parasites: ["none"],
  },

  {
    name: "Woody",

    img: "../../assets/images/slider-woody.png",

    type: "Dog",

    breed: "Golden Retriever",

    description:
      "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",

    age: "3 years 6 months",

    inoculations: ["adenovirus", "distemper"],

    diseases: ["right back leg mobility reduced"],

    parasites: ["none"],
  },

  {
    name: "Scarlett",

    img: "../../assets/images/slider-scarlett.png",

    type: "Dog",

    breed: "Jack Russell Terrier",

    description:
      "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",

    age: "3 months",

    inoculations: ["parainfluenza"],

    diseases: ["none"],

    parasites: ["none"],
  },

  {
    name: "Katrine",

    img: "../../assets/images/slider-katrine.png",

    type: "Cat",

    breed: "British Shorthair",

    description:
      "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",

    age: "6 months",

    inoculations: ["panleukopenia"],

    diseases: ["none"],

    parasites: ["none"],
  },

  {
    name: "Timmy",

    img: "../../assets/images/slider-timmy.png",

    type: "Cat",

    breed: "British Shorthair",

    description:
      "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",

    age: "2 years 3 months",

    inoculations: ["calicivirus", "viral rhinotracheitis"],

    diseases: ["kidney stones"],

    parasites: ["none"],
  },

  {
    name: "Freddie",

    img: "../../assets/images/slider-freddie.png",

    type: "Cat",

    breed: "British Shorthair",

    description:
      "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his humanвЂ™s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",

    age: "2 months",

    inoculations: ["rabies"],

    diseases: ["none"],

    parasites: ["none"],
  },

  {
    name: "Charly",

    img: "../../assets/images/slider-charly.png",

    type: "Dog",

    breed: "Jack Russell Terrier",
    description:
      "This cute boy, Charly, is three years old and he likes adults and kids. He isnвЂ™t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",

    age: "8 years",

    inoculations: ["bordetella bronchiseptica", "leptospirosis"],

    diseases: ["deafness", "blindness"],

    parasites: ["lice", "fleas"],
  },
];

let html = "";
let arrayOfHtmlPets = [];
for (var i = arrayofPets.length - 1; i >= 0; i--) {
  let card = `
  <div 
            class="friends-card mob tablet col "
          >
            <img
              class="img-fluid"
              src="${arrayofPets[i].img}"
              alt=""
            />
            <p class="card-name">${arrayofPets[i].name}</p>
            <a class="btn btn-secondary openModal" href="#">Learn more</a>
          </div>`;
  html += card;
  arrayOfHtmlPets.push(card);
}
// sliderDIV.innerHTML = html;

// Р’Р•РЁРђР•Рњ РЎРћР‘Р«РўРР• РћРўРљР Р«РўРР• РњРћР”РђР›РљР РќРђ Р’РЎР• РљРќРћРџРљР

// РћС‚РєСЂС‹РІР°РµРј РјРѕРґР°Р»РєСѓ
function openModal(e) {
  e.preventDefault();
  alert("Модалку не успел =(");
}

function Pagination() {
  const prevButton = document.getElementById("button_prev");
  const nextButton = document.getElementById("button_next");
  const firstButton = document.getElementById("button_first");
  const lastButton = document.getElementById("button_last");
  // const clickPageNumber = document.querySelectorAll('.clickPageNumber');

  let current_page = 1;
  let records_per_page = 4;

  if (window.innerWidth > 1280) {
    records_per_page = 8;
  } else if (window.innerWidth > 678) {
    records_per_page = 6;
  } else {
    records_per_page = 3;
  }

  this.init = function () {
    changePage(1);
    // pageNumbers();
    selectedPage();
    // clickPage();
    addEventListeners();
  };

  let addEventListeners = function () {
    prevButton.addEventListener("click", prevPage);
    nextButton.addEventListener("click", nextPage);
    firstButton.addEventListener("click", firstPage);
    lastButton.addEventListener("click", lastPage);
  };

  let selectedPage = function () {
    let page_number = document.getElementById("page_number");
  };

  let checkButtonOpacity = function () {
    current_page == 1
      ? prevButton.classList.add("left")
      : prevButton.classList.remove("left");
    current_page == 1
      ? firstButton.classList.add("left")
      : firstButton.classList.remove("left");

    current_page == numPages()
      ? nextButton.classList.add("left")
      : nextButton.classList.remove("left");
    current_page == numPages()
      ? lastButton.classList.add("left")
      : lastButton.classList.remove("left");
  };

  let changePage = function (page) {
    const listingTable = document.getElementById("listingTable");

    if (page < 1) {
      page = 1;
    }
    if (page > numPages() - 1) {
      page = numPages();
    }
    document.getElementById("page_number").innerHTML = page;

    listingTable.innerHTML = "";

    for (
      var i = (page - 1) * records_per_page;
      i < page * records_per_page && i < arrayOfHtmlPets.length;
      i++
    ) {
      console.log(arrayOfHtmlPets[i]);
      listingTable.innerHTML += arrayOfHtmlPets[i];
    }
    document.querySelectorAll(".openModal").forEach((item) => {
      item.addEventListener("click", openModal);
    });

    checkButtonOpacity();
    selectedPage();
  };

  let prevPage = function () {
    if (current_page > 1) {
      current_page--;
      changePage(current_page);
    }
  };
  let lastPage = function () {
    // if(current_page > 1) {
    current_page = numPages();
    changePage(numPages());
    // }
  };
  let firstPage = function () {
    // if(current_page > 1) {
    current_page = 1;
    changePage(1);
    // }
  };

  let nextPage = function () {
    if (current_page < numPages()) {
      current_page++;
      changePage(current_page);
    }
  };

  let numPages = function () {
    return Math.ceil(arrayOfHtmlPets.length / records_per_page);
  };
}
let pagination = new Pagination();
pagination.init();
