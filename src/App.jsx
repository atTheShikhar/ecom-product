import CarouselMobile from "./component/CarouselMobile";
import Header from "./component/Header";
import prod1thumb from "./assets/prod1thumb.jpg";
import prod2thumb from "./assets/prod2thumb.jpg";
import prod3thumb from "./assets/prod3thumb.jpg";
import prod4thumb from "./assets/prod4thumb.jpg";
import prod1 from "./assets/prod1.jpg";
import prod2 from "./assets/prod2.jpg";
import prod3 from "./assets/prod3.jpg";
import prod4 from "./assets/prod4.jpg";
import Content from "./component/Content";
import Cart from "./component/Cart";

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
];

function App() {
  return (
    <>
      <div className="relative md:static">
        <Header navItems={navItems} />
        {/* <Cart /> */}
        <CarouselMobile products={productImages} />
        <Content />
      </div>
    </>
  );
}

export default App;
