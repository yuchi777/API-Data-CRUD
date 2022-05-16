import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import "./logSearchReport.scss";

const LogSearchReport = () => {
  return (
    <div className="logSearchReport">
        <Sidebar/>
        <div className="logSearchReportContainer">
            <Navbar/>
            <p>Log Search Report here</p>
        </div>
    </div>
  )
}

export default LogSearchReport