export interface ProductVariant {
	label: string;
	price: string;
	image: string;
	originalPrice?: string;
}

export interface Product {
	name: string;
	price: string;
	image: string;
	originalPrice?: string;
	variants?: ProductVariant[];
	slug: string;
	description?: string;
	category: string;
}

export const categories = ["Blind Bags", "ASMR Fidget Toys", "Stickers", "Paper Squishies"];

export const products: Product[] = [
	{ name: "Capybara Blind Bag", price: "$1.99", image: "/capybara-blind-bag.jpg", slug: "capybara-blind-bag", category: "Blind Bags", description: "A cute capybara blind bag surprise! Each bag contains a unique kawaii capybara mystery toy." },
	{ name: "ASMR Fidget Toys", price: "$5.99", originalPrice: "$7.99", image: "/product-2.jpg", slug: "asmr-fidget-toys", category: "ASMR Fidget Toys", variants: [{ label: "Pom Pom Purrin", price: "$1.00", image: "/fidget-pompom.jpg" }, { label: "Strawberry", price: "$1.00", image: "/fidget-strawberry.jpg" }, { label: "Kawaii 7-piece", price: "$5.99", image: "/product-2.jpg", originalPrice: "$7.99" }], description: "Cute handmade ASMR fidget toys. Choose from Pom Pom Purrin, Strawberry, or the 7-pack!" },
	{ name: "Kawaii Animal Stickers", price: "$0.50", image: "/product-3-2piece.jpg", slug: "kawaii-animal-stickers", category: "Stickers", variants: [{ label: "1-piece", price: "$0.25", image: "/sticker-axolotl.jpg" }, { label: "2-piece", price: "$0.50", image: "/product-3-2piece.jpg" }, { label: "3-piece", price: "$1.00", image: "/product-3-5piece.jpg" }, { label: "5-piece", price: "$1.50", image: "/product-3.jpg" }], description: "Adorable kawaii animal stickers. Available in 1-piece, 2-piece, 3-piece, or 5-piece sets. Perfect for decorating notebooks, laptops, and more." },
	{ name: "Hand-Drawn Stickers", price: "$1.00", image: "/handdrawn-pompom.jpg", slug: "hand-drawn-stickers", category: "Stickers", variants: [{ label: "Pom Pom Purrin", price: "$1.00", image: "/handdrawn-pompom.jpg" }, { label: "Kawaii", price: "$1.00", image: "/handdrawn-kawaii.jpg" }], description: "Original hand-drawn kawaii stickers. Choose from Pom Pom Purrin or Kawaii designs!" },
	{ name: "Milk Candy Paper Squishy", price: "$1.99", image: "/squishy-strawberry.jpg", slug: "milk-candy-paper-squishy", category: "Paper Squishies", variants: [{ label: "Strawberry Milk Cow", price: "$1.99", image: "/squishy-strawberry.jpg" }, { label: "Original Milk Cow", price: "$1.99", image: "/squishy-original.jpg" }], description: "Adorable milk candy paper squishies! Choose from Strawberry Milk Cow or Original Milk Cow. Handmade by the owner of Japanezy Arts." },
];
