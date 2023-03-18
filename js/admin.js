//book fields from admin.html
let bookFields = []
for (let i = 0; i < 5; ++i) {
    let cur_selector = "[name='book" + String(i + 1) + "']";
    bookFields.push(document.querySelector(cur_selector));
}
//submit button from admin.html
let bookSubmit = document.querySelector("#submit-button")
bookSubmit.addEventListener("click", getOrder);

function getOrder() {
    //push all of the books to a list
    let bookList = [];
    for (let i = 0; i < 5; ++i) {
        bookList.push(bookFields[i].value);
    }
    //check for duplicates
    for (let i = 0; i < 5; ++i) {
        for (let j = 0; j < i; ++j) {
            if (bookList[i] === bookList[j]) {
                alert("The book \"" + bookList[i] + "\" has been selected twice. Please make another selection.");
                return;
            }
        }
    }
    //store the order in local storage
    for (let i = 0; i < 5; ++i) {
        localStorage.setItem("book" + String(i + 1), bookList[i]);       
    }
}