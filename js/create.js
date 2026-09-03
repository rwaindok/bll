"use strict"

function e_button(text, onc=""){
	let butt = "";
    butt += "<button id='b" + id + "'";
    id++;
    if(onc!=""){
    	butt += " onclick='" + onc + "'";
    }
    butt += ">" + text + "</button>";
    console.log(structuredClone(butt));
    return butt;
}

function e_table(arr, head = false){
    let temp = "";
    temp += "<table id='t" + id + "'>";
    id++;
    for(let i = 0; i < arr.length; i++){ // Zeilen
        temp += "<tr>";
        for(let j = 0; j < arr[i].length; j++){ //Zellen
            temp += "<td>" + arr[i][j] + "</td>";
        }
        temp += "</tr>";
    }
    temp += "</table>";
    console.log(structuredClone(temp));
    return temp;
}

function e_input(){
    let temp = "";
    temp += "<input id='i" + id + "' onkeydown='if(event.keyCode===13) step(this.value)'></input>";
    id++;
    console.log(structuredClone(temp));
    return temp;
}