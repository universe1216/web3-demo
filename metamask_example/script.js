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

var abi = [{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"previousOwner","type":"address"},{"indexed":true,"name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"}];

var address = "0x4e72770760c011647d4873f60a3cf6cdea896cd8";
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

	var input = getTextInput();

	contractInstance.transferOwnership(input, {"from": acc}, function(err, res){
		if(!err){
			displayMessage("Success! Transaction hash: " + res.valueOf());
		} else {
			displayMessage("Something went wrong. Are you sure that you are the current owner?");
		}
	});
}

function onSecondButtonPressed(){
	updateAccount();	

	contractInstance.owner.call({"from": acc}, function(err, res) {
		if(!err){
			displayMessage("The current owner is " + res.valueOf());
		} else {
			displayMessage("Something went horribly wrong. Deal with it:", err);
		}
	});
}
