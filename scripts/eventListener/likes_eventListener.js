export default class Likes {
  static listen() {
    this.listenLikes();
  }

  static async listenLikes() {
    document.querySelector('.gallerie').addEventListener('click', (e) => {
      const isALikeButton = e.target.matches('[data-like-button]');

      if (isALikeButton) {
        const isLiked = e.target.matches('[data-liked="true"]');
        const likeCount = document.querySelector(
          '.likes-price .totalLikes > div'
        );
        const cardLikeCount = e.target
          .closest('section')
          .querySelector('.likes');

        let currentCount = parseInt(likeCount.textContent);
        let currentCardCount = parseInt(cardLikeCount.textContent);

        likeCount.textContent = isLiked ? --currentCount : ++currentCount;
        cardLikeCount.textContent = isLiked
          ? --currentCardCount
          : ++currentCardCount;

        e.target.setAttribute('data-liked', !isLiked);
        e.target
          .closest('.infos-photo')
          .querySelector('.like-button-filled')
          .classList.toggle('liked');
      }
    });
  }
}
