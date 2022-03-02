
function enquiry() {
    let output = document.getElementById("myform");
    output.style.display = "block";

}
function mybutton() {
    let userbox = document.getElementById("myinputname").value;
    let output = document.getElementById("myform");
    if (userbox == "" || userbox == null) {
        alert("Please Enter Your Details....!")
    }
    else {
        output.style.display = "none";
        alert("Thank you ")

    }
    userbox = "";
}
function closeForm() {
    let output = document.getElementById("myform");
    output.style.display = "none";
}

