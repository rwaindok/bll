function e_button(text, onc=""){
	let butt = "";
    butt += "<button id='b" + id + "'";
    id++;
    if(onc!=""){
    	butt += " onclick='" + onc + "'";
    }
    butt += ">" + text + "</button>";
    return butt;
}

function e_tabel(arr, head = false){
    let temp = "";
    temp += "<tabel id='t" + id + "'>";
    id++;
    for(let i = 0; i<arr.length; i++){
        temp += "<tr>" + arr[i] + "</tr>";
    }
    temp += "</tabel>";
}

function e_input(){
    let temp = "";
    temp += "<input></input>"
}