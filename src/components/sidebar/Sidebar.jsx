import "./sidebar.scss";
import DashboardIcon from '@mui/icons-material/Dashboard';
import DescriptionIcon from '@mui/icons-material/Description';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import ListItemButton from '@mui/material/ListItemButton';
import {Link} from "react-router-dom";

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className="top">
        <Link to="/" style={{
          textDecoration: "none"
        }}>
          <span className="title">
            SIGNATURE
          </span>
        </Link>
      </div>
      <div className="center">
        <ul>
          <p className="title">Lists</p>
          <Link to="/users">
            <ListItemButton>
              <li>
                <PersonIcon className="icon"/>
                <span>User</span>
              </li>
            </ListItemButton>
          </Link>

          <p className="title">管理</p>
          <Link to="/">
            <ListItemButton>
              <li>
                <DashboardIcon className="icon"/>
                <span>Dashboard</span>
              </li>
            </ListItemButton>
          </Link>
          <Link to="/techlead">
            <ListItemButton>
              <li>
                <DescriptionIcon className="icon"/>
                <span>人才管理</span>
              </li>
            </ListItemButton>
          </Link>
          <Link to="/sales">
            <ListItemButton>
              <li>
                <DescriptionIcon className="icon"/>
                <span>業務管理</span>
              </li>
            </ListItemButton>
          </Link>
          <Link to="/talent">
            <ListItemButton>
              <li>
                <DescriptionIcon className="icon"/>
                <span>人才打卡管理</span>
              </li>
            </ListItemButton>
          </Link>
          <Link to="/customer">
            <ListItemButton>
              <li>
                <DescriptionIcon className="icon"/>
                <span>客戶簽核管理</span>
              </li>
            </ListItemButton>
          </Link>

          <p className="title">設定</p>

          <ListItemButton>
            <li>
              <SettingsIcon className="icon"/>
              <span>系統設定</span>
            </li>
          </ListItemButton>
          
          <ListItemButton>
            <li>
              <ExitToAppIcon className="icon"/>
              <span>登出</span>
            </li>
          </ListItemButton>

        </ul>
      </div>

    </div>
  )
}

export default Sidebar