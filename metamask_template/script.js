//this function will be called when the whole page is loaded
window.onload = function(){
	if (typeof web3 === 'undefined') {
		//if there is no web3 variable
		displayMessage("Error! Are you sure that you are using metamask?");
	} else {
		displayMessage("Welcome to our DAPP!");
		init();
	}
}

var contractInstance;

var abi = []; //TODO

var address = ""; //TODO
var acc;

function init(){
	var Contract = web3.eth.contract(abi);
	contractInstance = Contract.at(address);
	updateAccount();
}

function updateAccount(){
	//in metamask, the accounts array is of size 1 and only contains the currently selected account. The user can select a different account and so we need to update our account variable
	acc = web3.eth.accounts[0];
}

function displayMessage(message){
	var el = document.getElementById("message");
	el.innerHTML = message;
}

function getTextInput(){
	var el = document.getElementById("input");
	
	return el.value;
}

function onButtonPressed(){
	updateAccount();

	//TODO
}

function onSecondButtonPressed(){
	updateAccount();	

	//TODO
}
