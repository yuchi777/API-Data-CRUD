import "./weekReport.scss";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";

const WeekReport = () => {
  return (
    <div className='weekReport'>
        <Sidebar/>
        <div className="weekReportContainer">
            <Navbar/>
            <p>week Report here</p>
        </div>
    </div>
  )
}

export default WeekReport