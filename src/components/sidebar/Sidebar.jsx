import "./sidebar.scss";
import logo from "../../img/logo.png";
import DashboardIcon from '@mui/icons-material/Dashboard';
import FindInPageIcon from '@mui/icons-material/FindInPage';
import DescriptionIcon from '@mui/icons-material/Description';
import PersonIcon from '@mui/icons-material/Person';
import CategoryIcon from '@mui/icons-material/Category';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import ListItemButton from '@mui/material/ListItemButton';
import { Link } from "react-router-dom";


const Sidebar = () => {
    return (
        <div className='sidebar'>
            <div className="top">
                <Link to="/" style={{textDecoration:"none"}}>
                <img src={logo} alt="logoImg" className="logoImg"/>
                </Link>
                <span className="logo">
                    Sysmo System
                </span>
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
                    <Link to="/products">
                    <ListItemButton>
                    <li>
                        <CategoryIcon className="icon" />
                        <span>Products</span>
                    </li>
                    </ListItemButton>
                    </Link>
                    <p className="title">Main</p>
                    <Link to="/">
                    <ListItemButton>
                    <li>
                        <DashboardIcon className="icon" />
                        <span>Dashboard</span>
                    </li>
                    </ListItemButton>
                    </Link>
                    <Link to="/logSearchReport">
                    <ListItemButton>
                    <li>
                        <FindInPageIcon className="icon" />
                        <span>LogSearchReport</span>
                    </li>
                    </ListItemButton>
                    </Link>
                    <Link to="/checkReport">
                    <ListItemButton>
                    <li>
                        <FindInPageIcon className="icon" />
                        <span>CheckReport</span>
                    </li>
                    </ListItemButton>
                    </Link>
                    <p className="title">Report</p>
                    <Link to="/dayReport">
                    <ListItemButton>
                    <li>
                        <DescriptionIcon className="icon" />
                        <span>DayReport</span>
                    </li>
                    </ListItemButton>
                    </Link>
                    <Link to="/weekReport">
                    <ListItemButton>
                    <li>
                        <DescriptionIcon className="icon" />
                        <span>WeekReport</span>
                    </li>
                    </ListItemButton>
                    </Link>
                    <Link to="/monthReport">
                    <ListItemButton>
                    <li>
                        <DescriptionIcon className="icon" />
                        <span>MonthReport</span>
                    </li>
                    </ListItemButton>
                    </Link>
                    <p className="title">Set</p>
                    <ListItemButton>
                    <li>
                        <SettingsIcon className="icon" />
                        <span>Admin Setting</span>
                    </li>
                    </ListItemButton>
                    <ListItemButton>
                    <li>
                        <AccountCircleIcon className="icon" />
                        <span>Group Setting</span>
                    </li>
                    </ListItemButton>
                    <ListItemButton>
                    <li>
                        <ExitToAppIcon className="icon" />
                        <span>Logout</span>
                    </li>
                    </ListItemButton>
                </ul>
            </div>
            
        </div>
    )
}

export default Sidebar