import React, { createContext, useEffect, useState } from "react";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
    let cart = {};
    for (let index = 0; index < 301; index++) {
        cart[index] = 0;
    }
    return cart;
};

const ShopContextProvider = (props) => {
    const [all_product, setAll_Product] = useState([]);
    const [cartItems, setCartItems] = useState(getDefaultCart());

    useEffect(() => {
        fetch('http://localhost:4000/allproducts')
            .then((response) => response.json())
            .then((data) => setAll_Product(data))
            .catch((error) => console.error('Error fetching products:', error));

        if (localStorage.getItem('auth-token')) {
            fetch('http://localhost:4000/getcart', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'auth-token': `${localStorage.getItem('auth-token')}`,
                    'Content-Type': 'application/json',
                },
                body: "",
            })
            .then((response) => response.json())
            .then((data) => setCartItems(data))
            .catch((error) => console.error('Error fetching cart:', error));
        }
    }, []);

    const addToCart = (itemId) => {
        setCartItems((prev) => {
            const newCart = { ...prev, [itemId]: prev[itemId] + 1 };
            if (localStorage.getItem('auth-token')) {
                fetch('http://localhost:4000/addtocart', {
                    method: 'POST',
                    headers: {
                        Accept: 'application/json',
                        'auth-token': `${localStorage.getItem('auth-token')}`,
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ itemId: itemId })
                })
                .then((response) => response.json())
                .then((data) => console.log(data))
                .catch((error) => console.error('Error adding to cart:', error));
            }
            return newCart;
        });
    }

    const removeFromCart = (itemId) => {
        setCartItems((prev) => {
            const newCount = prev[itemId] - 1;
            const newCart = { ...prev, [itemId]: newCount >= 0 ? newCount : 0 };
            if (localStorage.getItem('auth-token') && newCount >= 0) {
                fetch('http://localhost:4000/removefromcart', {
                    method: 'POST',
                    headers: {
                        Accept: 'application/json',
                        'auth-token': `${localStorage.getItem('auth-token')}`,
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ itemId: itemId })
                })
                .then((response) => response.json())
                .then((data) => console.log(data))
                .catch((error) => console.error('Error removing from cart:', error));
            }
            return newCart;
        });
    }

    const getTotalCartAmount = () => {
        let total = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = all_product.find((product) => product.id === Number(item));
                if (itemInfo) {
                    total += itemInfo.new_price * cartItems[item];
                }
            }
        }
        return total;
    }

    const getTotalCartItems = () => {
        let totalItem = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                totalItem += cartItems[item];
            }
        }
        return totalItem;
    }

    const contextValue = { getTotalCartItems, getTotalCartAmount, all_product, cartItems, addToCart, removeFromCart };

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    );
}

export default ShopContextProvider;
