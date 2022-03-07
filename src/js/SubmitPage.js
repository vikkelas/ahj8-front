import RenderPage from './RenderPage';
import changeWindow from './position';
import API from './Request';

export default class SubmitPage {
  constructor() {
    this.modal = new RenderPage();
    this.url = 'http://localhost:8080/newuser';
    this.urlWS = 'ws://localhost:8080';
    this.api = new API();
  }

  init() {
    this.modal.createNickname();
    changeWindow();
    window.addEventListener('resize', () => {
      if (this.modal.modalWindow !== null) {
        changeWindow();
      }
    });
    this.eventNewUser();
  }

  eventNewUser() {
    const btn = this.modal.modalWindow.querySelector('.nickname__button');
    btn.addEventListener('click', async (e) => {
      e.preventDefault();
      const userName = new FormData(document.forms.nickname__form);
      const response = await this.api.add(this.url, userName);
      const data = await response.json();
      if (data.length === 0) {
        this.modal.nameError();
      }
      if (data.length !== 0) {
        this.modal.deletModal();
        this.modal.createChat();
        this.api.wsconected(this.urlWS);
      }
    });
  }
}
// export default function submitClient() {
//   const btnSubbmit = document.querySelector('.nickname__button');
//   const url = 'http://localhost:8080/newuser';

//   function request(url) {
//     return fetch(url, {
//       body: new FormData(document.forms.nickname__form),
//       method: 'POST',
//     }).then((response) => response.json());
//   }

//   btnSubbmit.addEventListener('click', (e) => {
//     e.preventDefault();
//     const res = request(url);
//   });
// }
