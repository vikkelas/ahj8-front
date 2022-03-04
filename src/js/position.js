export default function changeWindow() {
  const view = document.documentElement;
  const nickname = document.querySelector('.nickname');
  nickname.style.marginTop = `${(view.clientHeight / 2 - (nickname.offsetHeight / 2))}px`;
}
