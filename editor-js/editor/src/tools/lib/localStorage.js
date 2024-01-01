module.exports = {
  setLocalStorage: (key, value) => {
    if (typeof key != "string" || typeof value != "string") {
      throw new Error("Invalid argument!");
    }

    try {
      localStorage.setItem(key, value);
    } catch (e) {
      // noop
    }
  },
};
