import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import "./techlead.scss";

const Techlead = () => {
  return (
    <div className="techlead">
        <Sidebar/>
        <div className="techleadContainer">
            <Navbar/>
            <p>Techlead here</p>
        </div>
    </div>
  )
}

export default Techlead