import { useState } from "react";
import PropTypes from "prop-types";
import logo from "../assets/logo.svg";
import cart from "../assets/icon-cart.svg";
import avatar from "../assets/image-avatar.png";
import menu from "../assets/icon-menu.svg";
import Cart from "./Cart";
import { useSelector } from "react-redux";

const Header = ({ navItems }) => {
  const itemCount = useSelector((state) => {
    return state.cart.items.reduce((prev, curr) => {
      return prev + curr.itemCount;
    }, 0);
  });
  const [isDrawOpen, setIsDrawOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleDrawer = () => {
    setIsCartOpen(false);
    setIsDrawOpen((oldVal) => !oldVal);
  };

  const toggleCart = () => {
    setIsDrawOpen(false);
    setIsCartOpen((oldVal) => !oldVal);
  };

  return (
    <div
      className="
        relative
        flex
        justify-between
        m-auto
        pl-2
        pr-6
        border-b-2
        h-[4.2rem]
        md:h-32
        md:min-w-fit
        md:max-w-screen-xl
        md:px-4
        md:border-gray-100
        xl:px-0
        xl:static
        2xl:relative
      "
    >
      <Cart isHidden={!isCartOpen} />
      <div
        className="
        flex 
        justify-start 
        items-center 
        md:grow
      "
      >
        <button className="p-4 cursor-pointer md:hidden" onClick={toggleDrawer}>
          <img src={menu} alt="menu" />
        </button>
        <a
          href="#"
          className="
            -mt-1
            ml-1
            md:ml-0 
          "
        >
          <img src={logo} alt="sneakers logo" />
        </a>
        <nav
          className={`
            ${isDrawOpen ? "block" : "hidden"}
            p-2
            fixed
            h-screen
            min-w-[65%]
            z-50
            bottom-0
            left-0
            bg-white
            shadow-[0_0_0_100vw_rgba(0,0,0,0.4)]
            md:z-0
            md:shadow-none
            md:static
            md:flex 
            md:h-32 
            md:grow
          `}
        >
          <button className="p-4 md:hidden" onClick={toggleDrawer}>
            <img src="../src/assets/icon-close.svg" alt="close menu" />
          </button>
          <ul
            className="
              list-none
              mt-6
              pl-4
              flex
              flex-col
              justify-center 
              font-bold
              space-y-4
              text-lg
              text-very-dark-blue
              md:flex-row
              md:mt-0
              md:pl-0
              md:space-y-0
              md:font-normal 
              md:text-gray-500 
              md:items-center 
              md:justify-around
              md:mx-5
              md:grow
              md:max-w-lg
            "
          >
            {navItems.map((val) => {
              return (
                <li
                  key={val.name}
                  className="
                    md:relative
                  "
                >
                  <a
                    className="
                      md:before:absolute
                      md:before:content-['']
                    md:before:bg-orange
                      md:before:h-1
                      md:before:w-full
                      md:before:top-[75px]
                      md:before:scale-x-0
                      md:before:scale-y-100
                      md:before:transition-transform
                      md:hover:before:scale-100
                    "
                    href={val.link}
                  >
                    {val.name}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>

      <div
        className="
        flex 
        justify-end 
        items-center 
        space-x-3
        sm:space-x-5
        md:space-x-7
      "
      >
        <button
          className="
            h-10 
            w-10 
            relative
          "
          onClick={toggleCart}
        >
          {itemCount > 0 && (
            <span
              className="
                absolute 
                top-0 
                right-0 
                text-sm
                leading-3
                bg-orange
                px-2
                py-1
                font-semibold
                rounded-xl
                text-white
              "
            >
              {itemCount}
            </span>
          )}
          <img src={cart} alt="cart" className="m-auto" />
        </button>
        <button
          className="
          h-10 
          w-10
          rounded-full
          hover:outline
          hover:outline-2
          hover:outline-orange
        "
        >
          <img
            src={avatar}
            alt="avatar"
            className="
              m-auto 
              w-6 
              sm:w-8 
              md:w-14
            "
          />
        </button>
      </div>
    </div>
  );
};

Header.propTypes = {
  navItems: PropTypes.arrayOf(
    PropTypes.shape({
      link: PropTypes.string,
      name: PropTypes.string,
    })
  ),
};

export default Header;
