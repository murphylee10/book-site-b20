//username field from login.html
let usernameField = document.querySelector("#login-username");
//submit button from login.html
let usernameSubmit = document.querySelector("#login-button");
usernameSubmit.addEventListener("click", logUser);

/* this function logs in the user according to the "username" field */
function logUser() {
    //get the username from the username field
    let username = usernameField.value;
    //if the username is empty
    //alert the user and terminate the function
    if (username === "") {
        alert("Please enter an username.");
        return;
    }
    //store the username in local storage 
    localStorage.setItem("current-user", username);
    //redirect the page
    if (username === "admin") {
        location.replace("admin.html");
    } else {
        location.replace("book-info.html");
    }
}