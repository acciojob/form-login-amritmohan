function getFormvalue(event) {
    //Write your code here
	event.preventDefault();
	let form = getElementById(form1);
	let firstName = forms.elements["fname"].value.trim();
	let lastName = forms.elements["lname"].value.trim();

	if(firstName === "" || lastName === ""){
		alert("Please enter both firstname and lastname.")
		return;
	}
	alert(`${firstName} ${lastName}`);
}
