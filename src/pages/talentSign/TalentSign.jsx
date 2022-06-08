import "./talentSign.scss";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Cards from "../../components/cards/Cards";
//使用useNavigate 轉址
import {useNavigate} from "react-router-dom";
import {useEffect} from "react";

const TalentSign = () => {

  
  // 重新轉址
  const navigate = useNavigate()

  useEffect(()=>{
    const user = global.auth.getUser() || {};
    if(user.account === 'talent'){
      // navigate('/sales')
    }else{
      navigate('/notFound')
    }
  },[])


  return (
    <div className='talentSign'>
        <Sidebar/>
        <div className="talentSignContainer">
            <Navbar/>
            <div>
              <Cards/>
            </div>
        </div>
    </div>
  )
}

export default TalentSign