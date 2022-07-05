import "./home.scss";
import Sidebar from "../../components/sidebar/Sidebar";





const Home = () => {



  return (
    <div className="home">
      <Sidebar/>
      <div className="homeContainer">
        <h2>Home</h2>
      </div>
    </div>
  )
}

export default Home