import Chart from "../../components/chart/Chart";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import WidgetSmall from "../../components/widgetSmall/WidgetSmall";
import WidgetLarge from "./../../components/widgetLarge/WidgetLarge";
import { userData } from "../../data";

import "./home.css";

const Home = () => {
  return (
    <div className="home">
      <FeaturedInfo />
      <Chart
        title="User Analytics"
        data={userData}
        dataKey="Active Users"
        grid
      />
      <div className="homeWidgets">
        <WidgetSmall />
        <WidgetLarge />
      </div>
    </div>
  );
};

export default Home;
