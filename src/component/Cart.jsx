import PropTypes from "prop-types";
import { useState } from "react";

const Cart = ({ isHidden }) => {
  const [isEmpty, setIsEmpty] = useState(true);

  return (
    <div
      style={{ display: isHidden ? "none" : "block" }}
      className="
        absolute
        z-30
        bg-white
        w-[95vw]
        max-w-md
        rounded-xl
        shadow-2xl
        left-2/4
        -translate-x-2/4
        top-20
        md:top-28
        md:translate-x-0
        md:left-[unset]
        md:right-4
        2xl:-right-[10%]
      "
    >
      <div
        className="
            font-bold
            text-lg
            p-6
            border-b-2
            border-gray-200
          "
      >
        Cart
      </div>
      {isEmpty ? (
        <div
          className="
            flex
            justify-center
            items-center
            min-h-[200px]
            text-dark-grayish-blue
            text-lg
          "
        >
          <b>Your cart is empty.</b>
        </div>
      ) : (
        <div>
          <div className="min-h-14 p-6 flex items-center justify-between">
            <a
              href="#"
              className="
              flex
              items-center
              justify-start
            "
            >
              <img
                src="../src/assets/prod1thumb.jpg"
                alt="product"
                className="
                h-14
                rounded-md
              "
              />
              <div
                className="
              mx-5
              font-semibold
              text-xl
              text-gray-400
            "
              >
                <h2 className="text-ellipsis">Fall Limited Edition Sneakers</h2>
                <h3>
                  <span>$125.00 x 3</span>
                  &nbsp;
                  <span className="text-very-dark-blue font-bold">$375.00</span>
                </h3>
              </div>
            </a>
            <button className="p-1">
              <img src="../src/assets/icon-delete.svg" alt="remove from cart" />
            </button>
          </div>
          <div className="px-6 pt-1 pb-9">
            <button
              className="
              bg-orange
              block
              w-full
              py-4
              rounded-xl
              text-white
              font-bold
              text-lg
            "
            >
              Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

Cart.propTypes = {
  isHidden: PropTypes.bool,
};

export default Cart;
