import './monthReport.scss';
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";

const MonthReport = () => {
  return (
    <div className='monthReport'>
        <Sidebar/>
        <div className="monthReportContainer">
            <Navbar/>
            <p>month Report here</p>
        </div>
    </div>
  )
}

export default MonthReport