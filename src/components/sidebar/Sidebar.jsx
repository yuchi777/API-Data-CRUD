import "./sidebar.scss";
import DashboardIcon from '@mui/icons-material/Dashboard';
import DescriptionIcon from '@mui/icons-material/Description';
// import PersonIcon from '@mui/icons-material/Person';
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
          {/* <p className="title">ID</p>
          <Link to="/users">
            <ListItemButton>
              <li>
                <PersonIcon className="icon"/>
                <span>User</span>
              </li>
            </ListItemButton>
          </Link> */}

          
          <Link to="/">
            <ListItemButton>
                <li>
                  <DashboardIcon className="icon"/>
                  <span>首頁</span>
                </li>
            </ListItemButton>
          </Link>
          
          <p className="title">人才管理</p>
          {
            (global.auth.getUser()).account === 'sysadmin' ||
            (global.auth.getUser()).account === 'sales' ||
            (global.auth.getUser()).account === 'techlead'
            ? (
              <div>
                <Link to="/talent">
                  <ListItemButton>
                    <li>
                      <DescriptionIcon className="icon"/>
                      <span>人才資料-查詢</span>
                    </li>
                  </ListItemButton>
                </Link>
              </div>
            )
            :''
          }
          {
            (global.auth.getUser()).account === 'sysadmin' ||
            (global.auth.getUser()).account === 'techlead'
            ? (
              <div>
                <Link to="/talent/talentAdd">
                  <ListItemButton>
                    <li>
                      <DescriptionIcon className="icon"/>
                      <span>人才資料-新增</span>
                    </li>
                  </ListItemButton>
                </Link>
                <Link to="/talent/talentEdit">
                  <ListItemButton>
                    <li>
                      <DescriptionIcon className="icon"/>
                      <span>人才資料-修改/刪除</span>
                    </li>
                  </ListItemButton>
                </Link>
              </div>
            )
            :''
          }
          
          <p className="title">業務管理</p>
          {
            (global.auth.getUser()).account === 'sysadmin'
            ||
            (global.auth.getUser()).account === 'sales'
            ||
            (global.auth.getUser()).account === 'techlead'
            ||
            (global.auth.getUser()).account === 'director'
            ||
            (global.auth.getUser()).account === 'hr'
            
            ? (
              <Link to="/sales">
                <ListItemButton>
                  <li>
                    <DescriptionIcon className="icon"/>
                    <span>人才外派資料-查詢</span>
                  </li>
                </ListItemButton>
              </Link>
            )
            :''
          }
          {
            (global.auth.getUser()).account === 'sysadmin'
            ||
            (global.auth.getUser()).account === 'sales'          
            ? (
              <div>
              <Link to="/sales/salesAdd">
                <ListItemButton>
                  <li>
                    <DescriptionIcon className="icon"/>
                    <span>人才外派資料-新增</span>
                  </li>
                </ListItemButton>
              </Link>
              <Link to="/sales/salesEdit">
                <ListItemButton>
                  <li>
                    <DescriptionIcon className="icon"/>
                    <span>人才外派資料-修改/刪除</span>
                  </li>
                </ListItemButton>
              </Link>
              </div>
            )
            :''
          }
          {
            (global.auth.getUser()).account === 'sysadmin'
            ||
            (global.auth.getUser()).account === 'sales'
            ? (
              <div>
                <Link to="/sales/salesContract">
                  <ListItemButton>
                    <li>
                      <DescriptionIcon className="icon"/>
                      <span>客戶合約資料-查詢</span>
                    </li>
                  </ListItemButton>
                </Link>
                <Link to="/sales/salesContractAdd">
                  <ListItemButton>
                    <li>
                      <DescriptionIcon className="icon"/>
                      <span>客戶合約資料-新增</span>
                    </li>
                  </ListItemButton>
                </Link>
                <Link to="/sales/salesContractEdit">
                  <ListItemButton>
                    <li>
                      <DescriptionIcon className="icon"/>
                      <span>客戶合約資料-修改/刪除</span>
                    </li>
                  </ListItemButton>
                </Link>
              </div>
            )
            :''
          }

          <p className="title">人才打卡管理</p>
          <Link to="/talentSign">
          {
            (global.auth.getUser()).account === 'talent' ||
            (global.auth.getUser()).account === 'sysadmin'
            ? (
              <ListItemButton>
              <li>
                <DescriptionIcon className="icon"/>
                <span>人才打卡管理</span>
              </li>
            </ListItemButton>
            )
            :''
          }
          </Link>
          <p className="title">客戶簽核管理</p>
          <Link to="/customer">
          {
            (global.auth.getUser()).account === 'sysadmin' ||
            (global.auth.getUser()).account === 'customer' ||
            (global.auth.getUser()).account === 'sales'
            ? (
              <ListItemButton>
                <li>
                  <DescriptionIcon className="icon"/>
                  <span>客戶簽核管理</span>
                </li>
              </ListItemButton>
            )
            :''
          }
          </Link>

          <p className="title">設定</p>
          {
            (global.auth.getUser()).account === 'sysadmin'
            ? (
              <ListItemButton>
                <li>
                  <SettingsIcon className="icon"/>
                  <span>系統管理</span>
                </li>
              </ListItemButton>
            )
            :''
          }
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