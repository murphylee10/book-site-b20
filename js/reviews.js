function getNumReviews() {
    let numReviews = localStorage.getItem("numReviews");
    if (numReviews === null) numReviews = 0;
    else numReviews = Number(numReviews);
    return numReviews;
}

function getReviewUser(reviewNum) {
    //precondition: there exists a review with number reviewNum
    return localStorage.getItem("reviewUser" + String(reviewNum));
}

function getReviewTitle(reviewNum) {
    //precondition: there exists a review with number reviewNum
    return localStorage.getItem("reviewTitle" + String(reviewNum));
}

function getReviewText(reviewNum) {
    return localStorage.getItem("reviewText" + String(reviewNum));
}

let position = document.querySelector("section.main-section");
let numReviews = getNumReviews();
for (let i = 1; i <= numReviews; ++i) {
    let new_html = "";
    new_html += "<h2>Review of: " + getReviewTitle(i) +  "</h2>";
    new_html += "<h3>By: " + getReviewUser(i) + "</h3>";
    new_html += "<p>" + getReviewText(i) + "</p>"
    position.insertAdjacentHTML("beforeend", new_html);
}