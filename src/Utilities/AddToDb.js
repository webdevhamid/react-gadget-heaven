import toast from "react-hot-toast";

const getStoredCartList = () => {
  // Get data from local storage
  // read-list
  const storedListItemsStr = localStorage.getItem("cart-list");
  if (storedListItemsStr) {
    const storedItems = JSON.parse(storedListItemsStr);
    return storedItems;
  } else {
    return [];
  }
};

const addToStoredCartList = (id) => {
  const storedList = getStoredCartList(); // array
  if (storedList.includes(id)) {
    // Do not add it
    toast.error("Item already added!");
  } else {
    storedList.push(id);
    // set item to the read-list key
    const storedListItemsStr = JSON.stringify(storedList);
    localStorage.setItem("cart-list", storedListItemsStr);
    toast.success("Item successfully added!");
  }
};

// Get stored wish list products from the local storage
const getStoredWishList = () => {
  const storedListStr = localStorage.getItem("wish-list");
  if (storedListStr) {
    const storedItems = JSON.parse(storedListStr);
    return storedItems;
  } else {
    return [];
  }
};

const addToWishList = (id) => {
  const storedList = getStoredWishList();
  if (storedList.includes(id)) {
    // Do not add the id to the stored list
    toast.error("Item already added!");
  } else {
    storedList.push(id);
    const storedListStr = JSON.stringify(storedList);
    // Store data to wish-list
    localStorage.setItem("wish-list", storedListStr);
    toast.success("Item successfully added!");
  }
};

export { addToStoredCartList, addToWishList, getStoredCartList, getStoredWishList };
