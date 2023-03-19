/* This page controls the order that the books are loaded in the home page */

const main_section = document.querySelector('.main-section');

// Load books
for (let i = 0; i < 5; i++) {
    console.log(getBook(i));
    addBookSection(getBook(i));
}

function addBookSection(title) {
    book_data = window.localStorage.getItem('bookData');
    if (book_data == null) {
        book_data = bookData;
    }
    // create display div to hold book information
    let bookDisplay = document.createElement('div');
    bookDisplay.classList.add('book-display');

    // add title, author, and image to div
    let title_el = document.createElement('h2');
    title_el.classList.add('book-title');
    title_el.innerHTML = title;

    let author_el = document.createElement('h4');
    author_el.classList.add('book-author');
    author_el.innerHTML = `By ${book_data[title]["author"]}`;

    let img_div = document.createElement('div');
    img_div.classList.add('img_container');
    let img = document.createElement('img');
    img.src = book_data[title]['img-url'];
    img.classList.add('book-image');
    let middle_div = document.createElement('div');
    middle_div.classList.add('middle');
    let text_div = document.createElement('div');
    text_div.classList.add('text');
    let a_el = document.createElement('a');
    a_el.href = `book-info.html#book-title${book_data[title]['rel']}`;
    a_el.innerHTML = "More info"
    
    // Attach elements
    text_div.appendChild(a_el);
    middle_div.appendChild(text_div);
    img_div.appendChild(img);
    img_div.appendChild(middle_div);
    bookDisplay.appendChild(title_el);
    bookDisplay.appendChild(author_el);
    bookDisplay.appendChild(img_div);

    main_section.appendChild(bookDisplay);



}