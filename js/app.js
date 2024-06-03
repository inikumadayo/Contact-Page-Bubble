const fname = document.querySelector("#fname").value;
const lname = document.querySelector("#lname").value;
const email = document.querySelector("#emailuser").value;
const msg = document.querySelector("#message-area").value;
const send = document.querySelector("#submit-button");

const emty = "";
const script = "<script>";

send.addEventListener(`click`, function () {
  if (fname === emty || lname === emty || email === emty || msg === emty) {
    alert("First name, Last name, Email and Message must not be empty!!");
    window.location.reload();
  } else if (
    fname.contains(script) ||
    lname.contains(script) ||
    email.contains(script) ||
    msg.contains(script)
  ) {
    alert("You can't write scripts here!!!");
    window.location.reload();
  } else {
    // Write your action to execute the value here
    // fname -> first name value
    // lname -> last name value
    // email -> email value
    // msg -> message value
  }
});
