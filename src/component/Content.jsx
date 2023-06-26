import PropTypes from "prop-types";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addItems } from "../redux_slices/cartSlice";
import { formatPrice } from "../utils";

const Content = ({ className, product }) => {
  const [itemCount, setCount] = useState(1);
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(
      addItems({
        itemId: product.itemId,
        name: product.name,
        unitPrice: product.unitPrice,
        itemCount: itemCount > 0 ? itemCount : 1,
        currency: product.currency,
      })
    );
  };

  return (
    <div className={`mx-auto px-6 mb-12 ${className}`}>
      <h2
        className="
          uppercase
          text-orange
          font-bold
          text-sm
          tracking-widest
        "
      >
        {product.brand}
      </h2>
      <h1
        className="
          text-5xl
          font-bold
          my-4
          text-very-dark-blue
        "
      >
        {product.name}
      </h1>
      <p
        className="
          text-lg
          text-dark-grayish-blue
          font-medium
          mt-8
        "
      >
        {product.desc}
      </p>

      <section
        className="
        my-8
        flex 
        justify-between 
        items-center 
        md:flex-col
        md:items-start
        md:gap-2
      "
      >
        <div className="flex items-center space-x-4">
          <span className="text-3xl font-bold text-very-dark-blue">
            {product.currency}
            {formatPrice(product.unitPrice)}
          </span>
          <span
            className="
            text-orange
            bg-pale-orange
            flex
            justify-center
            items-center
            font-bold
            px-2
            py-1
            rounded-md
            h-7
          "
          >
            {product.offerPercent}%
          </span>
        </div>

        <div
          className="
            font-bold
            line-through
            text-grayish-blue
            text-lg
          "
        >
          {product.currency}
          {formatPrice(product.preOfferUnitPrice)}
        </div>
      </section>

      <section
        className="
          flex 
          flex-col 
          justify-center 
          items-center 
          gap-5
          lg:flex-row
        "
      >
        <div
          className="
            flex
            items-center
            justify-between
            w-full
            bg-light-grayish-blue
            rounded-xl
            h-14
            lg:basis-[35%]
          "
        >
          <button
            className="
              p-5
              flex
              justify-center
              items-center
            "
            onClick={() => {
              setCount((old) => {
                if (old <= 0) return 0;
                return --old;
              });
            }}
          >
            <img src="../src/assets/icon-minus.svg" alt="decrease item count" />
          </button>
          <div className="font-bold">{itemCount}</div>
          <button
            className="
              p-5
              flex
              justify-center
              items-center
            "
            onClick={() => {
              setCount((old) => {
                return ++old;
              });
            }}
          >
            <img src="../src/assets/icon-plus.svg" alt="increase item count" />
          </button>
        </div>

        <button
          className="
            bg-orange
            flex
            justify-center
            items-center
            w-full
            rounded-xl
            space-x-4
            drop-shadow-3xl
            h-14
            lg:basis-[65%]
          "
          onClick={addToCart}
        >
          <img src="../src/assets/icon-cart.svg" alt="cart" />
          <span
            className="
              text-white
              font-bold
            "
          >
            Add to cart
          </span>
        </button>
      </section>
    </div>
  );
};

Content.propTypes = {
  className: PropTypes.string,
  product: PropTypes.shape({
    itemId: PropTypes.number,
    brand: PropTypes.string,
    name: PropTypes.string,
    desc: PropTypes.string,
    preOfferUnitPrice: PropTypes.number,
    offerPercent: PropTypes.number,
    unitPrice: PropTypes.number,
    currency: PropTypes.string,
  }),
};

export default Content;
