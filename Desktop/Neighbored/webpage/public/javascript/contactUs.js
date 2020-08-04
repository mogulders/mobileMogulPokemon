{
  // tried to create block level variables so that they dont appear on the window document.
  // I know that the video used "let" as the variable declaration to get it to work, Im not sure how it works with const

  const submitButton = document.getElementById("submit");
  const itemInput = document.querySelector('input[type="text"]');
  const firstNameField = document.getElementById("firstName");
  const lastNameField = document.getElementById("lastName");
  const emailField = document.getElementById("Email");
  const commentsField = document.getElementById("comments");
  const form = document.getElementById("form");
  var fieldsetTitle = document.getElementById("fieldsetHeader");
  var messageBorder = document.getElementById("comments");

  form.addEventListener("submit", e => {
    let messages = [];
    if (firstNameField.value === "" || firstNameField.value == null) {
      console.log(firstNameField.value);
      messages.push("Please Fill In First Name");
      firstNameField.style.borderColor = "red";
      messageBorder.style.borderWidth = "2px";
    } else {
      firstNameField.style.borderColor = "#3fb54f";
      messageBorder.style.borderWidth = "2px";
    }
    if (lastNameField.value === "" || lastNameField.value == null) {
      console.log(lastNameField.value);
      messages.push("Please Fill In Last Name");
      lastNameField.style.borderColor = "red";
      messageBorder.style.borderWidth = "2px";
    } else {
      lastNameField.style.borderColor = "#3fb54f";
      messageBorder.style.borderWidth = "2px";
    }
    if (emailField.value === "" || emailField.value == null) {
      console.log(emailField.value);
      messages.push("Please Fill In Email Name");
      emailField.style.borderColor = "red";
      messageBorder.style.borderWidth = "2px";
    } else {
      emailField.style.borderColor = "#3fb54f";
      messageBorder.style.borderWidth = "2px";
    }
    if (commentsField.value === "" || commentsField.value == null) {
      console.log(commentsField.value);
      messages.push("Please Leave A Message");
      commentsField.style.borderColor = "red";
      messageBorder.style.borderWidth = "2px";
    } else {
      commentsField.style.borderColor = "#3fb54f";
      messageBorder.style.borderWidth = "2px";
    }

    if (messages.length > 0) {
      e.preventDefault();
      fieldsetTitle.textContent = messages[0];
    }

    if (
      firstNameField.value !== "" &&
      lastNameField.value !== "" &&
      emailField.value !== "" &&
      commentsField.value !== ""
    ) {
      fieldsetTitle.textContent = "Thank You!";
    }
  });
}
