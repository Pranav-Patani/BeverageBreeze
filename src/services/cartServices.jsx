import axios from "axios";
import { toast } from "react-toastify";

export const addToCartFunc = async (
  token,
  dispatch,
  item,
  setCartBtnDisabled,
  setDisableMoveToCartBtn
) => {
  setCartBtnDisabled && setCartBtnDisabled((prevState) => !prevState);
  setDisableMoveToCartBtn && setDisableMoveToCartBtn((prevState) => !prevState);

  try {
    const {
      data: { cart },
    } = await axios.post(
      "/api/user/cart",
      { product: item },
      { headers: { authorization: token } }
    );

    toast.info("Added to Cart!");
    dispatch({ type: "ADD_TO_CART", payload: cart });
  } catch (error) {
    console.error("Error occured while adding item to cart", error);
  }
  setCartBtnDisabled && setCartBtnDisabled((prevState) => !prevState);
  setDisableMoveToCartBtn && setDisableMoveToCartBtn((prevState) => !prevState);
};

export const increaseCartItemQty = async (id, token, dispatch) => {
  try {
    const {
      data: { cart },
    } = await axios.post(
      `/api/user/cart/${id}`,
      {
        action: {
          type: "increment",
        },
      },
      { headers: { authorization: token } }
    );
    // console.log(cart);
    dispatch({ type: "INC_CART_QTY", payload: cart });
  } catch (error) {
    console.error("Error while increasing cart quantity", error);
  }
};
export const decreaseCartItemQty = async (id, token, dispatch) => {
  try {
    const {
      data: { cart },
    } = await axios.post(
      `/api/user/cart/${id}`,
      {
        action: {
          type: "decrement",
        },
      },
      { headers: { authorization: token } }
    );
    dispatch({ type: "DEC_CART_QTY", payload: cart });
  } catch (error) {
    console.error("Error while decreasing cart quantity", error);
  }
};

export const removeItemFromCart = async (id, token, dispatch) => {
  try {
    const {
      data: { cart },
    } = await axios.delete(`/api/user/cart/${id}`, {
      headers: { authorization: token },
    });

    toast.warn("Product removed from cart");
    dispatch({ type: "REMOVE_ITEM_IN_CART", payload: cart });
  } catch (error) {
    console.log("Error occured while removing item form cart", error);
  }
};
