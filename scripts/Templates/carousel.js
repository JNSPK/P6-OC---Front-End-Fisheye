export default class Carousel {
  static buildOne(media) {
    return `
      <div class="carousel-container">
      <div class="overlay ">
      <svg class="close carousel-trigger" fill="#911C1C" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xml:space="preserve" stroke="#911C1C"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <polygon points="512,59.076 452.922,0 256,196.922 59.076,0 0,59.076 196.922,256 0,452.922 59.076,512 256,315.076 452.922,512 512,452.922 315.076,256 "></polygon> </g> </g> </g></svg>
      <button class="slide-arrow" id="slide-arrow-prev">
      &#8249;
    </button>
    <button class="slide-arrow" id="slide-arrow-next">
      &#8250;
    </button></div>
      <div class="carousel">
      <img src="" alt="Illustration du photographe" />
      </div>
      </div>
       
          `;
  }
}
