function getUser() {
    //get who the current user is from local storage
    //the user is set to "none" if the no one is logged in
    let username = localStorage.getItem("current-user");
    if (username === null) {
        return "none";
    }
    return username;
}