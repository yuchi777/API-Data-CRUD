import "./home.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Widget from "../../components/widget/Widget";
import Chart from "../../components/chart/Chart";
// import Table from "../../components/table/Table";
import MaterialTable from "../../components/materialTable/MaterialTable.jsx";

const Home = () => {
  return (
    <div className="home"> 
      <Sidebar/>
      <div className="homeContainer"> 
        <Navbar/>
        <div className="widgets">
          <Widget type="all"/>
          <Widget type="normal"/>
          <Widget type="warning"/>
        </div>
        <div className="listContainer">
          <div className="listTitle">告警列表</div>
          <MaterialTable />
        </div>
        <div className="listContainer">
          <div className="listTitle">機台一欄</div>
          <MaterialTable />
        </div>
        <div className="charts">
          <Chart title="Last 6 Months (Revenue)" aspect={3/1}/>
        </div>
      </div>
    </div>
  )
}

export default Home