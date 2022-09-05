const calculatole = {
  add: function (a, b) {
    return a + b;
    //return후에는 다른 것이 작동하지 않는다.(return 후 코드 종료);
    //예) console.log("Hello"); 등등...
  },
  min: function (a, b) {
    return a - b;
  },
  mul: function (a, b) {
    return a * b;
  },
  div: function (a, b) {
    return a / b;
  }
};

const plusresult = calculatole.add(5, 2);
const minusresult = calculatole.min(plusresult, 2);
const multipleresult = calculatole.mul(10, minusresult);
const divideresult = calculatole.div(multipleresult, 2);

console.log(divideresult);
