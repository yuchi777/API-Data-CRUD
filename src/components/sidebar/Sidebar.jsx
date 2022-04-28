import "./sidebar.scss";
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import CategoryIcon from '@mui/icons-material/Category';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import NotificationsIcon from '@mui/icons-material/Notifications';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import PsychologyIcon from '@mui/icons-material/Psychology';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <div className="top">
                <span className="logo">
                    Sysmo Demo
                </span>
            </div>
            <hr />
            <div className="center">
                <ul>
                    <p className="title">Main</p>
                    <li>
                        <DashboardIcon className="icon"/>
                        <span>Dashboard</span>
                    </li>
                    <p className="title">Lists</p>
                    <li>
                        <PersonIcon className="icon"/>
                        <span>User</span>
                    </li>
                    <li>
                        <CategoryIcon className="icon" />
                        <span>Products</span>
                    </li>
                    <li>
                        <CreditCardIcon className="icon" />
                        <span>Orders</span>
                    </li>
                    <li>
                        <LocalShippingIcon className="icon" />
                        <span>Delivery</span>
                    </li>
                    <p className="title">Useful</p>
                    <li>
                        <EqualizerIcon className="icon" />
                        <span>Stats</span>
                    </li>
                    <li>
                        <NotificationsIcon className="icon" />
                        <span>Notifications</span>
                    </li>
                    <p className="title">Service</p>
                    <li>
                        <HealthAndSafetyIcon className="icon" />
                        <span>System Health</span>
                    </li>
                    <li>
                        <PsychologyIcon className="icon" />
                        <span>Logs</span>
                    </li>
                    <li>
                        <SettingsIcon className="icon" />
                        <span>Settings</span>
                    </li>
                    <p className="title">User</p>
                    <li>
                        <AccountCircleIcon className="icon" />
                        <span>Profile</span>
                    </li>
                    <li>
                        <ExitToAppIcon className="icon" />
                        <span>Logout</span>
                    </li>
                </ul>
            </div>
            <div className="bottom">
                <div className="colorOption"></div>
                <div className="colorOption"></div>
            </div>
        </div>
    )
}

export default Sidebar