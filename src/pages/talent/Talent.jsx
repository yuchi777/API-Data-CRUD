import "./talent.scss";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";

const Talent = () => {
  return (
    <div className='talent'>
        <Sidebar/>
        <div className="talentContainer">
            <Navbar/>
            <p>Talent here</p>
        </div>
    </div>
  )
}

export default Talent