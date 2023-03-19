/* This function gets the total number of reviews that have been submitted for all books */
function getNumReviews() {
    let numReviews = localStorage.getItem("numReviews");
    if (numReviews === null) numReviews = 0;
    else numReviews = Number(numReviews);
    return numReviews;
}

/* This function returns the review corresponding to a given index */
function getReviewUser(reviewNum) {
    //precondition: there exists a review with number reviewNum
    return localStorage.getItem("reviewUser" + String(reviewNum));
}

/* This function returns the review title corresponding to a given index */
function getReviewTitle(reviewNum) {
    //precondition: there exists a review with number reviewNum
    return localStorage.getItem("reviewTitle" + String(reviewNum));
}

/* This function returns the review content corresponding to a given index */
function getReviewText(reviewNum) {
    return localStorage.getItem("reviewText" + String(reviewNum));
}

/* populate book-info.html with all of the reviews*/
let position = document.querySelector("section.main-section");
let numReviews = getNumReviews();
for (let i = 1; i <= numReviews; ++i) {
    displayReview(i);
}

/* This fucntion dynamically populates book-info.html with reviews */
function displayReview(num) {
    // main section element
    let main_section = document.querySelector(".main-section");

    // review-holder
    let review_container = document.createElement('div');
    review_container.classList.add('review-container');
    let review_title = document.createElement('h2');
    let review_user = document.createElement('h3');
    let review_content = document.createElement('p');

    // add corresponding classes
    review_title.classList.add('review-title');
    review_user.classList.add('review-user');
    review_content.classList.add('review-content');

    // set content with respective information
    review_title.innerHTML = `Review of: ${getReviewTitle(num)}`
    review_user.innerHTML = `User: ${getReviewUser(num)}`;
    review_content.innerHTML = `${getReviewText(num)}`;

    // link elements
    review_container.appendChild(review_title);
    review_container.appendChild(review_user);
    review_container.appendChild(review_content);
    main_section.appendChild(review_container);
}



