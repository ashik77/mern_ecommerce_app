import Announcement from "../components/Announcement";
import Categories from "../components/Categories";
import NavBar from "../components/NavBar";
import Slider from "../components/Slider";

const Home = () => {
  return (
    <div>
      <Announcement />
      <NavBar />
      <Slider />
      <Categories />
    </div>
  );
};

export default Home;
