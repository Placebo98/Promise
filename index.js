// Реалізовано асинхронність за допомогою коллбеків, але тут 2 рівня вкладеності і це поганий код, який важко підтримувати, якщо буде ще рівні вкладеності.

console.log("Request data...");

// setTimeout(() => {
//   console.log("Preparing data...");

//   const backendData = {
//     server: "local",
//     port: 3000,
//     status: "working",
//   };

//   setTimeout(() => {
//     backendData.modified = true;
//     console.log("Data receipt", backendData);
//   }, 4000);
// }, 2000);

// Відмінності промісу і callback-функції:

// Колбеки - це функції, проміси - це об'єкти.
// Колбеки передаються як аргументи з зовнішнього коду у внутрішній, а проміси повертаються з внутрішнього коду у зовнішній.
// Колбеки обробляють успішне або неуспішне завершення операції, проміси нічого не обробляють.
// Колбеки можуть обробляти декілька подій, обіцянки пов'язані тільки з однією подією.

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("Preparing data...");
//     const backendData = {
//       server: "local",
//       port: 3000,
//       status: "working",
//     };

//     resolve(backendData);
//   }, 2000);
// });

// promise
//   .then((data) => {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         data.modified = true;
//         resolve(data);
//         // reject(data); // замена resolve на reject для проверки catch
//       }, 2000);
//     });
//   })
//   .then((userData) => {
//     userData.fromPromise = true;
//     return userData;
//   })
//   .then((data) => {
//     console.log("Modified data", data);
//     return data;
//   })
//   .then((nextData) => {
//     nextData.lostSignal = false;
//     console.log("Next Data", nextData);
//     return nextData;
//   })
//   .catch((err) => {
//     console.error("Error: ", err);
//   })
//   .finally(() => {
//     // в любом случае сработает вне зависимости от того была ошибка или нет
//     console.log("Finished!");
//   });

/////////// Пример 2 функция Sleep ////////////

const sleep = (ms) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(), ms);
  });
};

// sleep(1500).then(() => {
//   console.log("After 1.5 sec");
// });
// sleep(3000)
//   .then(() => {
//     console.log("After 3 sec");
//   })
//   .finally(() => {
//     console.log("Sleep");
//   });

///////////////////////методы промисов/////////////
Promise.all([sleep(2000), sleep(5000)]).then(() => {
  console.log("all promises");
});

Promise.race([sleep(2000), sleep(5000)]).then(() => {
  console.log("Faster promis");
});
