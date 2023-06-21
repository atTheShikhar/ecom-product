const Cart = () => {
  return (
    <div
      className="
        max-w-md
        border
        border-gray-700
        rounded-xl
      "
    >
      <div
        className="
            font-bold
            text-lg
            p-6
            border-b
            border-grayish-blue
          "
      >
        Cart
      </div>
      <div className="p-6 flex">
        <a
          href="#"
          className="
            flex
            "
        >
          <img
            src="../src/assets/prod1thumb.jpg"
            alt="product"
            className="
              max-w-xs
            "
          />
          <div>
            <h2>Fall Limited Edition Sneakers</h2>
            <h3>
              <span>$125.00 x 3</span>
              &nbsp;
              <span>$375.00</span>
            </h3>
          </div>
        </a>
        <button>
          <img src="../src/assets/icon-delete.svg" alt="remove from cart" />
        </button>
      </div>
      <button>Checkout</button>
    </div>
  );
};

export default Cart;
