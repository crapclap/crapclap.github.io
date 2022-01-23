// /**
//  * @class ToggleModal
//  * @description モーダルウィンドウの表示切替を行い、YouTube動画を動的に埋め込む
//  * @argument target 対象のYouTube動画を含む要素
//  */
// export default class ToggleModal {
//   constructor(target) {
//     this.target = target;
//     this.videoId = target.dataset.url.slice(-11);
//     this.loadIframePlayerAPI();
//     this.open();
//     this.close();
//   }
  
//   /**
//    * @method loadIframePlayerAPI
//    * @description IFrame Player APIを読み込む
//    */
//   loadIframePlayerAPI() {
//     const tag = document.createElement('script');
//     tag.src = 'https://www.youtube.com/iframe_api';
//     const firstScriptTag = document.getElementsByTagName('script')[0];
//     firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
//   }
  
//   /**
//    * @method onYouTubeIframeAPIReady
//    * @description YouTube動画を動的に埋め込む
//    */
//   onYouTubeIframeAPIReady() {
//     let ytPlayer = new YT.Player('player', {
//       videoId: this.videoId,
//       playerVars: {
//         'autoplay': 1,
//         'controls': 1
//       }
//     });
//   }
  
//   /**
//    * @method remakePlayerElement
//    * @description YouTube動画を埋め込む要素を再作成
//    */
//   remakePlayerElement() {
//     const modal = document.querySelector('#modal-video');
//     modal.removeChild(modal.firstElementChild);
//     let tag = document.createElement('div');
//     tag.id = 'player';
//     modal.appendChild(tag);
//   }
  
//   /**
//    * @method open
//    * @description モーダルウィンドウを開く
//    */
//   open() {
//     this.target.addEventListener('click', event => {
//       this.onYouTubeIframeAPIReady();
//       document.querySelector('#modal-video').classList.add('open');
//       document.querySelector('#modal-video').classList.remove('close');
//     });
//   }
  
//   /**
//    * @method close
//    * @description モーダルウィンドウを閉じる
//    */
//   close() {
//     document.querySelector('.js-modal-video-close').addEventListener('click', event => {
//       document.querySelector('#modal-video').classList.add('close');
//       document.querySelector('#modal-video').classList.remove('open');
//       this.remakePlayerElement();
//     });
//   }
// }

// document.addEventListener('DOMContentLoaded', event => {
//   document.querySelectorAll('.js-modal-video-open').forEach(element => {
//     new ToggleModal(element);
//   });
// });