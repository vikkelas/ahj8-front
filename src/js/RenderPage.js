import iconBack from '../assets/img/back-arrow.png';
import iconNext from '../assets/img/right-arrow.png';
import arrImg from './userIcon';

export default class RenderPage {
  constructor() {
    this.conteiner = null;
    this.modalWindow = null;
    this.chat = null;
    this.chatUsersZero = null;
    this.chatUsers = null;
    this.userIcon = arrImg;
  }

  createNickname() {
    this.connteiner = document.querySelector('.conteiner');
    this.modalWindow = document.createElement('div');
    this.modalWindow.classList.add('nickname');
    this.modalWindow.insertAdjacentHTML('beforeend', `
      <div class="nickname__title">Выберите псевдоним</div>
      <form class="nickname__form" id="nickname__form">
         <input name="name" type="text" class="nickname__input">
         <button class="nickname__button">Продолжить</button>
      </form>`);
    this.connteiner.insertAdjacentElement('beforeend', this.modalWindow);
  }

  deletModal() {
    this.connteiner.removeChild(this.modalWindow);
    this.modalWindow = null;
  }

  nameError() {
    const err = document.createElement('div');
    err.classList.add('error-message');
    err.innerText = 'Имя уже занято';
    this.modalWindow.insertAdjacentElement('beforeend', err);
    setTimeout(() => {
      this.modalWindow.removeChild(err);
    }, 2000);
  }

  createChat() {
    this.chat = document.createElement('div');
    this.chat.classList.add('chat');
    this.chat.insertAdjacentHTML('beforeend', `
    <div class="chat__users">
      <img src="${iconNext}" class="chat__btn"></img>
      <div class="chat__user-conteiner"></div>            
    </div> 
    <div class="chat__main">
    <img src="${iconBack}" class="chat__btn chat__btn--close"></img>
    <div class="chat__messages"></div>
    <form id="chat__form" class="chat__form">
       <input name="message" type="text" class="chat__text-send">
       <button class="chat__btn-send">Отправить</button>
    </form>
    </div>`);
    this.connteiner.insertAdjacentElement('beforeend', this.chat);
    this.chatUsersZero = document.querySelector('.chat__users');
    this.chatMessages = document.querySelector('.chat__messages');
  }

  renderUsers(users) {
    this.chatUsers = this.chatUsersZero;
  }
}
