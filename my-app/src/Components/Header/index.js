import Navbar from "./NavBar";
import { Cart, Person } from "./../../Components/Header/svgIcon";
import logo from "./images/SHOPEGY.jpg";
import "./style.css";

const Home = (props) => {
  const { className } = props;
  const mainNav = [
    {
      title: "Women",
      url: "/women",
      icon: "",
    },
    {
      title: "Men",
      url: "/men",
      icon: "",
    },
    {
      title: "Kids",
      url: "/kids",
      icon: "",
    },
  ];
  const mainNavRight = [
    {
      title: "",
      url: "/",
      icon: <Person />,
    },
    {
      title: "",
      url: "/cart",
      icon: <Cart />,
    },
  ];
  return (
    <header className={`header ${className ? className : ""}`}>
      <div className="container">
        <div className="header-content">
          <Navbar data={mainNav} />
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>
          <Navbar data={mainNavRight} />
        </div>
      </div>
    </header>
  );
};

export default Home;
