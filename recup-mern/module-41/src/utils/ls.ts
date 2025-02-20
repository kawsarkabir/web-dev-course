// step 1: save cart to local storage
const saveCartToLS = (cart) => {
	const cartStringField = JSON.stringify(cart);
	localStorage.setItem("cart", cartStringField);
};

// step 2: get storage data from local storage
const getStoredData = () => {
	const storedCartString = localStorage.getItem("cart");
	if (storedCartString) {
		return JSON.parse(storedCartString);
	}
	return [];
};

const addToLS = (id) => {
	const cart = getStoredData();
	cart.push(id);
	saveCartToLS(cart); 
};

const removeFromLS = (id) => {
	const cart = getStoredData();
	const newCart = cart.filter((item) => item !== id);
	saveCartToLS(newCart);
};
export { addToLS, getStoredData, removeFromLS };
