import PropTypes from "prop-types";
import { useState } from "react";
import useOverlay from "../hooks/useOverlay";

const navPostions = {
  inner: "1rem",
  mid: "-1.5rem",
  outer: "-4rem",
};

const Carousel = ({ settings, className }) => {
  const buttons = [
    {
      icon: "../src/assets/icon-prev.svg",
      alt: "previous image",
      name: "PREV",
      position: { left: navPostions[settings.navbarPosition] },
    },
    {
      icon: "../src/assets/icon-next.svg",
      alt: "next image",
      name: "NEXT",
      position: { right: navPostions[settings.navbarPosition] },
    },
  ];

  const [active, setActive] = useState(0);
  const { toggleOverlay } = useOverlay();

  const changeSlide = (isNext) => {
    const offset = isNext ? 1 : -1;
    setActive((oldIdx) => {
      const nextIdx = oldIdx + offset;
      const imgCount = settings.images.length;
      if (nextIdx >= imgCount) return 0;
      if (nextIdx < 0) return imgCount - 1;
      return nextIdx;
    });
  };

  return (
    <section
      className={`
        mx-auto
        max-w-full
        ${className}
      `}
    >
      <section
        className="
          relative
          aspect-square
        "
      >
        {settings.hasNavbar &&
          buttons.map((btn, idx) => {
            return (
              <button
                key={idx}
                onClick={() => {
                  changeSlide(btn.name === "NEXT");
                }}
                className="
                  absolute
                  z-10
                  top-2/4
                  -translate-y-2/4
                  border-solid
                  border-2
                  bg-white
                  flex
                  justify-center
                  items-center
                  h-12
                  w-12
                  rounded-full
                "
                style={btn.position}
              >
                <img src={btn.icon} alt={btn.alt} loading="lazy" />
              </button>
            );
          })}

        <ul className="">
          {settings.images.map((item, idx) => (
            <li
              key={idx}
              onClick={() => {
                if (settings.canOpenLightbox) {
                  toggleOverlay("LIGHTBOX");
                }
              }}
              className={`
                absolute
                ${active === idx ? "opacity-100" : "opacity-0"}
                transition-opacity
                w-full
                h-full
                overflow-hidden
                ${settings.canOpenLightbox ? "cursor-pointer" : "cursor-auto"}
                ${settings.hasRoundedCorner ? "rounded-2xl" : "rounded-none"}
              `}
            >
              <img src={item.image} alt={`product number ${idx}`} />
            </li>
          ))}
        </ul>
      </section>
      {settings.hasThumbnail && (
        <section className="mt-8">
          <ul
            className="
              overflow-x-scroll
              whitespace-nowrap
            "
          >
            {settings.images.map((img, idx) => {
              return (
                <li
                  key={idx}
                  className="
                    mx-4
                    inline-block
                    aspect-square
                    w-20
                    overflow-hidden
                    bg-grayish-blue
                    rounded-lg
                  "
                >
                  <img
                    className="
                      object-contain
                    "
                    src={img.thumbnail}
                    alt="image thumbnail"
                  />
                </li>
              );
            })}
          </ul>
        </section>
      )}
    </section>
  );
};

Carousel.propTypes = {
  settings: PropTypes.shape({
    images: PropTypes.arrayOf(
      PropTypes.shape({
        image: PropTypes.string,
        thumbnail: PropTypes.string,
      })
    ),
    hasThumbnail: PropTypes.bool,
    hasNavbar: PropTypes.bool,
    hasRoundedCorner: PropTypes.bool,
    canOpenLightbox: PropTypes.bool,
    navbarPosition: PropTypes.oneOf(["inner", "mid", "outer"]),
  }),
  className: PropTypes.string,
};

export default Carousel;
