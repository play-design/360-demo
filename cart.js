class Cart {
    constructor() {
        this.localStorageKey = 'cart';
        this.cart = JSON.parse(localStorage.getItem(this.localStorageKey)) || [];
    }

    addItem(id, quantity) {
        let existingItem = this.cart.find(cartItem => cartItem.id === id);

        if (existingItem) {
            existingItem.quantity += quantity;
        } else {
            this.cart.push({ id, quantity });
        }

        this.updateLocalStorage();
    }

    removeItem(id) {
        let index = this.cart.findIndex(cartItem => cartItem.id === id);

        if (index !== -1) {
            this.cart.splice(index, 1);
        }

        this.updateLocalStorage();
    }

    getCart() {
        return this.cart;
    }

    getItemCount() {
        return this.cart.reduce((counter, cartItem) => counter + cartItem.quantity, 0);
    }

    updateLocalStorage() {
        localStorage.setItem(this.localStorageKey, JSON.stringify(this.cart));
    }
}