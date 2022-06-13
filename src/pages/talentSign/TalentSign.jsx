import "./talentSign.scss";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Cards from "../../components/cards/Cards";


const TalentSign = () => {




  return (
    <div className='talentSign'>
        <Sidebar/>
        <div className="talentSignContainer">
            <Navbar/>
            <div>
              <Cards/>
            </div>
        </div>
    </div>
  )
}

export default TalentSign