import "./sidebar.scss";
import {Link} from "react-router-dom";
// import DashboardIcon from '@mui/icons-material/Dashboard';
import DescriptionIcon from '@mui/icons-material/Description';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import ListItemButton from '@mui/material/ListItemButton';

const Sidebar = () => {



  return (
    <div className='sidebar'>
      <div className="top">
        <Link to="/" style={{
          textDecoration: "none"
        }}>
          <span className="title">
            SYSTEM
          </span>
        </Link>
      </div>
      <div className="center">
        <ul>
          {/* <Link to="/">
            <ListItemButton>
                <li>
                  <DashboardIcon className="icon"/>
                  <span>首頁</span>
                </li>
            </ListItemButton>
          </Link> */}
          
          <p className="title">管理</p>
          <div>
            <Link to="/valueData">
              <ListItemButton>
                <li>
                  <DescriptionIcon className="icon"/>
                  <span>資料-CRUD</span>
                </li>
              </ListItemButton>
            </Link>
          </div>

          <p className="title">設定</p>
          <ListItemButton>
            <li>
              <ExitToAppIcon className="icon"/>
              <Link to="/login"><span>登出</span></Link>
            </li>
          </ListItemButton>
        </ul>
      </div>
    </div>
  )
}

export default Sidebar