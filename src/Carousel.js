import leftChevron from "./assets/chevron-left.svg";
import rightChevron from "./assets/chevron-right.svg";

export class Carousel {
  static visibleClassName = "visible";

  constructor(container, imageArray) {
    this.images = imageArray ?? [];
    this.currentImageIndex = 0;

    if (this.images.length > 0) {
      this.carouselElement = document.createElement("div");
      this.carouselElement.classList = "carousel";

      const previousButton = document.createElement("button");
      previousButton.classList = "control previous";
      const previousIcon = document.createElement("img");
      previousIcon.src = leftChevron;
      previousIcon.classList = "chevron";
      previousButton.addEventListener("click", () => {
        this.previous();
      });
      previousButton.appendChild(previousIcon);
      this.carouselElement.appendChild(previousButton);

      this.images.forEach((image, index) => {
        const imageElement = document.createElement("img");
        imageElement.src = image;
        imageElement.classList = "slide";

        // Show the first one by default
        if (index === 0) {
          imageElement.classList.add(Carousel.visibleClassName);
        }

        this.carouselElement.appendChild(imageElement);
      });
      container.appendChild(this.carouselElement);

      const nextButton = document.createElement("button");
      nextButton.classList = "control next";
      const nextIcon = document.createElement("img");
      nextIcon.src = rightChevron;
      nextIcon.classList = "chevron";
      nextButton.appendChild(nextIcon);
      nextButton.addEventListener("click", () => {
        this.next();
      });
      this.carouselElement.appendChild(nextButton);
    }

    this.carouselImageList = this.carouselElement.querySelectorAll("img.slide");
  }

  next() {
    if (this.images.length === 0) {
      return;
    }

    // Make current slide hidden
    this.carouselImageList[this.currentImageIndex].classList.remove(
      Carousel.visibleClassName,
    );

    if (this.currentImageIndex === this.images.length - 1) {
      // At end of carousel so start from beginning
      this.currentImageIndex = 0;
    } else {
      this.currentImageIndex++;
    }

    // Make next slide visible
    this.carouselImageList[this.currentImageIndex].classList.add(
      Carousel.visibleClassName,
    );
  }

  previous() {
    if (this.images.length === 0) {
      return;
    }

    // Make current slide hidden
    this.carouselImageList[this.currentImageIndex].classList.remove(
      Carousel.visibleClassName,
    );

    if (this.currentImageIndex === 0) {
      // At end of carousel so start from beginning
      this.currentImageIndex = this.images.length - 1;
    } else {
      this.currentImageIndex--;
    }

    // Make next slide visible
    this.carouselImageList[this.currentImageIndex].classList.add(
      Carousel.visibleClassName,
    );
  }
}
