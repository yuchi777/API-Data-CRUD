import React, {useMemo} from 'react';
//使用router
import {Link} from 'react-router-dom';

// import Panel from '../../components/panel/Panel';
import UserProfile from '../../components/userProfile/UserProfile'

import "../../commons/auth";
import "./navbar.scss";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SettingsIcon from '@mui/icons-material/Settings';

const Navbar = (props) => {

  const toProfile = () => {

    console.log('toProfile')

  }

  // useMemo 第一個參數是放函式，第二個參數是該 Memo 所依賴的值 array，意思跟 useEffect 第二個依賴 Array
  // 參數一樣，有變動的話才會重新 render 此函式
  const user = useMemo(() => {
    //解碼token獲得user資料 或回傳空{}
    return global.auth.getUser() || {}
  }, [])





  return (
    <div className='navbar'>
      <div className="wrapper">

        <div className="search">
          <input type="text" placeholder="search..."/>
          <SearchOutlinedIcon className="icon"/>
        </div>
        <div className="items">
          <div className="item">
            <ListOutlinedIcon
              className="icon"
              onClick={() => {
              console.log('toggle here')
            }}/>
          </div>
          <div className="item">
            <SettingsIcon className="icon"/>
          </div>

          <div className="end">
            {(user.name)
              ? (
                <div className='navProfile' onClick={toProfile}>
                  <AccountCircleIcon className="navProfileIcon"/>
                  {user.name}
                </div>
              )
              : (
                <React.Fragment>
                  <Link className='navLink' to="/login">Login</Link>
                  <Link className='navLink' to="/register">Register</Link>
                </React.Fragment>
              )}
          </div>

        </div>

      </div>
    </div>
  )
}

export default Navbar;
