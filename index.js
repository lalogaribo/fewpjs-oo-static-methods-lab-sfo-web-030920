class Formatter {
  //add static methods here

  static capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  static sanitize(str) {
    return str.replace(/[$@!#^*({]/gi, "");
  }

  static titleize(str) {
    const PRHASES = [
      "a",
      "an",
      "but",
      "of",
      "and",
      "for",
      "at",
      "by",
      "and",
      "from",
      "the",
    ];
    let words = str.split(" ");
    let finalWords = [];
    words.forEach((word) => {
      if (PRHASES.includes(word)) {
        finalWords.push(word);
      } else {
        word = word.charAt(0).toUpperCase() + word.slice(1);
        finalWords.push(word);
      }
    });
    return finalWords.join(" ");
  }
}
