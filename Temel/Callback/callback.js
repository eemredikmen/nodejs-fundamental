function Soyle(text, callback) {
  console.log(text);
  callback();
}

let cayDemle = function () {
  console.log("Demleniyor..");
};

Soyle("hadi söyle", cayDemle);
