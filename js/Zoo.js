/**
 * Created by Myself on 01.10.2016.
 */
//задаем значения по умолчанию
function defaultValues() {
    /*
    var newDiv = document.createElement("div");
    var newDivText = document.createTextNode("w");
    newDiv.appendChild(newDivText);
    var divBody = document.getElementById("volf1").firstChild;
    divBody.appendChild(newDiv);


    document.div.innerHTML; // читаем текущее содержимое
    document.div.innerHTML = a; // заменяем содержимое
*/


/*
    var a = randomInteger(1,6);
    /*
    var num = document.getElementsByClassName('numEat').length;
    alert(num);
    */
    /*
    var arr = new Array();
    var arr = document.getElementsByClassName('numEat');
    for (var i = 0; i < arr.length; i++){
        document.getElementsByClassName(arr[i]).innerHTML = a;
    }*/

    var a = [1,2,3,4,5,6,7,8,9,9];
    var numEatArr = ["numEat1", "numEat2", "numEat3", "numEat4", "numEat5", "numEat6", "numEat7", "numEat8", "numEat9", "numEat10"];
    for (var i = 0; i < numEatArr.length; i++) {
        document.getElementById(numEatArr[i]).innerHTML = randomInteger(1,6);
    }

    var numWeaterArr = ["numWeater1", "numWeater2", "numWeater3", "numWeater4", "numWeater5", "numWeater6", "numWeater7", "numWeater8", "numWeater9", "numWeater10"];

    for (var i = 0; i < numWeaterArr.length; i++) {
        document.getElementById(numWeaterArr[i]).innerHTML = randomInteger(1,6);
    }
}
function randomInteger(min, max) {
    var rand = min + Math.random() * (max + 1 - min);
    rand = Math.floor(rand);
    return rand;
}
//кормление
function eating() {
    var elements = document.querySelectorAll('div.animal > div.numEat');
    var numEatArr = ["numEat1", "numEat2", "numEat3", "numEat4", "numEat5", "numEat6", "numEat7", "numEat8", "numEat9", "numEat10"];
    for (var i = 0; i < elements.length; i++) {
        var result = (elements[i].innerHTML-0) + 1;
        var x = String(result);
        document.getElementById(numEatArr[i]).innerHTML = x;



    }
}

