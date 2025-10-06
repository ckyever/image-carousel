import { Carousel } from "./Carousel.js";
import "./styles.css";

import aiaiaiHeadphones from "./assets/aiaiai_headphones.jpg";
import appleHeadphones from "./assets/apple_headphones.jpeg";
import athHeadphones from "./assets/ATH-M50XBK.jpg";
import beyerHeadphones from "./assets/beyerdynamic_headphones.jpeg";
import senheiserHeadphones from "./assets/hd650.jpeg";

const images = [
  aiaiaiHeadphones,
  appleHeadphones,
  athHeadphones,
  beyerHeadphones,
  senheiserHeadphones,
];

const container = document.querySelector("div.container");
const headphoneCarousel = new Carousel(container, images);

const autoNext = setInterval(() => {
  headphoneCarousel.next();
}, 5000);
