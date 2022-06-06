import React from "react";

//使用 React Hook Form 函式庫
import { useForm } from "react-hook-form";

//使用useNavigate 轉址
import { useNavigate } from "react-router-dom";

//使用axios
import axios from "../../commons/axios";

//使用toast
import { toast } from 'react-toastify';

//使用router
import {Link} from 'react-router-dom';

//使用Panel
// import Panel from '../../components/panel/Panel';


import "./login.scss";
import "../../commons/auth";


import Logo from "../../img/systex-logo.jpg";
import PersonIcon from '@mui/icons-material/Person';
import KeyIcon from '@mui/icons-material/Key';



//function component
export default function Login(props) {



  //useFrom為函式返回需要用的值並解構附值
  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      account: "",
      password: ""
    }
  });

  console.log(errors);
  // console.log(watch("account"));


  //重新轉址
  const navigate = useNavigate()
  function handleHistory() {
    navigate('/')
  }

  const onSubmit = async data => {

    // 2.獲取表單數據
    // const formData = {
    //   eamil: this.accountRef.current.value,
    //   password: this.passwordRef.current.value,
    // };
    
    // console.log(data);

    // 3.處理登入邏輯
    //axios串驗證
    try {
      console.log('data:',data);
      //解構附值
      const { account, password } = data;

      //測試
      let axiosPost = axios.post('/auth/login',{account, password});
      console.log(axiosPost);

      //axios post
      const response = await axios.post('/auth/login', { account, password });
      console.log('response:',response);

      const jwToken = response.data;
      console.log('jwToken',jwToken);

      //web storage 物件 
      //localStorage:可以跨瀏覽器分頁做使用、使用者關掉分頁或瀏覽器再打開資料仍不會消失，且資料無期效限制，資料將永久被保留。(5MB容量)
      //localStorage存入資料：setItem(key,value)//取出資料:getItem(key)//移除資料:removeItem(key)
      //sessionStorage：生命週期較短，當使用者關掉瀏覽器或分頁時，sessionStorage 中的資料將被清空。
      //localStorage.setItem('store_token_id',jwToken) =>global.suth.setToken(jwToken)
      global.auth.setToken(jwToken);

      toast.success('Login Success');

      // 4.跳轉到首頁
      // props.history.push("/");
      handleHistory();
    } catch (error) {
      console.log('error:',error);
      console.log(error.response.data);
      const message = error.response.data.message;
      toast.error(message);

    }    
  }



  




  return (
    <div className="login-wrapper">

      <form className="box login-box" onSubmit={handleSubmit(onSubmit)}>

        <div className="field  img-container">
              <figure className="image">
                <img src={Logo} alt="logo"/>
              </figure>
              <label className="label">SIGNATURE</label>
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
                //value: /^[a-za-z0-9_-]+@[a-za-z0-9_-]+(\.[a-za-z0-9_-]+)+$/, //account驗證正則表達式(email)
                value: /^[a-zA-z]\w{3,15}$/, //au4
                message: 'invalid account' // JS only: <p>error message</p> TS only support string
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
            <button type="submit" className="button is-info loginbtn">
              LOGIN
            </button>
            <Link className='navLink' to="/register">
              <button type="button" className="button is-info">
                REGISTER
              </button>
            </Link>
          </div>
        </div>
      </form>
    </div>
  )
}
