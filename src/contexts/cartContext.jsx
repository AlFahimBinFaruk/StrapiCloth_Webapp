import React, { useState, useContext, useEffect } from "react";

import { useGlobalAlertContext } from "./alertContext";
const AppCartInfoContext = React.createContext();
//cart related all functions will be here..
const AppCartInfoProvider = ({ children }) => {
  //show alert
  const { setShowAlert } = useGlobalAlertContext();

  //cart items
  const [cartItemListDetails, setCartItemListDetails] = useState("");
  /*****
   * Update cart items
   *
   */
  const getCartItemDetails = async () => {
    let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    setCartItemListDetails(cartItems);
  };

  /****
   *
   * add new item
   *
   */
  const addNewItem = (id, color, size, thumb) => {
    let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    let newItem = { id, qty: 1, color, size, thumb };
    cartItems.push(newItem);
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    getCartItemDetails();
    setShowAlert({ msg: "added to cart", color: "success" });
  };
  /****
   *
   * update item and handleIncreaseQty
   */
  const handleIncreaseQty = async (item) => {
    // item had id and qty props
    let cartItems = JSON.parse(localStorage.getItem("cartItems"));
    let updatedCart = await cartItems.map((i) => {
      if (i.id == item.id) {
        return { ...item, qty: Number(item.qty) + 1 };
      }
      return i;
    });
    localStorage.setItem("cartItems", JSON.stringify(updatedCart));
    getCartItemDetails();
  };

  /***
   *
   * Handle decrease qty
   */
  const handleDecreaseQty = async (item) => {
    // item had id and qty props
    let cartItems = JSON.parse(localStorage.getItem("cartItems"));
    let updatedCart = await cartItems.map((i) => {
      if (i.id == item.id && item.qty > 1) {
        return { ...item, qty: Number(item.qty) - 1 };
      }
      return i;
    });
    localStorage.setItem("cartItems", JSON.stringify(updatedCart));
    getCartItemDetails();
  };

  //add to cart
  /******
   * if item is already in the cart it will be updated by qty
   * or the item will be added
   */
  const addToCart = async (id, color, size, thumb) => {
    let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    if (cartItems.length > 0) {
      let isExits = await cartItems.find((item) => {
        if (item.id == id) {
          handleIncreaseQty(item);
          return true;
        }
      });
      if (!isExits) {
        addNewItem(id, color, size, thumb);
      }
    } else {
      addNewItem(id, color, size, thumb);
    }
  };

  /*****
   * delete item from cart
   */
  const deleteItem = async (id) => {
    let cartItems = JSON.parse(localStorage.getItem("cartItems"));
    let updatedCart = await cartItems.filter((i) => i.id !== id);
    localStorage.setItem("cartItems", JSON.stringify(updatedCart));
    getCartItemDetails();
  };
  /***
   * Clear cart
   */
  const clearCart = () => {
    localStorage.removeItem("cartItems");
    setCartItemListDetails("");
  };

  /****
   * by default call getcartitemlist when the page loads
   */
  useEffect(() => {
    getCartItemDetails();
  }, []);

  return (
    <AppCartInfoContext.Provider
      value={{
        addToCart,
        cartItemListDetails,
        handleDecreaseQty,
        handleIncreaseQty,
        deleteItem,
        clearCart,
      }}
    >
      {children}
    </AppCartInfoContext.Provider>
  );
};

export const useGlobalCartInfoContext = () => {
  return useContext(AppCartInfoContext);
};

export { AppCartInfoContext, AppCartInfoProvider };
