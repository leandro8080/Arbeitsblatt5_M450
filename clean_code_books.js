let books = [
	{ id: 1, name: "Der alte Mann und das Meer", price: 10.5 },
	{ id: 2, name: "Moby Dick", price: 12.3 },
	{ id: 3, name: "1984", price: 8.5 }
];

function getBookById(id) {
	for (let book of books) {
		if (book.id === id) {
			return book;
		}
	}
	return null;
}

function addBook(name, price) {
	let maxId = 0;
	for (let book of books) {
		if (book.id > maxId) maxId = book.id;
	}
	books.push({ id: maxId + 1, name: name, price: price });
}

function listAllBooks() {
	for (let book of books) {
		console.log(book.name + " - " + book.price + "€");
	}
}

const EXAMPLE_BOOK = getBookById(2);
console.log(EXAMPLE_BOOK);
addBook("Fahrenheit 451", 9.2);
listAllBooks();
