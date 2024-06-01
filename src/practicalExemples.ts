const books = ["1984", "Brave the world", "Fahrenheit 451"];

// Ici on fait un union type car dans la boucle la variable peut-être "undefined" si on ne trouve pas de livre
let foundBook: string | undefined;

for (let book of books) {
	if (book === "1984") {
		foundBook = book;
		foundBook = foundBook.toUpperCase();
		break;
	}
}

console.log(foundBook?.length);
