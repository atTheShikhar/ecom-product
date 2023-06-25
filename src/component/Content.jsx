import PropTypes from "prop-types";

const Content = ({ className }) => {
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
        Sneaker Company
      </h2>
      <h1
        className="
          text-4xl
          font-bold
          my-4
          text-very-dark-blue
        "
      >
        Fall Limited Edition Sneakers
      </h1>
      <p
        className="
          text-base
          text-dark-grayish-blue
          font-medium
        "
      >
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they&apos;ll withstand everything
        the weather can offer.
      </p>

      <section
        className="
        my-6 
        flex 
        justify-between 
        items-center 
      "
      >
        <div className="flex items-center space-x-4">
          <span className="text-3xl font-bold text-very-dark-blue">
            $125.00
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
            50%
          </span>
        </div>

        <div
          className="
            font-bold
            line-through
            text-grayish-blue
          "
        >
          $250.00
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
          >
            <img src="../src/assets/icon-minus.svg" alt="decrease item count" />
          </button>
          <div className="font-bold">0</div>
          <button
            className="
              p-5
              flex
              justify-center
              items-center
           "
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
};

export default Content;
