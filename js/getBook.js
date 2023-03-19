function getBook(bookNum) {
    //returns the book numbered bookNum in the list
    //precondition: 1 <= bookNum <= 5
    const defaultOrder = ["The Maid", "Sea of Tranquility", "Hidden Pictures", "House of Sky and Breath", "The Final Gambit"];
    let bookTitle = localStorage.getItem("book" + String(bookNum + 1));
    if (bookTitle !== null) {
        return bookTitle;
    }
    return defaultOrder[bookNum];
}