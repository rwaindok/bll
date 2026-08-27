//global vars
id = 1;
func = [];
verl = [];

setup()


function setup(){
	document.getElementById("s0").innerHTML = e_button("start", "start()")
}

function start(){
	console.log("start");
	func = get_func();
	verl = [["", ...func[0], "=", ...func[1], "|" + e_input()]];//tabelle
	let temp = "";
	temp += e_tabel(verl);
	temp += "<br>";
	temp += e_button("restart", "start()");
	console.log(structuredClone(temp));
	document.getElementById("s0").innerHTML = temp;
}