import { useState } from "react";


  const [wishlistItems, setWishlistItems] = useState([]); // Initialize wishlist state

  useEffect(() => {
   const storedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
   setWishlistItems(storedWishlist);
 }, []);

 const handleAddToWishlist = () => {
    addToWishlist(id);
    setWishlistItems([...wishlistItems, { id }]); // Add item to local state
    localStorage.setItem('wishlist', JSON.stringify([...wishlistItems, { id }])); // Update local storage
};

const handleRemoveFromWishlist = () => {
    removeFromWishlist(id);
    setWishlistItems(wishlistItems.filter((item) => item.id !== id));
    localStorage.setItem('wishlist', JSON.stringify(wishlistItems.filter((item) => item.id !== id)));
};

