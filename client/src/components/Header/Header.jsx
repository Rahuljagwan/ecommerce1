import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { TbSearch } from "react-icons/tb";
import { CgShoppingCart } from "react-icons/cg";
import { AiOutlineHeart } from "react-icons/ai";
import "./Header.scss";
import Search from "./Search/Search";
import { Context } from "../../utils/context";
import Cart from "../Cart/Cart";
import { IoRocketSharp } from "react-icons/io5";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [searchModal, setSearchModal] = useState(false);
  const navigate = useNavigate();
  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 200) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  const handleClick = () => {
    window.location.href = "https://bonusgame.netlify.app/"; // Replace with your desired Instagram URL

    setTimeout(() => {
      window.history.back(); // Navigate back to the previous page
    }, 8000); // 5000 milliseconds (5 seconds)
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  const { cartCount, showCart, setShowCart } = useContext(Context);

  return (
    <>
      <header className={`main-header ${scrolled ? "sticky-header" : ""}`}>
        <div className="header-content">
          <ul className="left">
            <li onClick={() => navigate("/")}>Home</li>
            <li onClick={() => navigate("/about")}>About</li>
            <li>Daily Deals</li>
          </ul>
          <div className="center" onClick={() => navigate("/")}>
            <h1>
              <span>T</span>
              <span>&</span>
              <span>T</span>&nbsp;
              <span>S</span>
              <span>T</span>
              <span>O</span>
              <span>R</span>
              <span>E</span>
            </h1>
          </div>
          <div className="right">
            <TbSearch onClick={() => setSearchModal(true)} />
            <AiOutlineHeart />
            <span className="cart-icon" onClick={() => setShowCart(true)}>
              <CgShoppingCart />
              {!!cartCount && <span>{cartCount}</span>}
            </span>
            <span className="game" onClick={handleClick}>
              Try Game
              <IoRocketSharp className="rocket" />
            </span>
          </div>
        </div>
      </header>
      {searchModal && <Search setSearchModal={setSearchModal} />}
      {showCart && <Cart />}
    </>
  );
};

export default Header;
