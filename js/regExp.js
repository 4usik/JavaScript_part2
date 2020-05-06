"use strict"

/*1. Дан большой текст, в котором для оформления прямой речи используются одинарные кавычки. Придумать шаблон, который заменяет одинарные кавычки на двойные.*/

const str = 'Над самым ухом прозвучал басистый голос: \'Эй, посторонись!\' (Ю. Яковлев) Он приветливо спросил: \'Вы давно изволили приехать в Ялту?\' (А. Чехов) Завтра мне скажут, смеясь, зеркала: \'Взор твой не ясен, неярок...\' (А. Ахматова)';
var regexp = /(')/gm;
//console.log(str);
console.log(str.replace(regexp, '\"'));

/*2. Улучшить шаблон так, чтобы в конструкциях типа aren't одинарная кавычка не заменялась на двойную.*/

const str1 = 'Present Simple: He said, \'I drive a car\'. - Past Simple: He said that he drove a car. Present Continuous:  She said, \'I\'m working\'. - Past Continuous:  She said that she was working. Present Perfect:  They said, \'We\'ve cooked dinner\'. - Past Perfect:  They said that they\'d cooked dinner.';
var regexp1 = /('\B)|(\B')/gm;
//console.log(str1);
console.log(str1.replace(regexp1, '\"'));

/*3. *Создать форму обратной связи с полями: Имя, Телефон, E-mail, текст, кнопка Отправить. При нажатии на кнопку Отправить произвести валидацию полей/
Если одно из полей не прошло валидацию, необходимо выделить это поле красной рамкой и сообщить пользователю об ошибке.*/

function testForm() {

    //Имя содержит только буквы
    let name = document.getElementsByClassName('name'),
    regexpName = /[A-Za-z]/,
    resultTestName = regexpName.test(name);

    //Телефон имеет вид +7(000)000-0000
    let tel = document.getElementsByClassName('tel'), 
    regexpTel = /\+7\(\d{3}\)\d{3}-\d{4}/,
    resultTestTel = regexpTel.test(tel);
    
    //E-mail имеет вид mymail@mail.ru, или my.mail@mail.ru, или my-mail@mail.ru
    let mail = document.getElementsByClassName('mail'),
    regexpMail = /\w+@[a-z]{4}\.ru/,
    resultTestMail = regexpMail.test(mail);

    //Текст произвольный
    let text = document.getElementsByClassName('text');
    var regexpText = /\w|\W/,
    resultTestText = regexpText.test(text);

    return resultTestName, resultTestTel, resultTestMail, resultTestText;
};
