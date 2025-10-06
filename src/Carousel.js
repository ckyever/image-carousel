export class Carousel {
  constructor(imageArray) {
    this.images = imageArray ?? [];
    this.currentImageIndex = 0;
  }

  next() {
    if (this.images.length === 0) {
      return;
    }

    if (this.currentImageIndex === this.images.length - 1) {
      // At end of carousel so start from beginning
      this.currentImageIndex = 0;
    } else {
      this.currentImageIndex++;
    }
  }

  previous() {
    if (this.images.length === 0) {
      return;
    }

    if (this.currentImageIndex === 0) {
      // At end of carousel so start from beginning
      this.currentImageIndex = this.images.length - 1;
    } else {
      this.currentImageIndex--;
    }
  }

  getCurrentImage() {
    return this.images[this.currentImageIndex];
  }
}
