export default class API {
  constructor() {
    this.url = null;
    this.urlWS = null;
  }

  add(url, userName) {
    this.url = url;
    return fetch(this.url, {
      body: userName,
      method: 'POST',
    });
  }

  wsconected(urlWS) {
    this.urlWS = urlWS;
    const ws = new WebSocket(this.urlWS);
    ws.addEventListener('open', () => {
      console.log('conection');
      ws.send('hello');
    });
  }
}
