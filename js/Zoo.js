/**
 * Created by Myself on 01.10.2016.
 */

var elementsEat = document.querySelectorAll('div.animal > div.numEat');
var elementsWeater = document.querySelectorAll('div.animal > div.numWeater');
var elementsStatus = document.querySelectorAll('div.animal > div.numStatusAnimals');

var numEatArr = ["numEat1", "numEat2", "numEat3", "numEat4", "numEat5", "numEat6", "numEat7", "numEat8", "numEat9", "numEat10"];
var numWeaterArr = ["numWeater1","numWeater2","numWeater3","numWeater4","numWeater5","numWeater6","numWeater7","numWeater8","numWeater9","numWeater10"];
var numStatusAnimalsArr = ["numStatusAnimals1","numStatusAnimals2","numStatusAnimals3","numStatusAnimals4","numStatusAnimals5","numStatusAnimals6","numStatusAnimals7","numStatusAnimals8","numStatusAnimals9","numStatusAnimals10",];

//кормление
function eating() {

    for(var i = 0; i < 4; i++){
        var rand = Math.floor(Math.random() * elementsEat.length);
        var result = (elementsEat[rand].innerHTML-0) + 1;
        var x = String(result);
        document.getElementById(numEatArr[rand]).innerHTML = x;
    }

    for (var i = 0; i < 4; i++) {
        var rand = Math.floor(Math.random() * elementsEat.length);
        var result = (elementsWeater[rand].innerHTML-0) + 1;
        var y = String(result);
        document.getElementById(numWeaterArr[rand]).innerHTML = y;
    }

    for (var i = 0; i <elementsStatus.length; i++) {
        var result = elementsStatus[i].innerHTML;
        var str = "Сыт";
        document.getElementById(numStatusAnimalsArr[i]).innerHTML = str;
    }
}
//задаем значения по умолчанию
function defaultValues() {

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

//сброс всех значений
function logClear() {
      for (var i = 0; i <elementsEat.length; i++) {
        for (var j = 0; j <elementsWeater.length; j++) {
            for (var k = 0; k <elementsStatus.length; k++) {
                document.getElementById(numStatusAnimalsArr[k]).innerHTML = "голоден";
            }
            document.getElementById(numWeaterArr[j]).innerHTML = 0;
        }
        document.getElementById(numEatArr[i]).innerHTML = 0;
    }
}

function timeToEat() {
    for (var i = 0; i <elementsEat.length; i++) {
        var result = (elementsEat[i].innerHTML-0) - 1;
        var x = String(result);
        document.getElementById(numEatArr[i]).innerHTML = x;
    }
}
//var timerId = setInterval(timeToEat, 2000);
