export default class Service {
  _apiBase = "http://localhost:3004";

  async getResource(url) {
    const res = await fetch(`${this._apiBase}${url}`);

    if (!res.ok) {
      throw new Error(`Coud not fetch ${url} , received ${res.status}`);
    }
    return await res.json()
  }
  async getCardsItems(){
      return await this.getResource('/cards/')
  }
}
