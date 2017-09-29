class UsersAPI {
  constructor() {
    this.responseReadyCallback = null;
    this.items = null;

    if (window.XMLHttpRequest) {
      this.request = new XMLHttpRequest();
    }
    else {
      // TODO: Throw some exception
    }
    this.request.onreadystatechange = () => this.onReady();
  }

  addResponseReadyCallback(callback) {
    this.responseReadyCallback = callback;
  }

  fetch() {
    return this.items;
  }

  load(url) {
    try {
      this.request.open('GET', url, /*async=*/true);
      this.request.send();
    }
    catch (error) {
    }
  }

  onReady() {
    if (this.request.readyState == XMLHttpRequest.DONE) {
      if (this.request.status == 200) {
        this.items = JSON.parse(this.request.responseText);
        this.responseReadyCallback();
      }
      else {
        throw 'HTTP Error: ' + this.request.status;
      }
    }
  }
}

var usersAPI = new UsersAPI();
export default usersAPI;
