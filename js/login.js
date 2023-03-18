//our list of users
let users = ["admin", "Andrew", "Zuhair", "Murphy"];
//username field from login.html
let usernameField = document.querySelector("#login-username");
//submit button from login.html
let usernameSubmit = document.querySelector("#login-button");
usernameSubmit.addEventListener("click", logUser);

function logUser() {
    //get the username from the username field
    let username = usernameField.value;
    //find out which position corresponds to the given username
    let pos = -1;
    for (let i = 0; i < users.length; ++i) {
        if (username === users[i]) {
            pos = i;
        }
    }
    //if the username is not in our list of users,
    //alert the user and terminate the function
    if (pos === -1) {
        alert("Please enter a valid username.");
        localStorage.removeItem("current-user");
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

function getUser() {
    //get who the current user is from local storage
    //the user is set to "none" if the no one is logged in
    let username = localStorage.getItem("current-user");
    if (username === null) {
        return "none";
    }
    return username;
}