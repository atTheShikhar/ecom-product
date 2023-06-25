import Carousel from "./component/Carousel";
import Header from "./component/Header";
import prod1thumb from "./assets/prod1thumb.jpg";
import prod2thumb from "./assets/prod2thumb.jpg";
import prod3thumb from "./assets/prod3thumb.jpg";
import prod4thumb from "./assets/prod4thumb.jpg";
import prod1 from "./assets/prod1.jpg";
import prod2 from "./assets/prod2.jpg";
import prod3 from "./assets/prod3.jpg";
import prod4 from "./assets/prod4.jpg";
import crossIcon from "./assets/icon-close.svg";
import Content from "./component/Content";
import { useState } from "react";

const navItems = [
  {
    link: "#",
    name: "Collections",
  },
  {
    link: "#",
    name: "Men",
  },
  {
    link: "#",
    name: "Women",
  },
  {
    link: "#",
    name: "About",
  },
  {
    link: "#",
    name: "Contact",
  },
];

const productImages = [
  {
    image: prod1,
    thumbnail: prod1thumb,
  },
  {
    image: prod2,
    thumbnail: prod2thumb,
  },
  {
    image: prod3,
    thumbnail: prod3thumb,
  },
  {
    image: prod4,
    thumbnail: prod4thumb,
  },
  {
    image: prod1,
    thumbnail: prod1thumb,
  },
  {
    image: prod2,
    thumbnail: prod2thumb,
  },
  {
    image: prod3,
    thumbnail: prod3thumb,
  },
  {
    image: prod4,
    thumbnail: prod4thumb,
  },
];

function App() {
  const [lboxOpen, setLboxopen] = useState(true);
  const baseSettings = {
    images: productImages,
    hasNavbar: true,
    navbarPosition: "inner",
    hasThumbnail: true,
    hasRoundedCorner: true,
  };

  return (
    <>
      <div className="relative md:static">
        {lboxOpen && (
          <div
            className="
            absolute 
            z-50 
            w-full 
            min-h-[100vh] 
            bg-[rgba(0,0,0,0.5)]
            flex
            flex-col
            justify-center
            items-center
          "
          >
            <div className="max-w-2xl m-16">
              <div className="flex justify-end mb-6">
                <button
                  onClick={() => {
                    setLboxopen(false);
                  }}
                >
                  <img
                    src={crossIcon}
                    className="brightness-0 invert w-4"
                    alt="close lightbox"
                  />
                </button>
              </div>

              <Carousel
                name={"lightbox"}
                settings={{ ...baseSettings, navbarPosition: "mid" }}
              />
            </div>
          </div>
        )}
        <Header navItems={navItems} />
        <div
          className="
            m-auto 
            flex 
            flex-col 
            justify-center
            items-center
            max-w-6xl 
            gap-6
            md:my-20
            md:flex-row 
            md:gap-8
            lg:gap-20
            xl:gap-28
          "
        >
          <div className="max-w-full md:max-w-md md:pl-6">
            <Carousel
              name="desktop"
              settings={{
                ...baseSettings,
                hasNavbar: false,
              }}
              className={"hidden md:block"}
            />
            <Carousel
              name="mobile"
              settings={{
                ...baseSettings,
                hasRoundedCorner: false,
                hasThumbnail: false,
              }}
              className={"block md:hidden"}
            />
          </div>
          <Content className={""} />
        </div>
      </div>
    </>
  );
}

export default App;
