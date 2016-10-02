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

    var numEatArr = ["numEat1", "numEat2", "numEat3", "numEat4", "numEat5", "numEat6", "numEat7", "numEat8", "numEat9", "numEat10"];
    for (var i = 0; i < numEatArr.length; i++) {
        document.getElementById(numEatArr[i]).innerHTML = randomInteger(1,6);
    }

    var numWeaterArr = ["numWeater1", "numWeater2", "numWeater3", "numWeater4", "numWeater5", "numWeater6", "numWeater7", "numWeater8", "numWeater9", "numWeater10"];
    for (var i = 0; i < numWeaterArr.length; i++) {
        document.getElementById(numWeaterArr[i]).innerHTML = randomInteger(1,6);
    }
/*
    var a = randomInteger(1,6);
    d1 = document.getElementById("numEat1");
    d2 = document.getElementById("numEat2");
    d3 = document.getElementById("numEat3");
    d4 = document.getElementById("numEat4");
    d5 = document.getElementById("numEat5");
    d6 = document.getElementById("numEat6");
    d7 = document.getElementById("numEat7");
    d8 = document.getElementById("numEat8");
    d9 = document.getElementById("numEat9");
    d10 = document.getElementById("numEat10");
    d1.innerHTML = a;
    d2.innerHTML = a;
    d3.innerHTML = a;
    d4.innerHTML = a;
    d5.innerHTML = a;
    d6.innerHTML = a;
    d7.innerHTML = a;
    d8.innerHTML = a;
    d9.innerHTML = a;
    d10.innerHTML = a;

    var a = randomInteger(1,6);
    d1 = document.getElementById("numWeater1");
    d2 = document.getElementById("numWeater2");
    d3 = document.getElementById("numWeater3");
    d4 = document.getElementById("numWeater4");
    d5 = document.getElementById("numWeater5");
    d6 = document.getElementById("numWeater6");
    d7 = document.getElementById("numWeater7");
    d8 = document.getElementById("numWeater8");
    d9 = document.getElementById("numWeater9");
    d10 = document.getElementById("numWeater10");
    d1.innerHTML = a;
    d2.innerHTML = a;
    d3.innerHTML = a;
    d4.innerHTML = a;
    d5.innerHTML = a;
    d6.innerHTML = a;
    d7.innerHTML = a;
    d8.innerHTML = a;
    d9.innerHTML = a;
    d10.innerHTML = a;
 */

/*
    var a = document.getElementById("numEatZayaz_0").f;
    var b = a.nodeValue;
    var c = 4;
    b = c;
    */


}
function randomInteger(min, max) {
    var rand = min + Math.random() * (max + 1 - min);
    rand = Math.floor(rand);
    return rand;
}


function eating() {

    var numEatArr = ["numEat1", "numEat2", "numEat3", "numEat4", "numEat5", "numEat6", "numEat7", "numEat8", "numEat9", "numEat10"];

    for (var i = 0; i < numEatArr.length; i++) {
        alert(numEatArr[i]);
        document.getElementById(numEatArr[i]).innerHTML = result;
    }
}