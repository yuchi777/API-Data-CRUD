import "./navbar.scss";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";
import SettingsIcon from '@mui/icons-material/Settings';

const Navbar = () => {

  const { dispatch } = useContext(DarkModeContext);

  return (
    <div className='navbar'>
      <div className="wrapper">

        <div className="search">
          <input type="text" placeholder="search..." />
            <SearchOutlinedIcon className="icon"/>
        </div>
        <div className="items">
        <div className="item">
            <ListOutlinedIcon className="icon" onClick={()=>{
              console.log('toggle here')

            }}/>
          </div>
          <div className="item">
            <DarkModeOutlinedIcon className="icon" onClick={()=>{
                    dispatch({type:"TOGGLE"})
            }}/>
          </div>
          <div className="item">
            <SettingsIcon className="icon" />
          </div>
          <div className="item">
          <AccountCircleIcon className="icon" />
          </div>
          <div className="item">
            <img src="https://fakeimg.pl/30x30/" alt="Userimg" className="avatar"/>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Navbar