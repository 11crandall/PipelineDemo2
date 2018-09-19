/**
 * 
 */

let checkSessionUrl = "http://localhost:8080/ServletLoginDemo/session";

function sendAjaxGet(url, callback){
	let xhr = new XMLHttpRequest || new ActiveXObject("Microsoft.HTTPRequest");
	xhr.onreadystatechange = function(){
		if (this.readyState===4 && this.status===200)
			callback(this);
	}
	xhr.open("get", url);
	xhr.send();
}

sendAjaxGet(checkSessionUrl, populateUser);

function populateUser(xhr){
	let response = JSON.parse(xhr.response);
	if (response.username != "null")
		document.getElementById("user").innerHTML = "You are logged in as: " + response.username;
	else
		window.location = "http://localhost:8080/ServletLoginDemo/";
}