//title field for the review
let titleField = document.querySelector("#review-book-choice");
//text field for the review
let textField = document.querySelector("#review-input");
//submit button for the review
let reviewSubmit = document.querySelector("#review-submit");
reviewSubmit.addEventListener("click", storeReview);

function storeReview() {
    //get the title and the text for the review
    let title = titleField.value;
    let reviewText = textField.value;
    textField.value = "";
    //if the user is not logged in, alert the user and terminate the function
    if (getUser() === "none") {
        alert("Please log in first.");
        return;
    }
    //if the text for the review is empty, alert the user and terminate the function
    if (reviewText === "") {
        alert("Please enter a review.");
        return;
    }
    //get the number for the review
    let reviewNum = localStorage.getItem("numReviews");
    if (reviewNum === null) {
        reviewNum = 1;
    } else {
        reviewNum = Number(reviewNum) + 1;
    }
    //store the review to local memory
    localStorage.setItem("numReviews", String(reviewNum));
    localStorage.setItem("reviewUser" + String(reviewNum), getUser());
    localStorage.setItem("reviewTitle" + String(reviewNum), title);
    localStorage.setItem("reviewText" + String(reviewNum), reviewText);
    alert("Submitted!");
}