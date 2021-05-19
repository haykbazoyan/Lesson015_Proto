let Pagination = {
  count: 0,
  fullArr: [],
  init: function (array, num) {
    let curSum = 0;
    for (let i = 0; i < array.length / num; i++) {
      let arr = [];
      for (let index = 0; index < num; index++) {
        if (array[curSum] === undefined) {
          break;
        }
        arr.push(array[curSum]);
        curSum += 1;
      }
      this.fullArr.push(arr);
    }
  },
  getPageItems: function () {
    return this.fullArr[this.count];
  },
  nextPage: function () {
    this.count += 1;
    return this;
  },
  goToPage: function (number) {
    this.count = number;
  },
  prevPage: function () {
    this.count -= 1;
    return this;
  },
  firstPage: function () {
    return this.fullArr[0];
  },
  lastPage: function () {
    return this.fullArr[this.fullArr.length - 1];
  },
};

const alphabetArray = "abcdefghijklmnopqrstuvwxyz".split("");
Pagination.init(alphabetArray, 4);
console.log(Pagination.getPageItems()); // ["a", "b", "c", "d"]
Pagination.nextPage(); // add the current page by one
console.log(Pagination.getPageItems()); // ["e", "f", "g", "h"]
Pagination.nextPage().nextPage(); // the ability to call chainable
console.log(Pagination.getPageItems());
Pagination.goToPage(5);
Pagination.prevPage();
console.log(Pagination.getPageItems());
