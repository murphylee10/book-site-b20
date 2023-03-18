//our list of users
//note that "admin" is user 0
let users = ["admin", "Andrew", "Zuhair", "Murphy"];
//username field from login.html
let usernameField = document.querySelector("#login-username");
//username button from login.html
let usernameSubmit = document.querySelector("#login-button");
usernameSubmit.addEventListener("click", logUser);

let tmp = document.querySelector("#tmp");
tmp.innerHTML = String(getUser());

function logUser() {
    //get the username from the username field
    let username = usernameField.value;
    //find out which user corresponds to the given username
    let user = -1;
    for (let i = 0; i < users.length; ++i) {
        if (username === users[i]) {
            user = i;
        }
    }
    //if the user is not in our list of users,
    //alert the user and terminate the function
    if (user === -1) {
        alert("Please enter a valid username");
        localStorage.clear();
        return;
    }
    //store the user in local storage 
    localStorage.setItem("current-user", String(user));
    //redirect the page
    if (user === 0) {
        location.replace("admin.html");
    } else {
        location.replace("book-info.html");
    }
}

function getUser() {
    //get who the current user is from local storage
    //the user is set to -1 if the user is not logged in
    let strUser = localStorage.getItem("current-user");
    if (strUser === null) {
        return -1;
    }
    return parseInt(strUser);
}