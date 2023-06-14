export default class Likes {
  static listen() {
    this.listenLikes();
  }

  static async listenLikes() {
    document.querySelector('.gallerie').addEventListener('click', (e) => {
      const isALikeButton = e.target.matches('[data-like-button]');

      if (isALikeButton) {
        const isLiked = e.target.matches('[data-liked="true"]');
        const likeCount = document.querySelector('.likes-price .likes > div');
        let currentCount = parseInt(likeCount.textContent);

        likeCount.textContent = isLiked ? --currentCount : ++currentCount;

        e.target.setAttribute('data-liked', !isLiked);
      }
    });
  }
}
