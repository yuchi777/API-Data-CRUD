import "./navbar.scss";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SettingsIcon from '@mui/icons-material/Settings';

const Navbar = () => {


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
            <SettingsIcon className="icon" />
          </div>
          <div className="item">
          <AccountCircleIcon className="icon" />
          </div>
        </div>

      </div>
    </div>
  )
}

export default Navbar

