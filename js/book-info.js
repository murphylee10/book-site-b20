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

/* dynamically add each book section */
for (let i = 0; i < 5; i++) {
    console.log(getBook(i));
    addSection(getBook(i));
}

/* add section dynamically for each book */
function addSection(title) {
    let main_section = document.querySelector('.main-section');
    book_data = window.localStorage.getItem('bookData');
    if (book_data == null) {
        book_data = bookData;
    }
    // create display div to hold book information
    let bookDisplay = document.createElement('div');
    bookDisplay.classList.add('book-display');

    let leftDisplay = document.createElement('div');
    leftDisplay.classList.add('book-left-display');

    // add title, author, and image to div
    let title_el = document.createElement('h2');
    title_el.id = `book-title${book_data[title]['rel']}`;
    title_el.innerHTML = title;
    
    let img = document.createElement('img');
    img.src = book_data[title]['img-url'];
    img.classList.add('book-image');
    
    let author_el = document.createElement('h4');
    author_el.classList.add('book-author');
    author_el.innerHTML = `By ${book_data[title]["author"]}`;

    // add to left display
    leftDisplay.appendChild(title_el);
    leftDisplay.appendChild(img);
    leftDisplay.appendChild(author_el);

    // other information
    let rightDisplay = document.createElement('div');
    rightDisplay.classList.add('book-right-display');

    let num_pages_el = document.createElement('p');
    num_pages_el.classList.add('book-num-pages');
    num_pages_el.innerHTML = `<b>Number of Pages</b>: ${book_data[title]['num-pages']}`;

    let genres_el = document.createElement('p');
    genres_el.classList.add('book-genres');
    genres_el.innerHTML = `<b>Genres</b>: ${book_data[title]['genres']}`;

    let publication_el = document.createElement('p');
    publication_el.classList.add('book-publication-date');
    publication_el.innerHTML = `<b>Publication Date</b>: ${book_data[title]['publication-date']}`;

    let book_summary_el = document.createElement('p');
    book_summary_el.classList.add('book-summary');
    book_summary_el.innerHTML = `<b>Summary</b>: ${book_data[title]['book-summary']}`;
    
    // add to right display
    rightDisplay.appendChild(num_pages_el);
    rightDisplay.appendChild(genres_el);
    rightDisplay.appendChild(publication_el);
    rightDisplay.appendChild(book_summary_el);

    // Attach elements
    bookDisplay.appendChild(leftDisplay);
    bookDisplay.appendChild(rightDisplay);

    main_section.insertBefore(bookDisplay, document.querySelector('.review-header'));
}