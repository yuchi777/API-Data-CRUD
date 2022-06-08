import "./home.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
//使用useNavigate 轉址
import {useNavigate} from "react-router-dom";
import {useEffect} from "react";

const Home = () => {
  
  // // // 重新轉址
  // const navigate = useNavigate()
  // const check = global.auth.getUser() || {};
  // const switchFN = () =>{
  //   switch (check.account) {
  //     case 'talent':
  //           navigate('/talent');
  //       break;
  //     case 'sales':
  //           navigate('/sales');
  //       break;
  //     case 'talentSign':
  //           navigate('/talentSign');
  //       break;
  //     case 'customer':
  //           navigate('/customer');
  //       break;
  //     case 'sysadmin':
  //           navigate('/sysadmin');
  //       break;
  //     default:
  //           navigate('/notFound');
  //       break;
  //   }
  // }

  // 重新轉址
  const navigate = useNavigate()

  useEffect(()=>{
    const user = global.auth.getUser() || {};
    if(user.account){
      navigate('/')
    }else{
      navigate('/notFound')
    }
  })

  return (
    <div className="home">
      <Sidebar/>
      <div className="homeContainer">
        <Navbar/>
        <div>
          HOME PAGE
        </div>
      </div>
    </div>
  )
}

export default Home