
const getStoredBook = () => {
    const storedBookSTR = localStorage.getItem("readList");
    if (storedBookSTR) {
        return JSON.parse(storedBookSTR);
    } else {
        return [];
    }
};

const addToStoredDB = (id) => {
    const storedBookData = getStoredBook();

    if (storedBookData.includes(id)) {
        alert("This book is already in your read list");
    } else {
        storedBookData.push(id);
        localStorage.setItem("readList", JSON.stringify(storedBookData));
    }
};


const getStoredWishlist = () => {
    const storedWishlistSTR = localStorage.getItem("wishlist");
    if (storedWishlistSTR) {
        return JSON.parse(storedWishlistSTR);
    } else {
        return [];
    }
};

const addToWishlist = (id) => {
    const storedWishlistData = getStoredWishlist();

    if (storedWishlistData.includes(id)) {
        alert("This book is already in your wishlist");
    } else {
        storedWishlistData.push(id);
        localStorage.setItem("wishlist", JSON.stringify(storedWishlistData));
    }
};

export { addToStoredDB, getStoredBook, addToWishlist, getStoredWishlist };
