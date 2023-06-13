export default class Likes {
  static listen() {
    this.listenLikes();
  }

  static async listenLikes() {
    document.querySelector('.gallerie').addEventListener('click', async (e) => {
      const isALikeButton = e.target.matches('[data-like-button]');
      const isNotLiked = e.target.matches('[data-liked="false"]');
      if (isALikeButton && isNotLiked) {
        const likeCount = document.querySelector('.likes-price .likes > div');
        let currentCount = parseInt(likeCount.textContent);

        let newCount = currentCount + 1;

        likeCount.textContent = newCount;

        e.target.setAttribute('data-liked', true);

        console.log(newCount);
      }
    });
  }
}
