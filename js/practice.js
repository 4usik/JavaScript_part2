"use strict"

/*const async = (a) => {
  setTimeout(() => {
    const b = a + 1;
    return b;
  }, 200);
}*/

/*
//Создадим простейшую асинхронную функцию с помощью setTimeout: 
const async = (a, cb) => {
  setTimeout(() => {
    const b = a + 1;
	  cb(b); //функция обратного вызова, по истечении таймаута будет вызвана с аргументом b
    return b;
  }, 200);
}
async(5, (b) => {
  console.log(b);  // 6
});
*/


const async = (a) => {
  return new Promise((resolve, reject) => {// Здесь пишем асинхронный код
    setTimeout(() => {
      if (a) {// В случае успешного выполнения вызываем колбэк resolve()
        const b = a + 1;
        resolve(b);
      } else {
        reject('Error');// В случае ошибки вызываем reject()
      }
    }, 200);
  });
};

//После того, как промис объявлен, можно написать обработчик. Колбэки для успешного и ошибочного выполнения передаются в качестве аргументов метода then():

async(5).then((b) => {
  console.log(b);      // Сработает первый колбэк и выведет в консоль 6
}, (error) => {
  console.log(error)
});

async().then((b) => {
  console.log(b);
}, (error) => {
  console.log(error)   // Сработает второй колбэк и выведет в консоль 'Error'
});