import { Link } from "react-router-dom";
import BannerImage from "../assets/images/banner.jpeg";
import "../styles/HomeStyle.css";
const Home = () => {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1>Food Website</h1>
        <p>Best Food In Pakistan</p>
        <Link to={"/menu"}>
          <button>Order Now</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
