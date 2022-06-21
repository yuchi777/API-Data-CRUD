import "./home.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
//使用useNavigate 轉址
// import {useNavigate} from "react-router-dom";
// import {useEffect} from "react";

const Home = () => {
  
  // const navigate = useNavigate();
  // const isLogin = global.auth.isLogin();
  
  //useEffect 有兩個參數，第一個參數是 Effect function，第二個則是 depandancy array。 根據不同 depandancy 決定何時要執行 Effect function
  //第二個參數是用來限定當哪些變數被改變時useEffect要觸發 
  //after every render

  // useEffect(() => {
  //   if(isLogin){
  //     navigate('/')
  //   }else{
  //     navigate('/login')
  //   }
  // }, [isLogin,navigate]);
  

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