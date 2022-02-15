const news = [
  {
    title: "Хавар эхлэх бүтээн байгуулалтууд",
    date: "2022.02.22",
    type: "улс төр",
    pic_url: "https://news.mn/wp-content/uploads/2022/02/zam.jpg",
  },
  {
    title: "Covid-19 элэг, цөс, нойр булчирхай гэмтээж байна",
    date: "2022.02.01",
    type: "улс төр",
    pic_url:
      "https://news.mn/wp-content/uploads/2020/08/%D0%91.-%D0%91%D0%BE%D0%BB%D0%BE%D1%80%D0%BC%D0%B0%D0%B0-%D1%8D%D0%BC%D1%87-1-810x500.jpg",
  },
  {
    title: "Малчид нууцаар морины уралдаан зохион байгуулсан",
    date: "2022.01.31",
    type: "спорт",
    pic_url:
      "https://news.mn/wp-content/uploads/2022/02/2t4mpelteaocegkn2rcecmaf4l.jpg",
  },
  {
    title: "ГУРВАН УЛС ХОЙД СОЛОНГОСЫН ЭСРЭГ ХАМТРАН АЖИЛЛАХААР ТОХИРОВ",
    date: "2022.02.06",
    type: "улс төр",
    pic_url:
      "https://news.mn/wp-content/uploads/2022/02/PYH2021120205920001300_P4-810x500.jpg",
  },
  {
    title: "Бээжин-2022: Камила Валиева өглөөний бэлтгэлдээ оролцлоо",
    date: "2022.01.06",
    type: "спорт",
    pic_url: "https://news.mn/wp-content/uploads/2022/02/FotoJet-1.jpg",
  },
  {
    title: "Түүхий эдийн зах зээлд гарсан өөрчлөлтүүд",
    date: "2022.01.16",
    type: "улс төр",
    pic_url: "https://news.mn/wp-content/uploads/2022/02/thermal-coal.jpg",
  },
  {
    title: "Brit Awards 2022: Адель хэзээ ч зогсохгүй",
    date: "2022.01.17",
    type: "спорт",
    pic_url:
      "https://news.mn/wp-content/uploads/2022/02/123191193_tv073650193-810x500.jpg",
  },
  {
    title: "Сурагчтай илүү ойлголцохын тулд багш нар дохионы хэл сурч байна",
    date: "2022.01.13",
    type: "улс төр",
    pic_url:
      "https://news.mn/wp-content/uploads/2022/02/261167536_863431337863701_8228204878361988179_n-810x500.jpg",
  },
  {
    title: "Бодь даатгал ХК: 'Гэрийн тэжээвэр амьтны даатгал' Монголд анх удаа",
    date: "2022.01.27",
    type: "спорт",
    pic_url:
      "https://news.mn/wp-content/uploads/2022/02/photo_2022-02-11_09-37-41.jpg",
  },
];
//энд generateHtmlElement() фүнкцийг бич!

// const element = document.createElement("");

//энд removeHtmlElement() фүнкцийг бич!

// document.querySelector("").remove();

/*
энд 5н button-оо барьж аваад addEventListener хииж 
removeHtmlElement() фүнкцийг дуудаж index.html доторох
<div id="mainNews"> элементийг цэвэрлсний дараа
зохих loop(filter/sorting хйиж үүсгэсэн array-a generateHtmlElement() фүнкцэд өгч ажилуул

*/

let button = document.querySelector(".btn");
button.addEventListener("click", () => {
  let filteredArr = news.filter((e) => {
    return e.type === "улс төр";
  });
});

let newImg = document.createElement("img");
newImg.setAttribute("src", news[0].pic_url);
newImg.setAttribute(".", "singleNews");
let mainDiv = document.querySelector("#mainNews");

mainDiv.appendChild(newImg);

let button = document.querySelector(".btn");
button.addEventListener("click", () => {
  let filteredArr = news.filter((e) => {
    return e.type === "улс төр";
  });
});

let newImg = document.createElement("img");
newImg.setAttribute("src", news[1].pic_url);
newImg.setAttribute(".", "singleNews");
let mainDiv = document.querySelector("#mainNews");

mainDiv.appendChild(newImg);

let button = document.querySelector(".btn");
button.addEventListener("click", () => {
  let filteredArr = news.filter((e) => {
    return e.type === "улс төр";
  });
});

let newImg = document.createElement("img");
newImg.setAttribute("src", news[2].pic_url);
newImg.setAttribute(".", "singleNews");
let mainDiv = document.querySelector("#mainNews");

mainDiv.appendChild(newImg);

let button = document.querySelector(".btn");
button.addEventListener("click", () => {
  let filteredArr = news.filter((e) => {
    return e.type === "улс төр";
  });
});

let newImg = document.createElement("img");
newImg.setAttribute("src", news[3].pic_url);
newImg.setAttribute(".", "singleNews");
let mainDiv = document.querySelector("#mainNews");

mainDiv.appendChild(newImg);

let button = document.querySelector(".btn");
button.addEventListener("click", () => {
  let filteredArr = news.filter((e) => {
    return e.type === "улс төр";
  });
});

let newImg = document.createElement("img");
newImg.setAttribute("src", news[4].pic_url);
newImg.setAttribute(".", "singleNews");
let mainDiv = document.querySelector("#mainNews");

mainDiv.appendChild(newImg);

let button = document.querySelector(".btn");
button.addEventListener("click", () => {
  let filteredArr = news.filter((e) => {
    return e.type === "улс төр";
  });
});

let newImg = document.createElement("img");
newImg.setAttribute("src", news[5].pic_url);
newImg.setAttribute(".", "singleNews");
let mainDiv = document.querySelector("#mainNews");

mainDiv.appendChild(newImg);

let button = document.querySelector(".btn");
button.addEventListener("click", () => {
  let filteredArr = news.filter((e) => {
    return e.type === "улс төр";
  });
});

let newImg = document.createElement("img");
newImg.setAttribute("src", news[6].pic_url);
newImg.setAttribute(".", "singleNews");
let mainDiv = document.querySelector("#mainNews");

mainDiv.appendChild(newImg);

let button = document.querySelector(".btn");
button.addEventListener("click", () => {
  let filteredArr = news.filter((e) => {
    return e.type === "улс төр";
  });
});

let newImg = document.createElement("img");
newImg.setAttribute("src", news[7].pic_url);
newImg.setAttribute(".", "singleNews");
let mainDiv = document.querySelector("#mainNews");

mainDiv.appendChild(newImg);

let button = document.querySelector(".btn");
button.addEventListener("click", () => {
  let filteredArr = news.filter((e) => {
    return e.type === "улс төр";
  });
});

let newImg = document.createElement("img");
newImg.setAttribute("src", news[8].pic_url);
newImg.setAttribute(".", "singleNews");
let mainDiv = document.querySelector("#mainNews");

mainDiv.appendChild(newImg);

{
  /* <div class="singleNews">
      <h2>Хавар эхлэх бүтээн байгуулалтууд</h2>
      <img src="https://news.mn/wp-content/uploads/2022/02/zam.jpg" alt="">
    </div> */
}

// let card1 = document.createElement("card");
// card1.setAttribute("style", singleNews);

// let elementsToDelete = document.querySelectorAll(".singleNews");
// elementsToDelete.forEach((e) => {
//   e.remove();
// });
