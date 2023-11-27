import { useSelector } from "react-redux";
import ItemList from "./ItemList";
import { useDispatch } from "react-redux";
import { clearCart } from "../utils/cartSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const Cart = () => {

    const cartItems = useSelector((store) => store.cart.items);

    const dispatch = useDispatch();

    const handleClearCart = () => {
        dispatch(clearCart());
        toast.success("Cart Cleared!", {
            position: toast.POSITION.BOTTOM_LEFT,
        });
    }
    return (
        <div className="text-center m-10 p-10">
            <h1 className="mb-4 text-2xl font-bold">Your Cart !</h1>
            <div className="w-7/12 m-auto bg-gray-200 shadow-2xl rounded-xl">
                <div className="text-right">
                    <button className=" p-2 m-2 mt-4 bg-red-600 text-white rounded-xl font-bold"
                    onClick={handleClearCart}>Clear Cart</button>
                </div>
                <ItemList items={cartItems} />
            </div>

            <ToastContainer />

        </div>
    );
};

export default Cart;