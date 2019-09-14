class LocalStorage {
  static initKey = (key, initVal) => {
    // check first if the key doesn't exist
    if (!JSON.parse(localStorage.getItem(key))) {
      // insert a new key/value pair to the LocalStorage
      localStorage.setItem(key, JSON.stringify(initVal));
    }
  };
  static updateKeyValue = (key, val) => {
    // update localStorage value
    localStorage.setItem(key, JSON.stringify(val));
  };

  static getKeyValue = key => {
    return JSON.parse(localStorage.getItem(key));
  };
}
