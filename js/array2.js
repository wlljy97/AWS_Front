window.onload = () => {

    loadBookList();

};

const bookList = new Array();

bookList.push({
    bookName: "도서명1",
    author: "저자1",
    publisher: "출판사1"
});
bookList.push({
    bookName: "도서명2",
    author: "저자2",
    publisher: "출판사2"
});
bookList.push({
    bookName: "도서명3",
    author: "저자3",
    publisher: "출판사3"
});



const loadBookList = () => {
    const bookList01 = document.querySelector(".book-list");

    bookList01.innerHTML = bookList.map(book => {
        return `
            <li>
                <span>${book.bookName}</span> |
                <span>${book.author}</span> |
                <span>${book.publisher}</span>
            </li>
        `;

    }).join("");

};

// 도서를 추가 하는 작업
const addBookOnClickHandle = () => {
    const book = {
        bookName: document.querySelector(".book-name").value, // input에 있는 value를 가져온다.
        author: document.querySelector(".author").value,
        publisher: document.querySelector(".publisher").value
    }

    bookList.push(book);
    loadBookList();
};