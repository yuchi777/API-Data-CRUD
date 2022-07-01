import "./talentSign.scss";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import SignItem from "../../components/signItem/SignItem";


const TalentSign = () => {




  return (
    <div className='talentSign'>
        <Sidebar/>
        <div className="talentSignContainer">
            <Navbar/>
            <div>
              <SignItem/>
            </div>
        </div>
    </div>
  )
}

export default TalentSign