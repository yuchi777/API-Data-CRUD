import "./home.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
//使用useNavigate 轉址
// import {useNavigate} from "react-router-dom";
// import {useEffect} from "react";

const Home = () => {
  


  return (
    <div className="home">
      <Sidebar/>
      <div className="homeContainer">
        <Navbar/>
        <div>
          HOME PAGE
        </div>
      </div>
    </div>
  )
}

export default Home