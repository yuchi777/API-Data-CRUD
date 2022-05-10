import "./widget.scss";
import DnsIcon from '@mui/icons-material/Dns';

const widget = ({type}) => {

  let data;

  switch(type){
    case "all":
      data={
        amount:100,
        title:"所有主機",
        icon: <DnsIcon 
                className="icon"
                style={{
                  color:"#4a4a4a"
                }}
                />
      }
    break;
    case "normal":
      data={
        amount:70,
        title:"正常主機",
        icon: <DnsIcon 
                className="icon"
                style={{
                  color:"#4a4a4a"
                }}
                />
      }
    break;
    case "warning":
      data={
        amount:30,
        title:"告警主機",
        icon: <DnsIcon 
                className="icon"
                style={{
                  color:"#4a4a4a"
                }}
                />
      }
    break;
    default:
      break;
  }


  return (
    <div className="widget">
        <div className="left">
          <span className="title">{data.title}</span>
          <span className="counter">
            {data.amount} 台
          </span>
        </div>
        <div className="right">
          <div className="iconColor">
          {data.icon}
          </div>
        </div>
    </div>
  )
}

export default widget