// const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];

// const isLoginValid = function (login) {
//   for (const check of logins) {
//     if (check.length >= 4 && check.length <= 16) {
//       return true;
//     } else {
//       return false;
//     }
//   }
// };

// const isLoginUnique = function (allLogins, login) {
//   const findLogin = allLogins.includes(login);

//   if (findLogin === true) {
//     return false;
//   } else {
//     return true;
//   }
// };

// const addLogin = function (allLogins, login) {
//   if (isLoginValid() === true) {
//     isLoginUnique();
//   } else if (isLoginValid === false) {
//     console.log('Помилка! Логін повинен бути від 4 до 16 символів');
//   } else if (isLoginUnique === false) {
//     console.log('Такий логін уже використовується!');
//   } else if (isLoginUnique === true) {
//     logins.push(login);
//     console.log('Логін успішно доданий!');
//   };
// };

// /*
//  * Виклич функції для перевірки працездатності твоєї реалізації.
//  */
// console.log(addLogin(logins, "Ajax")); // 'Логін успішно доданий!'
// console.log(addLogin(logins, "robotGoogles")); // 'Такий логін вже використовується!'
// console.log(addLogin(logins, "Zod")); // 'Помилка! Логін повинен бути від 4 до 16 символів'
// console.log(addLogin(logins, "jqueryisextremelyfast")); // 'Помилка! Логін повинен бути від 4 до 16 символів'