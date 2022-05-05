import "./single.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Chart from "../../components/chart/Chart";
import List from "../../components/table/Table";

const Single = () => {
  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">

          <div className="left">
            <div className="editButton">Edit</div>
            <h1 className="title">Information</h1>
            <div className="item">

              <img src="https://fakeimg.pl/300/" alt="img" className="itemImg" />
              
              <div className="details">
                <h1 className="itemTitle">Jane Doe</h1>
                <div className="detailItem">
                  <sapn className="itemKey">Email:</sapn>
                  <sapn className="itemValue">janedoe@gmail.con</sapn>
                </div>
                <div className="detailItem">
                  <sapn className="itemKey">Phone:</sapn>
                  <sapn className="itemValue">123456789</sapn>
                </div>
                <div className="detailItem">
                  <sapn className="itemKey">Address:</sapn>
                  <sapn className="itemValue">123 st. 234 Garden Yd. NewYork</sapn>
                </div>
                <div className="detailItem">
                  <sapn className="itemKey">Country:</sapn>
                  <sapn className="itemValue">U.S.A</sapn>
                </div>
              </div>

            </div>
          </div>

          <div className="right">
              <Chart aspect={3.5/1} title="User Spending (Last 6 Months)"/>
          </div>

        </div>
        <div className="bottom">
          <h1 className="title">Last Transactions</h1>
          <List />
        </div>
      </div>
    </div>
  )
}

export default Single