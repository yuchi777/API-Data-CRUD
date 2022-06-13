import "./customer.scss";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
//使用useNavigate 轉址
// import {useNavigate} from "react-router-dom";
// import {useEffect} from "react";


const Customer = () => {

  // 重新轉址
  // const navigate = useNavigate()

  // useEffect(()=>{
  //   const user = global.auth.getUser() || {};
  //   if(user.account === 'customer'){
  //     // navigate('/sales')
  //   }else{
  //     navigate('/notFound')
  //   }
  // },[])

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