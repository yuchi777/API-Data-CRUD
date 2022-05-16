import "./dayReport.scss";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";

const DayReport = () => {
  return (
    <div className='dayReport'>
        <Sidebar/>
        <div className="dayReportContainer">
            <Navbar/>
            <p>day Report here</p>
        </div>
    </div>
  )
}

export default DayReport