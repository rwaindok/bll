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

function e_tabel(arr, head = false){
    let temp = "";
    temp += "<tabel id='t" + id + "'>";
    id++;
    for(let i = 0; i < arr.length; i++){ // Zeilen
        temp += "<tr>";
        for(let j = 0; j < arr[i].length; j++){ //Zellen
            temp += "<td>" + arr[i][j] + "</td>";
        }
        temp += "</tr>";
    }
    temp += "</tabel>";
    console.log(structuredClone(temp));
    return temp;
}

function e_input(){
    let temp = "";
    temp += "<input></input>"
    console.log(structuredClone(temp));
    return temp;
}