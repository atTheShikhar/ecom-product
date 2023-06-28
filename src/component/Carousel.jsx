import PropTypes from "prop-types";
import { useState } from "react";
import useOverlay from "../hooks/useOverlay";
import prevIcon from "../assets/icon-prev.svg";
import nextIcon from "../assets/icon-next.svg";

const navPostions = {
  inner: "1rem",
  mid: "-1.5rem",
  outer: "-4rem",
};

const Carousel = ({ settings, className }) => {
  const buttons = [
    {
      icon: prevIcon,
      alt: "previous image",
      name: "PREV",
      position: { left: navPostions[settings.navbarPosition] },
    },
    {
      icon: nextIcon,
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

  const gotoSlide = (idx) => {
    if (idx >= 0 || idx < settings.images.length) {
      setActive(idx);
    }
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
        <section className="mt-6 flex justify-center">
          <ul
            className="
              py-2
              overflow-x-auto
              whitespace-nowrap
            "
          >
            {settings.images.map((img, idx) => {
              return (
                <li
                  key={idx}
                  onClick={() => {
                    gotoSlide(idx);
                  }}
                  className={`
                    mx-4
                    inline-block
                    aspect-square
                    w-20
                    overflow-hidden
                    bg-white
                    rounded-lg
                    cursor-pointer
                    ${idx === active && "outline outline-3 outline-orange"}
                  `}
                >
                  <img
                    className={`
                      object-contain
                      bg-white
                      ${idx === active && "opacity-50"}
                    `}
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
