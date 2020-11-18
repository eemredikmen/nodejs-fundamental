function Birinci(callback) {
  setTimeout(() => {
    console.log("Birinci...");
    callback(Ucuncu);
  }, 1000);
}
function İkinci(callback) {
  setTimeout(function () {
    console.log('ikinci');
    callback();
  },2000);
}

function Ucuncu() {
  console.log("Üçüncü");
}

Birinci(İkinci);

