let products = [
	{ id: 1, name: "Laptop", price: 999 },
	{ id: 2, name: "Smartphone", price: 599 },
	{ id: 3, name: "Headphones", price: 199 }
];

function getProductById(id) {
	for (let product of products) {
		if (product.id == id) return product;
	}
	return null;
}

function addProduct(name, price) {
	let maxId = 0;
	for (let product of products) {
		if (product.id > maxId) maxId = product.id;
	}
	products.push({ id: maxId + 1, name: name, price: price });
}

function listAllProducts() {
	for (let product of products) {
		console.log(product.name + " price: " + product.price + "€");
	}
}

const EXAMPLE_PRODUCT = getProductById(2);
console.log(EXAMPLE_PRODUCT);
addProduct("Tablet", 399);
listAllProducts();
