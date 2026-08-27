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