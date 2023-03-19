let titleField = document.querySelector("#review-book-choice");
let textField = document.querySelector("#review-input");
let reviewSubmit = document.querySelector("#review-submit");

reviewSubmit.addEventListener("click", storeReview);

function storeReview() {
    let title = titleField.value;
    let reviewText = textField.value;
    textField.value = "";
    if (getUser() === "none") {
        alert("Please log in first.");
        return;
    }
    let reviewNum = localStorage.getItem("numReviews");
    if (reviewNum === null) {
        reviewNum = 1;
    } else {
        reviewNum = Number(reviewNum) + 1;
    }
    localStorage.setItem("numReviews", String(reviewNum));
    localStorage.setItem("reviewUser" + String(reviewNum), getUser());
    localStorage.setItem("reviewTitle" + String(reviewNum), title);
    localStorage.setItem("reviewText" + String(reviewNum), reviewText);
}