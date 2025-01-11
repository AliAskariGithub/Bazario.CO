"use client";
import { Product } from "@/sanity.types";
import useBasketStore from "@/store/store";
import { useEffect, useState } from "react";
import { FaMinus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { useToast } from "@/hooks/use-toast"; 
import { ToastAction } from "@/components/ui/toast"

interface AddToBasketButtonProps {
  product: Product;
  disabled?: boolean;
}

const AddToBasketButton = ({ product, disabled }: AddToBasketButtonProps) => {
  const { addItem, removeItem, getItemCount } = useBasketStore();
  const itemCount = getItemCount(product._id);
  const [isClient, setIsClient] = useState(false);
  const { toast } = useToast()

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  // Handle adding an item to the basket with toast notification
  const handleAddItem = () => {
    addItem(product);
    toast({
      title: `${product.name} added to your cart!`,
      description: "Go to your cart to complete the checkout.",
      variant: "default",
      action: (
        <ToastAction altText="Undo" onClick={() => removeItem(product._id)}>Undo</ToastAction>  // Undo action to remove item from cart
      ),
    });
  };

  return (
    <div className="flex items-center justify-start space-x-2 mt-14 sm:mt-0">
      <button
        onClick={() => removeItem(product._id)}
        className={`w-5 h-5 sm:w-8 sm:h-8 rounded-full flex items-center justify-center transition-colors duration-200 ${itemCount === 0 ? "bg-gray-100 cursor-not-allowed" : "bg-gray-200 hover:bg-gray-300"}`}
        disabled={itemCount === 0 || disabled}
      >
        <span
          className={`text-sm sm:text-xl font-bold ${itemCount === 0 ? "text-gray-400" : "text-black"}`}
        >
          <FaMinus />
        </span>
      </button>

      <span className="w-8 text-center font-semibold">{itemCount}</span>

      <button
        onClick={handleAddItem} // Trigger addItem and show toast
        className={`w-5 h-5 sm:w-8 sm:h-8 rounded-full flex items-center justify-center transition-colors duration-200 ${disabled ? "bg-gray-400 cursor-not-allowed" : "bg-gray-200 hover:bg-gray-300"}`}
        disabled={disabled}
      >
        <span className="text-sm sm:text-xl font-bold text-black">
          <FaPlus />
        </span>
      </button>
    </div>
  );
};

export default AddToBasketButton;