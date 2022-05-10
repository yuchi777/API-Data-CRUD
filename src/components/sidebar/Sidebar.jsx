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
                    <li>
                        <PersonIcon className="icon"/>
                        <span>User</span>
                    </li>
                    </Link>
                    <Link to="/products">
                    <li>
                        <CategoryIcon className="icon" />
                        <span>Products</span>
                    </li>
                    </Link>
                    <p className="title">Main</p>
                    <li>
                        <DashboardIcon className="icon" />
                        <span>Dashboard</span>
                    </li>
                    <li>
                        <FindInPageIcon className="icon" />
                        <span>LogSearchReport</span>
                    </li>
                    <li>
                        <FindInPageIcon className="icon" />
                        <span>CheckReport</span>
                    </li>
                    <p className="title">Report</p>
                    <li>
                        <DescriptionIcon className="icon" />
                        <span>DayReport</span>
                    </li>
                    <li>
                        <DescriptionIcon className="icon" />
                        <span>WeekReport</span>
                    </li>
                    <li>
                        <DescriptionIcon className="icon" />
                        <span>MonthReport</span>
                    </li>
                    <p className="title">Set</p>
                    <li>
                        <SettingsIcon className="icon" />
                        <span>Admin Setting</span>
                    </li>
                    <li>
                        <AccountCircleIcon className="icon" />
                        <span>Group Setting</span>
                    </li>
                    <li>
                        <ExitToAppIcon className="icon" />
                        <span>Logout</span>
                    </li>
                </ul>
            </div>
            
        </div>
    )
}

export default Sidebar