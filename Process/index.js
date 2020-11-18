// Process

// process.on("exit", (code) => {
//   // event boş olduğu için 0 dönderir
//   console.log("Process Exited With Code : " + code);
// });

process.on("uncaughtException", (err) => {
  console.log("Exception", err);
});

process.on('unhandledRejection', (err) => {
  console.log("Rejection Occured: ", err);
});

function P() {
  return new Promise(function (resolve, reject) {
    throw 'ex';
    reject('found...');
  })
}

let x = P()
  .then((returnValue) => {
    console.log("returnValue : " + returnValue);
  });
// .catch(err => console.log(err));

setTimeout(() => {
  console.log('runnig code...');
}, 3000)

// setTimeout(() => {
//   console.log("hello world");
// }, 1000);

// console.log("ı am running");

// throw "kod patladı...";

// for (let i = 0; i < 10; i++) {
//   console.log("çalışmayan kod...");
// }


