import React from 'react';
import "./notFound.scss";

//使用useNavigate 轉址
import {useNavigate} from "react-router-dom";

const NotFound = () =>{
    // 重新轉址
    const navigate = useNavigate()
    const returnLogin = () => {
        setTimeout(()=>{
            navigate('/login')
        },3000)
    }
    return(
        <div className="not-found">
            <h2>Not Found Page</h2>
            {
                returnLogin()
            }
        </div>
    );
}

export default NotFound;