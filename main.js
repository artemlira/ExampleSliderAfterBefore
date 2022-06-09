'use strict';



class ExampleSliderAfterBefore {
   constructor({ wrapper, images }) {
      this.wrapper = document.querySelector(wrapper);
      this.images = this.wrapper.querySelectorAll(images);
   }

   showFirstImage() {
      this.images.forEach((v, index) => {
         if (index % 2 == 0) {
            v.style.position = 'unset';
         }
      })
   }

   addShell() {
      let copyImage = [];
      this.images.forEach((v, index) => {
         if (index % 2 != 0) {
            copyImage.push(v);
            v.closest('.slider').insertAdjacentHTML('beforeend', `<div class="last__img"></div>`);
            v.style.width = v.closest('.slider').clientWidth + 'px';
            v.remove();
         }
      });
      let arr = this.wrapper.querySelectorAll('.last__img');
      arr.forEach((item, index) => {
         item.style.position = 'absolute';
         item.style.top = '0';
         item.style.overflow = 'hidden';
         item.style.width = (item.closest('.slider').clientWidth / 2) + 'px';
         item.append(copyImage[index]);
      });
   }

   showImage() {
      this.wrapper.addEventListener('mousemove', (even) => {
         let target = even.target;
         if (target.matches('img')) {
            if (target.parentElement.matches('.slider')) {
               target.nextElementSibling.style.width = even.clientX - 20 + 'px';
            } else {
               target.closest('.last__img').style.width = even.clientX - 20 + 'px';
            }
         }
      });
   }

   init() {
      console.dir(this);
      this.showFirstImage();
      this.addShell();
      this.showImage();
   }
}

let initialData = {
   wrapper: '.wrapper',
   images: 'img',
}

const slider = new ExampleSliderAfterBefore(initialData);
slider.init();
