import PropTypes from "prop-types";
import { useState } from "react";

const CarouselMobile = ({ products }) => {
  const buttons = [
    {
      icon: "../src/assets/icon-prev.svg",
      alt: "previous image",
      name: "PREV",
    },
    { icon: "../src/assets/icon-next.svg", alt: "next image", name: "NEXT" },
  ];

  const [active, setActive] = useState(0);

  const changeSlide = (isNext) => {
    const offset = isNext ? 1 : -1;
    setActive((oldIdx) => {
      const nextIdx = oldIdx + offset;
      if (nextIdx >= products.length) return 0;
      if (nextIdx < 0) return products.length - 1;
      return nextIdx;
    });
  };

  return (
    <section
      className="
        relative 
        w-full
        h-[100vw]
        overflow-hidden
      "
    >
      {buttons.map((btn, idx) => (
        <button
          key={idx}
          onClick={() => {
            changeSlide(btn.name === "NEXT");
          }}
          className={`absolute
            z-10
            top-2/4
            -translate-y-2/4
            ${btn.name === "NEXT" ? "right-4" : "left-4"}
            bg-white
            flex
            justify-center
            items-center
            h-10
            w-10
            rounded-full
          `}
        >
          <img src={btn.icon} alt={btn.alt} loading="lazy" />
        </button>
      ))}

      <ul className="">
        {products.map((item, idx) => (
          <li
            key={idx}
            className={`
                absolute
                ${active === idx ? "opacity-100" : "opacity-0"}
                transition-opacity
                w-full
                h-full
              `}
          >
            <img
              src={item.image}
              className="w-full h-full"
              alt={`product number ${idx}`}
            />
          </li>
        ))}
      </ul>
    </section>
  );
};

CarouselMobile.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string,
      thumbnail: PropTypes.string,
    })
  ),
};

export default CarouselMobile;
