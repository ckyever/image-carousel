import { Carousel } from "./Carousel.js";
import "./styles.css";

import aiaiaiHeadphones from "./assets/aiaiai_headphones.jpg";
import appleHeadphones from "./assets/apple_headphones.jpeg";
import athHeadphones from "./assets/ATH-M50XBK.jpg";
import beyerHeadphones from "./assets/beyerdynamic_headphones.jpeg";
import senheiserHeadphones from "./assets/hd650.jpeg";

// Array of images that we import
// Div that has an img element that will be assigned to one of the images at any time
// Carousel object with next, previous functions to move through array
// A loop with a timeout that continually calls next function
// Add next previous buttons to just call next previous functions on carousel

const images = [
  aiaiaiHeadphones,
  appleHeadphones,
  athHeadphones,
  beyerHeadphones,
  senheiserHeadphones,
];

const headphoneCarousel = new Carousel(images);
