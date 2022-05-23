import "./customer.scss";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";

const Customer = () => {
  return (
    <div className='customer'>
        <Sidebar/>
        <div className="customerContainer">
            <Navbar/>
            <p>Customer here</p>
        </div>
    </div>
  )
}

export default Customer