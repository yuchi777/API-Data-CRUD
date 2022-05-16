import "./checkReport.scss";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";



const CheckReport = () => {
  return (
    <div className="checkReport">
        <Sidebar/>
        <div className="checkReportContainer">
            <Navbar/>
            <p>checkReport here</p>
        </div>
    </div>
  )
}

export default CheckReport