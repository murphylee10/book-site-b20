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

function displayReview(num) {
    let main_section = document.querySelector(".main-section");
    let numReviews = getNumReviews();
    let review_container = document.createElement('div');
    review_container.classList.add('review-container');
    let review_title = document.createElement('h2');
    let review_user = document.createElement('h3');
    let review_content = document.createElement('p');

    review_title.classList.add('review-title');
    review_user.classList.add('review-user');
    review_content.classList.add('review-content');

    review_title.innerHTML = `Review of: ${getReviewTitle(num)}`
    review_user.innerHTML = `User: ${getReviewUser(num)}`;
    review_content.innerHTML = `${getReviewText(num)}`;

    review_container.appendChild(review_title);
    review_container.appendChild(review_user);
    review_container.appendChild(review_content);
    main_section.appendChild(review_container);
}

let position = document.querySelector("section.main-section");
let numReviews = getNumReviews();
for (let i = 1; i <= numReviews; ++i) {
    // let new_html = "";
    // new_html += "<h2>Review of: " + getReviewTitle(i) +  "</h2>";
    // new_html += "<h3>By: " + getReviewUser(i) + "</h3>";
    // new_html += "<p>" + getReviewText(i) + "</p>"
    // position.insertAdjacentHTML("beforeend", new_html);
    displayReview(i);
}

