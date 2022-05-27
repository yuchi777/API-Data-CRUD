import "./home.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Cards from "../../components/cards/Cards";

const Home = () => {
  return (
    <div className="home">
      <Sidebar/>
      <div className="homeContainer">
        <Navbar/>
        <div>
          <Cards/>
        </div>
      </div>
    </div>
  )
}

export default Home