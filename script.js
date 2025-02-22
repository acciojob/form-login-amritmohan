document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("form1").addEventListener("submit", getFormvalue);
});

function getFormvalue(event) {
    event.preventDefault(); // Prevent form from refreshing

    let form = document.getElementById("form1");
    let firstName = form.elements["fname"].value.trim();
    let lastName = form.elements["lname"].value.trim();

    if (firstName === "" || lastName === "") {
        alert("Please enter both first name and last name.");
        return;
    }

    alert(`${firstName} ${lastName}`);
}
