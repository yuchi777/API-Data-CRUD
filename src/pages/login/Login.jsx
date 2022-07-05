import "./login.scss";
import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
// import axios from "../../commons/axios";
import { toast } from 'react-toastify';

//使用router
// import {Link} from 'react-router-dom';


//icon
import PersonIcon from '@mui/icons-material/Person';
import KeyIcon from '@mui/icons-material/Key';
//logo
import Logo from "../../img/megaBank.png";


//function component
export default function Login() {

  

  //useFrom為函式返回需要用的值並解構附值
  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      account: "",
      password: ""
    }
  });
  console.log(errors);


  //重新轉址
  const navigate = useNavigate()
  const handleHistory = () => {
    // const user = global.auth.getUser() || {}
    // navigate(`/${user.account}`)
    navigate('/valueData')
    
  }

  const onSubmit = async data => {


    
    try {
      
      toast.success('Login Success');
      setTimeout(() => {
        //跳轉首頁
        handleHistory();
      }, 2000);

    } catch (error) {
      toast.error(error);
    }    
  }



  




  return (
    <div className="login-wrapper">

      <form className="box login-box" onSubmit={handleSubmit(onSubmit)}>

        <div className="field  img-container">
              <figure className="image">
                <img src={Logo} alt="logo"/>
              </figure>
              <label className="label">LOGIN</label>
        </div>

        <div className="field">
          <label className="label">帳號:</label>
          <div className="control has-icons-left">

            <input
              className={`input ${errors.account && 'is-danger'}`}
              type="text"
              placeholder="Account"
              name="account"
              {...register("account", { 
                required: 'Account is required', 
                pattern: {
                value: /^[a-zA-z]\w{1,15}$/, 
                message: 'invalid account' 
              } })}
            ></input>
            <span className="icon is-small is-left">
                    <PersonIcon />
            </span>

            {errors.account && (
              <p className="helper has-text-danger">{errors.account.message}</p>)}
          </div>
        </div>

        <div className="field">
          <label className="label">密碼:</label>
          <div className="control has-icons-left">

            <input
              className={`input ${errors.password && 'is-danger'}`}
              type="password"
              placeholder="Password"
              name="password"
              {...register("password", { 
                required: 'Password is required', 
                minLength: { value: 6, message: "Min length is 6" } })}
            ></input>
              <span className="icon is-small is-left">
                  <KeyIcon />
              </span>
            {errors.password && (
              <p className="helper has-text-danger">{errors.password.message}</p>)}
          </div>
          <br />
          <div className="control btnBox">
            <button type="submit" className="button is-dark loginbtn">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}
