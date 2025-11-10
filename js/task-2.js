const images = [
  {
    src: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    src: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    src: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
  {
    src: "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",
    alt: "Alpine Spring Meadows",
  },
  {
    src: "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",
    alt: "Nature Landscape",
  },
  {
    src: "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",
    alt: "Lighthouse Coast Sea",
  },
];

const galleryItemEl = document.createElement("li");
galleryItemEl.classList.add("gallery-item");

const galleryImgEl = document.createElement("img");
galleryImgEl.alt = "White and Black Long Fur Cat";
galleryImgEl.classList.add("gallery-img");
galleryImgEl.src =
  "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260";

galleryItemEl.append(galleryImgEl);

const refs = {
  galleryList: document.querySelector(".gallery"),
};

const ulEl = document.querySelector(".gallery");

for (const img of images) {
  const liEl = document.createElement("li");
  const imgEl = document.createElement("img");

  imgEl.style.width = "360px";
  imgEl.style.height = "300px";

  imgEl.src = img.url;
  imgEl.alt = img.url;

  liEl.append(imgEl);
  ulEl.append(liEl);
}
