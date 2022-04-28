import "./sidebar.scss";

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
                    <li>Dashboard</li>
                    <li>LogSearch Report</li>
                    <li>Check Report</li>
                    <li>Day Report</li>
                    <li>Week Report</li>
                    <li>Month Report</li>
                </ul>
            </div>
            <div className="bottom">color options</div>
        </div>
    )
}

export default Sidebar