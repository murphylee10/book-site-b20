/* This function gets who the current user is from local storage */
function getUser() {
    //the user is set to "none" if the no one is logged in
    let username = localStorage.getItem("current-user");
    if (username === null) {
        return "none";
    }
    return username;
}