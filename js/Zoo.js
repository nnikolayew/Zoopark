/**
 * Created by Myself on 01.10.2016.
 */
//задаем значения по умолчанию
function defaultValues() {

    var numEatArr = ["numEat1", "numEat2", "numEat3", "numEat4", "numEat5", "numEat6", "numEat7", "numEat8", "numEat9", "numEat10"];
    var numWeaterArr = ["numWeater1", "numWeater2", "numWeater3", "numWeater4", "numWeater5", "numWeater6", "numWeater7", "numWeater8", "numWeater9", "numWeater10"];
    var elementsStatus = document.querySelectorAll('div.animal > div.numStatusAnimals');
    var numStatusAnimalsArr = ["numStatusAnimals1","numStatusAnimals2","numStatusAnimals3","numStatusAnimals4","numStatusAnimals5","numStatusAnimals6","numStatusAnimals7","numStatusAnimals8","numStatusAnimals9","numStatusAnimals10",];

    for (var i = 0; i < numEatArr.length; i++) {
        document.getElementById(numEatArr[i]).innerHTML = randomInteger(1,6);
    }

    for (var i = 0; i < numWeaterArr.length; i++) {
        document.getElementById(numWeaterArr[i]).innerHTML = randomInteger(1,6);
    }

    for (var i = 0; i <elementsStatus.length; i++) {
        var result = elementsStatus[i].innerHTML;
        var str = "Сыт";
        document.getElementById(numStatusAnimalsArr[i]).innerHTML = str;
    }
}

function randomInteger(min, max) {
    var rand = min + Math.random() * (max + 1 - min);
    rand = Math.floor(rand);
    return rand;
}

function logClear() {
    document.getElementsByClassName("numEat").value ='0';
}
/*
//кормление
function eating() {

    var h = [];

    alert(elements.length);
    for(var j = 0; j < 4; j++){
        var f = elements[i].innerHTML-0;
        var s = Math.floor(Math.random() * elements.length);
        h[i] = s;
    }
    var elements = document.querySelectorAll('div.animal > div.numEat');
    var numEatArr = ["numEat1", "numEat2", "numEat3", "numEat4", "numEat5", "numEat6", "numEat7", "numEat8", "numEat9", "numEat10"];
    var numWeaterArr = ["numWeater1","numWeater2","numWeater3","numWeater4","numWeater5","numWeater6","numWeater7","numWeater8","numWeater9","numWeater10"];

    for (var i = 0; i <elements.length; i++) {
        var result = (elements[i].innerHTML-0) + 1;
        var x = String(result);
        document.getElementById(numEatArr[i]).innerHTML = x;
    }

}
*/
function eating() {

    var elementsEat = document.querySelectorAll('div.animal > div.numEat');
    var elementsWeater = document.querySelectorAll('div.animal > div.numWeater');
    var elementsStatus = document.querySelectorAll('div.animal > div.numStatusAnimals');

    var numEatArr = ["numEat1", "numEat2", "numEat3", "numEat4", "numEat5", "numEat6", "numEat7", "numEat8", "numEat9", "numEat10"];
    var numWeaterArr = ["numWeater1","numWeater2","numWeater3","numWeater4","numWeater5","numWeater6","numWeater7","numWeater8","numWeater9","numWeater10"];
    var numStatusAnimalsArr = ["numStatusAnimals1","numStatusAnimals2","numStatusAnimals3","numStatusAnimals4","numStatusAnimals5","numStatusAnimals6","numStatusAnimals7","numStatusAnimals8","numStatusAnimals9","numStatusAnimals10",];

    for (var i = 0; i <elementsEat.length; i++) {
        var result = (elementsEat[i].innerHTML-0) + 1;
        var x = String(result);
        document.getElementById(numEatArr[i]).innerHTML = x;
    }

    for (var i = 0; i <elementsWeater.length; i++) {
        var result = (elementsWeater[i].innerHTML-0) + 1;
        var y = String(result);
        document.getElementById(numWeaterArr[i]).innerHTML = y;
    }

    for (var i = 0; i <elementsStatus.length; i++) {
        var result = elementsStatus[i].innerHTML;
        var str = "Сыт";
        document.getElementById(numStatusAnimalsArr[i]).innerHTML = str;
    }

}