var form = document.getElementById("mainForm");
var input1 = document.getElementById("number1");
var input2 = document.getElementById("number2");
var result = document.getElementById("result");

const checkPrime = (nb) => {
  for (let i = 2; i < nb; i++) {
    if (nb % i === 0) return false;
  }
  return true;
};

const findPrimeNb = (nb1, nb2) => {
  let primeNb = [];

  if (nb1 > nb2) {
    let tmp;
    tmp = nb1;
    nb1 = nb2;
    nb2 = tmp;
  }

  for (let i = nb1; i <= nb2; i++) {
    if (checkPrime(i)) {
      primeNb.push(i);
    }
  }
  return primeNb;
};

const handler = function (e) {
  e.preventDefault();
  if (
    isNaN(input1.value) ||
    isNaN(input2.value) ||
    input1.value === "" ||
    input2.value === ""
  ) {
    result.innerHTML =
      '<p style="color: red;">Invalid input, please try again.</p>';
  } else {
    var nb1 = Number(input1.value);
    var nb2 = Number(input2.value);
    if (nb1 >= 2 && nb1 <= 100 && nb2 >= 2 && nb2 <= 100) {
      var primeNb = findPrimeNb(nb1, nb2);
      var res =
        '<p style="color: teal; font-weight: bold;">There are ' +
        primeNb.length +
        " prime numbers.</p>";
      if (primeNb.length > 0) {
        res = res + '<p style="color: red;">' + primeNb + "</p>";
      }
      result.innerHTML = res;
    } else {
      result.innerHTML =
        '<p style="color: red;">Invalid input, please try again.</p>';
    }
  }
};

form.addEventListener("submit", handler);
